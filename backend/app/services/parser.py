from pathlib import Path
import pdfplumber
from docx import Document


def extract_pdf_text(file_path: str) -> str:
    """
    Extract text from a PDF file.
    """
    text = ""

    with pdfplumber.open(file_path) as pdf:
        for page in pdf.pages:
            page_text = page.extract_text()

            if page_text:
                text += page_text + "\n"

    return text.strip()


def extract_docx_text(file_path: str) -> str:
    """
    Extract text from a DOCX file.
    """
    document = Document(file_path)

    text = ""

    for paragraph in document.paragraphs:
        text += paragraph.text + "\n"

    return text.strip()


def extract_text(file_path: str) -> str:
    """
    Detect the file type and extract text.
    """
    extension = Path(file_path).suffix.lower()

    if extension == ".pdf":
        return extract_pdf_text(file_path)

    elif extension == ".docx":
        return extract_docx_text(file_path)

    else:
        raise ValueError("Unsupported file format")