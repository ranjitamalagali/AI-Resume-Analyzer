from fastapi import APIRouter, HTTPException
from sqlalchemy.orm import Session

from app.database import SessionLocal
from app.models import ResumeAnalysis

router = APIRouter()


@router.get("/history")
def get_history():

    db: Session = SessionLocal()

    try:

        resumes = (
            db.query(ResumeAnalysis)
            .order_by(ResumeAnalysis.id.desc())
            .all()
        )

        history = []

        for resume in resumes:

            history.append({
                "id": resume.id,
                "filename": resume.filename,
                "ats_score": resume.ats_score,
                "job_match_score": resume.job_match_score,
                "created_at": resume.created_at
            })

        return history

    finally:
        db.close()


@router.get("/history/{resume_id}")
def get_resume(resume_id: int):

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

        return {
            "id": resume.id,
            "filename": resume.filename,
            "ats_score": resume.ats_score,
            "job_match_score": resume.job_match_score,
            "summary": resume.summary,
            "technical_skills": resume.technical_skills,
            "matched_skills": resume.matched_skills,
            "missing_skills": resume.missing_skills,
            "missing_keywords": resume.missing_keywords,
            "strengths": resume.strengths,
            "improvements": resume.improvements,
            "interview_questions": resume.interview_questions,
            "created_at": resume.created_at
        }

    finally:
        db.close()