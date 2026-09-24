from fastapi import APIRouter, HTTPException, Query
from typing import List, Dict, Any, Optional
from app.core.database import get_database, db_instance
from app.services.seed_data import PROJECTS_DATA

router = APIRouter(prefix="/projects", tags=["Projects"])

@router.get("", response_model=List[Dict[str, Any]])
async def get_projects(category: Optional[str] = Query(None, description="Filter by category")):
    """Retrieve all featured software engineering projects"""
    if db_instance.is_connected and db_instance.db is not None:
        db = get_database()
        query = {}
        if category and category.lower() != "all":
            query["category"] = category
        cursor = db.projects.find(query, {"_id": 0})
        projects = await cursor.to_list(length=100)
        if projects:
            return projects

    if category and category.lower() != "all":
        return [p for p in PROJECTS_DATA if p.get("category") == category]
    return PROJECTS_DATA

@router.get("/{slug}", response_model=Dict[str, Any])
async def get_project_by_slug(slug: str):
    """Retrieve detailed information about a specific project by slug"""
    if db_instance.is_connected and db_instance.db is not None:
        db = get_database()
        project = await db.projects.find_one({"slug": slug}, {"_id": 0})
        if project:
            return project

    for p in PROJECTS_DATA:
        if p.get("slug") == slug or p.get("id") == slug:
            return p

    raise HTTPException(status_code=404, detail="Project not found")
