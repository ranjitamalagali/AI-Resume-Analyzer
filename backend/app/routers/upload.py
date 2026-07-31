from pathlib import Path
import shutil

from fastapi import APIRouter, UploadFile, File, Form, HTTPException
from sqlalchemy.orm import Session

from app.services.parser import extract_text
from app.services.gemini_service import analyze_resume
from app.database import SessionLocal
from app.crud import save_analysis

router = APIRouter()

UPLOAD_DIR = "app/uploads"
Path(UPLOAD_DIR).mkdir(parents=True, exist_ok=True)


@router.post("/upload")
async def upload_resume(
    file: UploadFile = File(...),
    job_description: str = Form("")
):

    allowed_extensions = [".pdf", ".docx"]
    extension = Path(file.filename).suffix.lower()

    if extension not in allowed_extensions:
        raise HTTPException(
            status_code=400,
            detail="Only PDF and DOCX files are allowed."
        )

    file_path = f"{UPLOAD_DIR}/{file.filename}"

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    resume_text = extract_text(file_path)

    analysis = analyze_resume(resume_text, job_description)

    db: Session = SessionLocal()

    try:
        save_analysis(db, file.filename, analysis)
    finally:
        db.close()

    return {
        "filename": file.filename,
        "analysis": analysis
    }