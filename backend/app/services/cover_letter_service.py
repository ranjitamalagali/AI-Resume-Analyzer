import os
from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)


def generate_cover_letter(resume_text, job_description):

    prompt = f"""
You are an expert HR recruiter.

Generate a professional cover letter based on the resume and job description.

Rules:

- Keep it between 250-350 words.
- Use a professional tone.
- Highlight relevant technical skills.
- Explain why the candidate is a good fit.
- End with a professional closing.

Resume:

{resume_text}

Job Description:

{job_description}
"""

    response = client.models.generate_content(
        model="gemini-3.6-flash",
        contents=prompt
    )

    return response.text