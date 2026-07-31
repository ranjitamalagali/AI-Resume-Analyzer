from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import upload
from app.database import Base, engine
import app.models
from app.routers import history
from app.routers import report

app.include_router(report.router, tags=["Reports"])
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="AI Resume Analyzer API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(upload.router, tags=["Upload"])
app.include_router(history.router, tags=["History"])

@app.get("/")
def root():
    return {
        "message": "🚀 AI Resume Analyzer API is Running!"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }