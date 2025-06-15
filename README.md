# AI Resume Analyzer 🤖📄

An intelligent resume analysis platform that leverages AI to provide detailed feedback and insights on resumes. The application uses advanced language models to analyze resumes and provide constructive suggestions for improvement.

## 🌟 Features

- 📄 PDF Resume Upload and Processing
- 🤖 AI-Powered Resume Analysis
- 📊 Detailed Feedback and Suggestions
- 📱 Modern, Responsive UI
- 🔒 Secure File Handling
- 📈 Performance Metrics and Insights

## 🛠️ Tech Stack

### Backend
- 🐍 Python 3.x
- 🎯 Django  Framework 
- 🧠 LangChain for AI Processing
- 🤗 Hugging Face Models
- 📊 SQLite Database
- 🔄 RESTful API Architecture

### Frontend
- ⚛️ React 19
- 🎨 TailwindCSS 4
- 📄 React-PDF for PDF handling
- 🚀 Vite for Build Tooling
- 🔄 React Router for Navigation
- 📦 Axios for API Communication

### Development Tools
- 🛠️ ESLint for Code Quality
- 📦 npm for Package Management
- 🔄 Git for Version Control
- 🚀 Vite for Development Server

## 📋 Project Structure

```
Ai_resume_analyzer/
├── chaicode/                 # Backend Django Application
│   ├── myai/                # AI Processing Module
│   ├── myapp/               # Main Application Logic
│   ├── chaicode/            # Project Configuration
│   └── db.sqlite3           # Database
├── myfrontend/              # React Frontend
│   ├── src/                 # Source Code
│   ├── public/              # Static Assets
│   └── package.json         # Dependencies
└── myvenv/                  # Python Virtual Environment
```

## 🚀 Workflow

1. **Resume Upload**
   - User uploads PDF resume through the React frontend
   - File is securely transmitted to Django backend
   - PDF is processed and converted to text

2. **AI Analysis**
   - Text is processed using LangChain
   - Hugging Face models analyze the content
   - Multiple aspects are evaluated:
     - Skills and Experience
     - Education and Qualifications
     - Format and Structure
     - Keywords and ATS Compatibility

3. **Feedback Generation**
   - AI generates comprehensive feedback
   - Suggestions for improvement are created
   - Performance metrics are calculated

4. **Results Display**
   - Analysis results are sent back to frontend
   - Interactive UI displays feedback
   - User can view detailed suggestions

## 🛠️ Setup Instructions

1. **Backend Setup**
   ```bash
   cd chaicode
   python -m venv myvenv
   source myvenv/bin/activate  # On Windows: myvenv\Scripts\activate
   pip install -r requirements.txt
   python manage.py migrate
   python manage.py runserver
   ```

2. **Frontend Setup**
   ```bash
   cd myfrontend
   npm install
   npm run dev
   ```

3. **Environment Variables**
   Create a `.env` file in the backend directory:
   ```
   HUGGINGFACE_API_TOKEN=your_token_here
   SECRET_KEY=your_django_secret_key
   ```

## 🔑 API Keys Required

- Hugging Face API Token
- Django Secret Key

## 👥 Author

- **Abhishek Kamble**
  - GitHub: [@abhishekkamble12](https://github.com/abhishekkamble12)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [LangChain](https://www.langchain.com/) for AI processing framework
- [Hugging Face](https://huggingface.co/) for AI models
- [Django](htt
