import logging
from typing import Optional
from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase
from app.core.config import settings
from app.services.seed_data import PROFILE_DATA, SKILLS_DATA, EXPERIENCES_DATA, PROJECTS_DATA

logger = logging.getLogger("app.database")

class Database:
    client: Optional[AsyncIOMotorClient] = None
    db: Optional[AsyncIOMotorDatabase] = None
    is_connected: bool = False

db_instance = Database()

async def connect_to_mongo():
    logger.info(f"Connecting to MongoDB at {settings.MONGODB_URL}...")
    try:
        db_instance.client = AsyncIOMotorClient(
            settings.MONGODB_URL,
            serverSelectionTimeoutMS=3000
        )
        # Verify connection
        await db_instance.client.admin.command('ping')
        db_instance.db = db_instance.client[settings.DATABASE_NAME]
        db_instance.is_connected = True
        logger.info(f"Successfully connected to MongoDB database '{settings.DATABASE_NAME}'")
        
        # Initialize indexes and seed data if needed
        await init_db()
    except Exception as e:
        logger.warning(f"Could not connect to MongoDB directly: {e}. Will operate in fallback memory/seed mode if needed.")
        db_instance.is_connected = False

async def close_mongo_connection():
    if db_instance.client:
        logger.info("Closing MongoDB connection...")
        db_instance.client.close()
        db_instance.is_connected = False
        logger.info("MongoDB connection closed.")

def get_database() -> Optional[AsyncIOMotorDatabase]:
    return db_instance.db

async def init_db():
    """Seed initial data and create indexes if collections are empty"""
    if not db_instance.is_connected or db_instance.db is None:
        return
        
    db = db_instance.db
    
    try:
        # Create indexes
        await db.projects.create_index("slug", unique=True)
        await db.projects.create_index("category")
        await db.skills.create_index("category_id")
        await db.messages.create_index("created_at")
        
        # Check and seed profile
        if await db.profiles.count_documents({}) == 0:
            logger.info("Seeding profile data...")
            await db.profiles.insert_one(PROFILE_DATA)
            
        # Check and seed skills
        if await db.skills.count_documents({}) == 0:
            logger.info("Seeding skills data...")
            await db.skills.insert_many(SKILLS_DATA)
            
        # Check and seed experiences
        if await db.experiences.count_documents({}) == 0:
            logger.info("Seeding experiences data...")
            await db.experiences.insert_many(EXPERIENCES_DATA)
            
        # Check and seed projects
        if await db.projects.count_documents({}) == 0:
            logger.info("Seeding projects data...")
            await db.projects.insert_many(PROJECTS_DATA)
            
        logger.info("Database initialization and seeding completed successfully.")
    except Exception as e:
        logger.error(f"Error during DB initialization/seeding: {e}")
