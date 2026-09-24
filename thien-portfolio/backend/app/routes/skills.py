from fastapi import APIRouter
from typing import List, Dict, Any
from app.core.database import get_database, db_instance
from app.services.seed_data import SKILLS_DATA

router = APIRouter(prefix="/skills", tags=["Skills"])

@router.get("", response_model=List[Dict[str, Any]])
async def get_skills():
    """Retrieve categorized technical skills matrix"""
    if db_instance.is_connected and db_instance.db is not None:
        db = get_database()
        cursor = db.skills.find({}, {"_id": 0})
        skills = await cursor.to_list(length=100)
        if skills:
            return skills
    return SKILLS_DATA
