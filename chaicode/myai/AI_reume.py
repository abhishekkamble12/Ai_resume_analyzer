# from langchain.document_loaders import PyPDFLoader
# from langchain.chains.question_answering import load_qa_chain
# from langchain.llms import HuggingFaceHub
# from langchain.prompts import PromptTemplate
# from dotenv import load_dotenv
# import os

# # Load environment variables
# load_dotenv()
# hf_api_token = "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"

# def process_pdf_with_langchain(file_path):
#     # Load PDF file
#     loader = PyPDFLoader(file_path)
#     documents = loader.load()

#     # Initialize HuggingFace model via HuggingFaceHub
#     llm = HuggingFaceHub(
#        repo_id="google/flan-t5-xl",
#     model_kwargs={"temperature": 0.5, "max_new_tokens": 256},
#     huggingfacehub_api_token="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"
#     )

#     # Load chain
#     chain = load_qa_chain(llm, chain_type="stuff")

#     # Define question/prompt
#     question = (
#         "You are a resume analyzer. Review this resume and suggest changes to improve "
#         "chances of getting selected by top companies. Also provide a summary."
#     )

#     # Run chain
#     response = chain.run(input_documents=documents, question=question)
#     print(response)

# # Example usage
# if __name__ == "__main__":
#     file_path = "your_resume.pdf"
#     result = process_pdf_with_langchain(file_path)
#     print(result)
from langchain.document_loaders import PyPDFLoader
from langchain.chains.question_answering import load_qa_chain
from langchain.llms import HuggingFaceHub
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()
hf_api_token = os.getenv("HUGGINGFACEHUB_API_TOKEN")

def process_pdf_with_langchain(file_path):
    loader = PyPDFLoader(file_path)
    documents = loader.load()

    llm = HuggingFaceHub(
        repo_id="tiiuae/falcon-7b-instruct",  # ✅ Better than flan-t5-xl here
        model_kwargs={"temperature": 0.3, "max_new_tokens": 1024},
        huggingfacehub_api_token=hf_api_token
    )

    chain = load_qa_chain(llm, chain_type="stuff")  # works well with instruct models

    question = (
        "You are a resume analyzer. Review this resume and suggest changes to improve "
        "chances of getting selected by top companies. Also provide a summary."
    )

    response = chain.run(input_documents=documents, question=question)
    return response
