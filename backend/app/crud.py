import json

from sqlalchemy.orm import Session

from app.models import ResumeAnalysis


def save_analysis(db: Session, filename: str, analysis: dict):

    resume = ResumeAnalysis(
        filename=filename,
        ats_score=analysis.get("ats_score", 0),
        job_match_score=analysis.get("job_match_score", 0),
        summary=analysis.get("summary", ""),
        technical_skills=analysis.get("technical_skills", []),
        matched_skills=analysis.get("matched_skills", []),
        missing_skills=analysis.get("missing_skills", []),
        missing_keywords=analysis.get("missing_keywords", []),
        strengths=analysis.get("strengths", []),
        improvements=analysis.get("improvements", []),
        interview_questions=analysis.get("interview_questions", [])
    )

    db.add(resume)
    db.commit()
    db.refresh(resume)

    return resume