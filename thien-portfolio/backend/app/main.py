import logging
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.gzip import GZipMiddleware
from app.core.config import settings
from app.core.database import connect_to_mongo, close_mongo_connection, db_instance
from app.routes import profile, skills, journey, projects, contact

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s"
)
logger = logging.getLogger("app.main")

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: connect to database & initialize indexes/seed data
    logger.info("Initializing Portfolio API application...")
    await connect_to_mongo()
    yield
    # Shutdown: cleanly close database connection
    logger.info("Shutting down Portfolio API application...")
    await close_mongo_connection()

app = FastAPI(
    title=settings.APP_NAME,
    description="Backend API phục vụ Portfolio & Hành trình sự nghiệp của Ngô Minh Thiên (Software Engineer)",
    version="1.0.0",
    lifespan=lifespan
)

# Compression Middleware for high-traffic throughput
app.add_middleware(GZipMiddleware, minimum_size=1000)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API routes
app.include_router(profile.router, prefix="/api")
app.include_router(skills.router, prefix="/api")
app.include_router(journey.router, prefix="/api")
app.include_router(projects.router, prefix="/api")
app.include_router(contact.router, prefix="/api")

@app.get("/api/health", tags=["Health"])
async def health_check():
    """Health check endpoint checking application and MongoDB connection state"""
    return {
        "status": "healthy",
        "app": settings.APP_NAME,
        "database": {
            "type": "MongoDB",
            "connected": db_instance.is_connected,
            "database_name": settings.DATABASE_NAME
        }
    }

@app.get("/", tags=["Root"])
async def root():
    return {
        "message": f"Welcome to {settings.APP_NAME}",
        "documentation": "/docs",
        "health": "/api/health"
    }
