import os
import json
from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)


def analyze_resume(resume_text, job_description=""):

    prompt = f"""
You are an expert ATS Resume Analyzer.

Compare the resume with the given job description.

IMPORTANT:
Return ONLY valid JSON.
Do NOT add markdown.
Do NOT use ```json.
Do NOT add explanations.

Return exactly in this format:

{{
    "ats_score": 0,
    "job_match_score": 0,
    "summary": "",
    "technical_skills": [],
    "matched_skills": [],
    "missing_skills": [],
    "missing_keywords": [],
    "strengths": [],
    "improvements": [],
    "interview_questions": []
}}

Resume:
{resume_text}

Job Description:
{job_description}
"""

    try:
        response = client.models.generate_content(
            model="gemini-3.6-flash",
            contents=prompt
        )

        text = response.text.strip()

        # Remove markdown if Gemini returns it
        text = text.replace("```json", "")
        text = text.replace("```", "")
        text = text.strip()

        print("\n========== GEMINI RESPONSE ==========")
        print(text)
        print("=====================================\n")

        data = json.loads(text)

        # Ensure every expected field exists
        data.setdefault("ats_score", 0)
        data.setdefault("job_match_score", 0)
        data.setdefault("summary", "")
        data.setdefault("technical_skills", [])
        data.setdefault("matched_skills", [])
        data.setdefault("missing_skills", [])
        data.setdefault("missing_keywords", [])
        data.setdefault("strengths", [])
        data.setdefault("improvements", [])
        data.setdefault("interview_questions", [])

        return data

    except Exception as e:

        print("\n========== GEMINI ERROR ==========")
        print(e)
        print("==================================\n")

        return {
            "ats_score": 0,
            "job_match_score": 0,
            "summary": "Unable to analyze resume.",
            "technical_skills": [],
            "matched_skills": [],
            "missing_skills": [],
            "missing_keywords": [],
            "strengths": [],
            "improvements": [
                "Please try again."
            ],
            "interview_questions": []
        }