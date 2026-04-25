import os
from pathlib import Path
from dotenv import load_dotenv

# Load environment variables from backend root .env
BACKEND_DIR = Path(__file__).resolve().parent.parent
load_dotenv(os.path.join(BACKEND_DIR, '.env'))

hf_api_token = os.getenv("HUGGINGFACEHUB_API_TOKEN")


def process_pdf_with_langchain(file_path):
    """
    Process a PDF resume using LangChain and HuggingFace models.
    Returns AI-generated analysis and suggestions.
    """
    # Import here to avoid startup crashes if dependencies are missing
    try:
        from langchain_community.document_loaders import PyPDFLoader
        from langchain.chains.question_answering import load_qa_chain
        from langchain_community.llms import HuggingFaceHub
    except ImportError as e:
        raise ImportError(
            f"Required packages not installed. Run: pip install langchain-community pypdf "
            f"huggingface-hub. Error: {e}"
        )

    if not hf_api_token or hf_api_token == "your token":
        raise ValueError(
            "HUGGINGFACEHUB_API_TOKEN is not set. "
            "Please add your HuggingFace API token to backend/.env"
        )

    # Load PDF
    loader = PyPDFLoader(file_path)
    documents = loader.load()

    if not documents:
        raise ValueError("Could not extract any text from the PDF file.")

    # Initialize HuggingFace model
    llm = HuggingFaceHub(
        repo_id="tiiuae/falcon-7b-instruct",
        model_kwargs={"temperature": 0.3, "max_new_tokens": 1024},
        huggingfacehub_api_token=hf_api_token
    )

    # Load QA chain
    chain = load_qa_chain(llm, chain_type="stuff")

    # Define the analysis prompt
    question = (
        "You are a professional resume analyzer. Review this resume thoroughly and provide:\n"
        "1. A brief summary of the candidate's profile\n"
        "2. Key strengths identified\n"
        "3. Areas for improvement\n"
        "4. Specific suggestions to improve chances of getting selected by top companies\n"
        "5. ATS (Applicant Tracking System) compatibility tips\n"
    )

    # Run the chain
    response = chain.invoke(
        {"input_documents": documents, "question": question}
    )

    # chain.invoke returns a dict with 'output_text' key
    return response.get("output_text", str(response))