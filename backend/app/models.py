from sqlalchemy import Column, Integer, String, Text, JSON, TIMESTAMP
from sqlalchemy.sql import func

from app.database import Base


class ResumeAnalysis(Base):
    __tablename__ = "resume_analysis"

    id = Column(Integer, primary_key=True, index=True)

    filename = Column(String(255))

    ats_score = Column(Integer)

    job_match_score = Column(Integer)

    summary = Column(Text)

    technical_skills = Column(JSON)

    matched_skills = Column(JSON)

    missing_skills = Column(JSON)

    missing_keywords = Column(JSON)

    strengths = Column(JSON)

    improvements = Column(JSON)

    interview_questions = Column(JSON)

    created_at = Column(TIMESTAMP, server_default=func.now())