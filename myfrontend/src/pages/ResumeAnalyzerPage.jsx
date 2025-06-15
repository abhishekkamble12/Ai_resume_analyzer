import React from 'react';
import ChatInterface from '../components/ResumeAnalyzer/ChatInterface';
import '../styles/ResumeAnalyzerPage.css';

const ResumeAnalyzerPage = () => {
  return (
    <div className="resume-analyzer-page">
      <div className="resume-analyzer-container">
        <div className="resume-analyzer-header">
          <h1>AI Resume Analyzer</h1>
          <p className="description">
            Upload your resume and get AI-powered insights, suggestions, and analysis.
            Our AI will help you improve your resume and highlight your strengths.
          </p>
        </div>
        <ChatInterface />
      </div>
    </div>
  );
};

export default ResumeAnalyzerPage; 