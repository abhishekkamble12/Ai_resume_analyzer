import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Hero from './components/Hero';
import Create from './components/Create';
import Accounts from './components/Accounts';
import './App.css';
import Signup from './components/Signup';
// import PDFEditorPage from './pages/PDFEditorPage';
// import ResumeAnalyzerPage from './pages/ResumeAnalyzerPage';
import Resumeanalyzer from './components/Resumeanalyzer';

function App() {
  return (
    <Router>
      <div className="w-full min-h-screen bg-gradient-to-bl from-black to-black overflow-hidden">
        <nav className="w-full p-4 bg-amber-50 border-2 flex justify-between items-center shadow-lg">
          <h1>Website Name</h1>
          <ul className="flex space-x-4 bg-white/80 backdrop-blur-md rounded-2xl p-1 py-1 justify-evenly">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/account">Accounts</Link></li>
            <li><Link to="/create">Create</Link></li>
            {/* <li><Link to='/AI-ENhacned'>AI-Enhanced</Link></li> */}
            {/* <li><Link to="/pdf-editor">PDF Editor</Link></li>
             */}
            <li><Link to="/resume-analyzer">Resume Analyzer</Link></li>
            <li><Link to='/signup'>Signup</Link></li>
            <li><Link to='/login'>Login</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <div className="relative p-4 pt-16">
                <div
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-amber-400/40 to-transparent opacity-50 animate-ray"
                  id="myanime"
                ></div>
                <Home />
                <Hero />
              </div>
            }
          />
          <Route path="/account" element={<Accounts />} />
          <Route path="/create/*" element={<Create />} />
          <Route path='/signup/' element={<Signup/>} />
          {/* <Route path="/pdf-editor" element={<PDFEditorPage />} /> */}
          <Route path="/resume-analyzer" element={<Resumeanalyzer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;