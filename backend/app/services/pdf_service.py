from reportlab.platypus import SimpleDocTemplate, Paragraph
from reportlab.lib.styles import getSampleStyleSheet


def generate_pdf(file_path, analysis):

    styles = getSampleStyleSheet()

    doc = SimpleDocTemplate(file_path)

    story = []

    story.append(Paragraph("<b>AI Resume Analyzer Report</b>", styles["Title"]))

    story.append(Paragraph(f"<b>ATS Score:</b> {analysis['ats_score']}%", styles["Normal"]))

    story.append(Paragraph(f"<b>Job Match Score:</b> {analysis['job_match_score']}%", styles["Normal"]))

    story.append(Paragraph("<br/><b>Resume Summary</b>", styles["Heading2"]))
    story.append(Paragraph(analysis["summary"], styles["Normal"]))

    story.append(Paragraph("<br/><b>Technical Skills</b>", styles["Heading2"]))

    for skill in analysis["technical_skills"]:
        story.append(Paragraph(f"• {skill}", styles["Normal"]))

    story.append(Paragraph("<br/><b>Matched Skills</b>", styles["Heading2"]))

    for skill in analysis["matched_skills"]:
        story.append(Paragraph(f"• {skill}", styles["Normal"]))

    story.append(Paragraph("<br/><b>Missing Skills</b>", styles["Heading2"]))

    for skill in analysis["missing_skills"]:
        story.append(Paragraph(f"• {skill}", styles["Normal"]))

    story.append(Paragraph("<br/><b>Missing Keywords</b>", styles["Heading2"]))

    for keyword in analysis["missing_keywords"]:
        story.append(Paragraph(f"• {keyword}", styles["Normal"]))

    story.append(Paragraph("<br/><b>Strengths</b>", styles["Heading2"]))

    for item in analysis["strengths"]:
        story.append(Paragraph(f"• {item}", styles["Normal"]))

    story.append(Paragraph("<br/><b>Improvements</b>", styles["Heading2"]))

    for item in analysis["improvements"]:
        story.append(Paragraph(f"• {item}", styles["Normal"]))

    story.append(Paragraph("<br/><b>Interview Questions</b>", styles["Heading2"]))

    for item in analysis["interview_questions"]:
        story.append(Paragraph(f"• {item}", styles["Normal"]))

    doc.build(story)