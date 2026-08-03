from pathlib import Path

from fastapi import APIRouter, HTTPException
from fastapi.responses import FileResponse
from sqlalchemy.orm import Session

from app.database import SessionLocal
from app.models import ResumeAnalysis
from app.services.pdf_service import generate_pdf

router = APIRouter()

REPORT_FOLDER = "app/reports"
Path(REPORT_FOLDER).mkdir(parents=True, exist_ok=True)


@router.get("/report/{resume_id}")
def download_report(resume_id: int):

    db: Session = SessionLocal()

    try:

        resume = (
            db.query(ResumeAnalysis)
            .filter(ResumeAnalysis.id == resume_id)
            .first()
        )

        if resume is None:
            raise HTTPException(
                status_code=404,
                detail="Resume analysis not found."
            )

        analysis = {
            "ats_score": resume.ats_score,
            "job_match_score": resume.job_match_score,
            "summary": resume.summary,
            "technical_skills": resume.technical_skills or [],
            "matched_skills": resume.matched_skills or [],
            "missing_skills": resume.missing_skills or [],
            "missing_keywords": resume.missing_keywords or [],
            "strengths": resume.strengths or [],
            "improvements": resume.improvements or [],
            "interview_questions": resume.interview_questions or []
        }

        pdf_path = f"{REPORT_FOLDER}/resume_report_{resume.id}.pdf"

        generate_pdf(pdf_path, analysis)

        return FileResponse(
            path=pdf_path,
            filename=f"Resume_Report_{resume.id}.pdf",
            media_type="application/pdf"
        )

    finally:
        db.close()