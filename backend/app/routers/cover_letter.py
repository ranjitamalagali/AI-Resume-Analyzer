from fastapi import APIRouter
from pydantic import BaseModel

from app.services.cover_letter_service import generate_cover_letter

router = APIRouter()


class CoverLetterRequest(BaseModel):
    resume_text: str
    job_description: str


@router.post("/cover-letter")
def create_cover_letter(data: CoverLetterRequest):

    letter = generate_cover_letter(
        data.resume_text,
        data.job_description
    )

    return {
        "cover_letter": letter
    }