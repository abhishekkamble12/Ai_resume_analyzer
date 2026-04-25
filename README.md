# 🤖 ResumeAI Analyzer — Precision Career Optimization

[![License: MIT](https://img.shields.io/badge/License-MIT-amber.svg)](LICENSE)
[![Python: 3.8+](https://img.shields.io/badge/Python-3.8+-blue.svg?logo=python&logoColor=white)](https://python.org)
[![Django: 5.2](https://img.shields.io/badge/Django-5.2-092e20.svg?logo=django&logoColor=white)](https://djangoproject.com)
[![React: 19](https://img.shields.io/badge/React-19.0-61dafb.svg?logo=react&logoColor=black)](https://reactjs.org)
[![Tailwind: 4.0](https://img.shields.io/badge/Tailwind-4.0-38bdf8.svg?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![AI: LangChain](https://img.shields.io/badge/AI-LangChain-green.svg)](https://langchain.com)

**ResumeAI Analyzer** is a high-performance, full-stack intelligence platform that leverages Large Language Models to diagnose and optimize professional resumes. Designed for the modern job seeker, it identifies high-impact keyword gaps, structural weaknesses, and ATS (Applicant Tracking System) alignment to ensure you never get filtered out again.

---

## 🚀 Key Evolutionary Features

### 🧠 **Intelligent Diagnostics**
Powered by **LangChain 0.3** and **Falcon-7B-Instruct**, our engine performs a deep semantic scan of your PDF, evaluating everything from action-verb impact to skill-set density.

### 💎 **Next-Gen Aesthetics**
A sophisticated, **dark-mode interface** built with React 19 and Tailwind CSS 4. Experience fluid animations, cinematic glassmorphism, and a dashboard that feels as professional as your career deserves.

### 🛡️ **Enterprise-Grade Foundation**
- **Django REST Framework** backend providing high-availability API services.
- **Secure Token Authentication** ensuring your data remains private and accessible only to you.
- **Robust File Management** with automated cleanup and secure temporary processing.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | React 19, Vite, Tailwind 4 | Responsive, state-of-the-art UI |
| **Backend** | Django 5.2, Python 3.x | Core logic and API orchestration |
| **AI/ML** | LangChain, HuggingFace Hub | NLP Analysis and Report generation |
| **Database** | SQLite 3 | Lightweight, portable data persistence |
| **Styling** | Custom Glassmorphism, CSS4 | Visual excellence and animations |

---

## 📖 Setup & Installation

### 1️⃣ Clone the Environment
```bash
git clone https://github.com/abhishekkamble12/Ai_resume_analyzer.git
cd Ai_resume_analyzer
```

### 2️⃣ Backend Intelligence Setup
```bash
cd backend
# Create virtual environment
python -m venv venv
# Activate (Windows)
.\venv\Scripts\activate
# Activate (Mac/Linux)
source venv/bin/activate

# Install requirements
pip install -r requirements.txt

# Migrate Database
python manage.py migrate

# Create your .env file
# Add: HUGGINGFACEHUB_API_TOKEN=your_token_here
```

### 3️⃣ Frontend User Experience Setup
```bash
cd ../myfrontend
npm install
npm run dev
```

---

## 🔄 How It Works

1. **Upload**: Drop your PDF resume into our secure analyzer portal.
2. **Scan**: Our backend extracts text and feeds it into a custom LangChain analysis pipe.
3. **Analyze**: The AI evaluates your content against 10+ industry-standard strategic metrics.
4. **Report**: Receive a beautiful, categorized report with specific actionable suggestions to land 10x more interviews.

---

## 📁 Project Blueprint

```text
Ai_resume_analyzer/
├── 📂 backend/               # Django REST API Architecture
│   ├── 📂 chaicode/          # Core Settings & Global Routing
│   ├── 📂 myai/              # AI Processing Engine (LangChain)
│   ├── 📂 myapp/             # Identity & Access Management
│   └── .env                  # Private Configuration
├── 📂 myfrontend/            # React 19 Presentation Layer
│   ├── 📂 src/
│   │   ├── 📂 components/    # Reusable UI Modules
│   │   ├── 📂 services/      # Backend Communication Logic
│   │   └── index.css         # Design Tokens & Animations
│   └── package.json          # Node Ecosystem
└── .gitignore                # Clean Version Control Mapping
```

## 🤝 Contributing

We welcome contributions! Please feel free to open a Pull Request or report an Issue.

---

### Developed with ⚡ and ❤️ by [Abhishek Kamble](https://github.com/abhishekkamble12)
