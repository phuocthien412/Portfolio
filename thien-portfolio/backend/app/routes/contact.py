import logging
from datetime import datetime, timezone
from fastapi import APIRouter, HTTPException, status, BackgroundTasks
from typing import Dict, Any, List
from app.core.database import get_database, db_instance
from app.models.schemas import ContactMessageCreate
from app.services.email_service import send_contact_notification_sync

logger = logging.getLogger("app.contact")
router = APIRouter(prefix="/contact", tags=["Contact"])

# In-memory buffer if DB is in fallback mode
IN_MEMORY_MESSAGES: List[Dict[str, Any]] = []

@router.post("", status_code=status.HTTP_201_CREATED)
async def submit_contact_message(msg_in: ContactMessageCreate, background_tasks: BackgroundTasks):
    """Save contact/inquiry message into MongoDB database and trigger email notification"""
    doc = {
        "name": msg_in.name,
        "email": msg_in.email,
        "subject": msg_in.subject,
        "message": msg_in.message,
        "created_at": datetime.now(timezone.utc).isoformat(),
        "status": "unread"
    }

    inserted_id = None
    if db_instance.is_connected and db_instance.db is not None:
        try:
            db = get_database()
            result = await db.messages.insert_one(doc)
            inserted_id = str(result.inserted_id)
            logger.info(f"New contact message saved to MongoDB with id {inserted_id}")
        except Exception as e:
            logger.error(f"Failed to persist contact message in MongoDB: {e}")

    if not inserted_id:
        # Save to memory fallback
        doc["_id"] = f"mem_{len(IN_MEMORY_MESSAGES) + 1}"
        IN_MEMORY_MESSAGES.append(doc)
        inserted_id = doc["_id"]

    # Queue background email dispatch
    background_tasks.add_task(
        send_contact_notification_sync,
        name=msg_in.name,
        email=msg_in.email,
        subject=msg_in.subject,
        message=msg_in.message
    )

    return {
        "status": "success",
        "message": f"Cảm ơn {msg_in.name}! Tin nhắn của bạn đã được gửi thành công đến Ngô Minh Thiên.",
        "message_id": inserted_id,
        "timestamp": doc["created_at"]
    }

@router.get("/messages")
async def list_recent_messages():
    """Retrieve recent messages (for dev verification / guestbook)"""
    if db_instance.is_connected and db_instance.db is not None:
        db = get_database()
        cursor = db.messages.find({}, {"_id": 0}).sort("created_at", -1).limit(20)
        messages = await cursor.to_list(length=20)
        return messages
    return IN_MEMORY_MESSAGES[-20:]
