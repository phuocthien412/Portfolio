from fastapi import APIRouter
from typing import Dict, Any
from app.core.database import get_database, db_instance
from app.services.seed_data import PROFILE_DATA

router = APIRouter(prefix="/profile", tags=["Profile"])

@router.get("", response_model=Dict[str, Any])
async def get_profile():
    """Retrieve full personal profile and career objective"""
    if db_instance.is_connected and db_instance.db is not None:
        db = get_database()
        profile = await db.profiles.find_one({}, {"_id": 0})
        if profile:
            return profile
    return PROFILE_DATA
