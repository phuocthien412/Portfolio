from fastapi import APIRouter
from typing import List, Dict, Any
from app.core.database import get_database, db_instance
from app.services.seed_data import EXPERIENCES_DATA

router = APIRouter(prefix="/journey", tags=["Career Journey & Education"])

@router.get("", response_model=List[Dict[str, Any]])
async def get_journey():
    """Retrieve professional career milestones, work experiences, and education"""
    if db_instance.is_connected and db_instance.db is not None:
        db = get_database()
        cursor = db.experiences.find({}, {"_id": 0})
        experiences = await cursor.to_list(length=100)
        if experiences:
            return experiences
    return EXPERIENCES_DATA
