# Resume Analyzer using LangChain & Hugging Face 🤖📄

This project is an AI-powered resume analysis tool built with **LangChain** and **Hugging Face Inference API**. It processes PDF resumes, analyzes their content, and provides:

- 🔍 Constructive suggestions to improve the resume
- 🧠 A concise summary of the candidate's profile
- ✅ Feedback to increase chances of selection by top companies

## 🔧 Tech Stack

- 🧠 [LangChain](https://www.langchain.com/)
- 🤗 [Hugging Face Hub](https://huggingface.co/)
- 📄 PDF parsing via `PyPDFLoader`
- 🐍 Python

## 🚀 Features

- Upload a PDF resume
- Automatically processed by an LLM (e.g., Falcon-7B, Mistral, or Flan-T5)
- Get instant feedback and summary
- Easy to integrate into web or backend systems

## 📦 Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/abhishekkamble12/Ai_resume_analyzer.git
   cd Ai_resume_analyzer
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Set up environment variables:
   ```bash
   # Create a .env file and add your Hugging Face API token
   HUGGINGFACE_API_TOKEN=your_token_here
   ```

## 🛠️ Usage

1. Place your PDF resume in the `resumes` directory
2. Run the analyzer:
   ```bash
   python main.py
   ```
3. View the analysis results in the console or output directory

## 📝 Project Structure

```
Ai_resume_analyzer/
├── main.py              # Main application entry point
├── requirements.txt     # Project dependencies
├── .env                # Environment variables
├── resumes/            # Directory for input resumes
└── output/            # Directory for analysis results
```

## 🔑 API Keys

This project requires a Hugging Face API token. You can get one by:
1. Creating an account on [Hugging Face](https://huggingface.co/)
2. Going to your profile settings
3. Generating a new API token

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Author

- **Abhishek Kamble**
  - GitHub: [@abhishekkamble12](https://github.com/abhishekkamble12)

## 🙏 Acknowledgments

- [LangChain](https://www.langchain.com/) for the amazing framework
- [Hugging Face](https://huggingface.co/) for the powerful AI models
- All contributors and users of this project
