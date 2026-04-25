import axios from "axios";
import React, { useState, useRef } from "react";

function ResumeAnalyzer() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setError(null);
      setResult(null);
    } else {
      setError("Please select a valid PDF file.");
      setFile(null);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === "application/pdf") {
      setFile(droppedFile);
      setError(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setError("Please select a resume file first.");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    const formData = new FormData();
    formData.append("file", file); // Backend now accepts 'file' or 'pdf'

    try {
      const resp = await axios.post("http://127.0.0.1:8000/api/analyze-resume/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      
      if (resp.data.status === "success" || resp.data.result) {
        setResult(resp.data.result);
      } else {
        setError("Analysis complete but no data returned.");
      }
    } catch (err) {
      console.error("Upload failed:", err);
      setError(err.response?.data?.error || "Failed to analyze resume. Please check if the backend is running.");
    } finally {
      setLoading(false);
    }
  };

  // Helper to format the AI response text
  const formatResult = (text) => {
    if (!text) return null;
    return text.split('\n').map((line, i) => (
      <p key={i} className={line.startsWith('#') || line.toUpperCase() === line ? "font-bold text-primary mt-4 mb-2" : "mb-2 text-slate-300 leading-relaxed"}>
        {line.replace(/^[\*\-\#\d\.]+\s?/, '')}
      </p>
    ));
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black mb-4">AI Resume <span className="text-primary">Analyzer</span></h1>
        <p className="text-slate-400">Upload your PDF resume and let our AI provide detailed strategic feedback.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Upload Section */}
        <div className="space-y-8">
          <div 
            onClick={() => fileInputRef.current.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            className={`cursor-pointer group relative rounded-[32px] border-2 border-dashed transition-all duration-300 p-12 flex flex-col items-center justify-center text-center 
              ${file ? 'border-primary bg-primary/5' : 'border-white/10 hover:border-primary/40 bg-white/5 hover:bg-white/[0.07]'}`}
          >
            <input 
              type="file" 
              ref={fileInputRef}
              onChange={handleFileChange} 
              className="hidden" 
              accept=".pdf"
            />
            
            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-6 transition-all duration-500 
              ${file ? 'bg-primary text-black scale-110 rotate-0' : 'bg-white/10 text-slate-400 group-hover:scale-110 group-hover:rotate-12'}`}>
              {file ? "📄" : "📤"}
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              {file ? file.name : "Choose a PDF File"}
            </h3>
            <p className="text-sm text-slate-500">
              {file ? `${(file.size / 1024).toFixed(1)} KB` : "Drag and drop your resume here, or click to browse"}
            </p>

            {file && (
                <button 
                    onClick={(e) => {e.stopPropagation(); setFile(null);}}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-500/20 hover:text-red-500 transition-colors"
                >
                    ✕
                </button>
            )}
          </div>

          <button
            onClick={handleSubmit}
            disabled={!file || loading}
            className={`w-full py-5 rounded-2xl font-bold text-lg transition-all shadow-xl
              ${!file || loading 
                ? 'bg-white/5 text-slate-500 cursor-not-allowed border border-white/5' 
                : 'bg-primary hover:bg-primary-dark text-black shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1'}`}
          >
            {loading ? (
                <div className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    <span>Analyzing...</span>
                </div>
            ) : "Analyze My Resume"}
          </button>

          {error && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm flex items-center gap-3 animate-float">
                <span className="text-lg">⚠️</span> {error}
            </div>
          )}
        </div>

        {/* Right: Results Section */}
        <div className="glass-dark rounded-[40px] border border-white/10 overflow-hidden flex flex-col min-h-[500px]">
          <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/5">
            <h3 className="font-bold text-white">Analysis Report</h3>
            <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
              AI Powered
            </div>
          </div>
          
          <div className="flex-1 p-8 overflow-y-auto max-h-[600px] scroll-smooth">
            {!loading && !result && !error && (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                <div className="text-6xl mb-6">🔍</div>
                <p className="text-slate-400 font-medium max-w-[250px]">
                  Submit your resume to see the comprehensive AI analysis report here.
                </p>
              </div>
            )}

            {loading && (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                <div className="relative w-24 h-24">
                    <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-3xl animate-pulse">🧠</div>
                </div>
                <div className="space-y-2">
                    <h4 className="text-lg font-bold text-white">AI Engine Processing</h4>
                    <p className="text-sm text-slate-400 max-w-[220px]">
                        Our models are evaluating your experience, skills, and structure...
                    </p>
                    <div className="w-48 h-1 bg-white/10 rounded-full mx-auto mt-4 overflow-hidden">
                        <div className="h-full bg-primary animate-loading"></div>
                    </div>
                </div>
              </div>
            )}

            {result && !loading && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="prose prose-invert max-w-none">
                  {formatResult(result)}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeAnalyzer;