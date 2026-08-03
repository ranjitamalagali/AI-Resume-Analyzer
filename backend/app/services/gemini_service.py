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

Compare the following resume with the given job description.

Return ONLY valid JSON.

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

        print("===================================")
        print("Resume length:", len(resume_text))
        print("Job description length:", len(job_description))
        print("Using model: gemini-3.6-flash")
        print("===================================")

        response = client.models.generate_content(
            model="gemini-3.6-flash",
            contents=prompt
        )

        text = response.text.strip()

        print("\n========== RAW GEMINI RESPONSE ==========")
        print(text)
        print("=========================================\n")

        # Remove markdown if Gemini returns it
        text = text.replace("```json", "")
        text = text.replace("```", "").strip()

        # Extract JSON
        start = text.find("{")
        end = text.rfind("}")

        if start == -1 or end == -1:
            raise ValueError("Gemini did not return valid JSON.")

        text = text[start:end + 1]

        data = json.loads(text)

        defaults = {
            "ats_score": 0,
            "job_match_score": 0,
            "summary": "",
            "technical_skills": [],
            "matched_skills": [],
            "missing_skills": [],
            "missing_keywords": [],
            "strengths": [],
            "improvements": [],
            "interview_questions": [],
        }

        for key, value in defaults.items():
            data.setdefault(key, value)

        return data

    except Exception as e:

        print("\n========== GEMINI ERROR ==========")
        print(type(e).__name__)
        print(e)
        print("==================================\n")

        raise