import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Hero from './components/Hero';
import Create from './components/Create';
import Accounts from './components/Accounts';
import Signup from './components/Signup';
import Resumeanalyzer from './components/Resumeanalyzer';
import './App.css';

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
    <Link to="/" className="flex items-center gap-2 group">
      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
        <span className="text-black font-black text-xl">R</span>
      </div>
      <span className="text-xl font-bold tracking-tight text-white">RESUME<span className="text-primary italic">AI</span></span>
    </Link>
    
    <div className="hidden md:flex items-center gap-8">
      <ul className="flex items-center gap-8 text-sm font-medium text-slate-400">
        <li><NavLink to="/" className={({isActive}) => isActive ? "text-primary" : "hover:text-white transition-colors"}>Home</NavLink></li>
        <li><NavLink to="/resume-analyzer" className={({isActive}) => isActive ? "text-primary" : "hover:text-white transition-colors"}>Analyzer</NavLink></li>
        <li><NavLink to="/create" className={({isActive}) => isActive ? "text-primary" : "hover:text-white transition-colors"}>Builder</NavLink></li>
        <li><NavLink to="/account" className={({isActive}) => isActive ? "text-primary" : "hover:text-white transition-colors"}>Account</NavLink></li>
      </ul>
      <div className="h-6 w-[1px] bg-white/10 mx-2"></div>
      <div className="flex items-center gap-4">
        <Link to="/signup" className="text-sm font-medium hover:text-primary transition-colors">Sign Up</Link>
        <Link to="/login" className="bg-primary hover:bg-primary-dark text-black font-bold py-2 px-5 rounded-full text-sm transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5">
          Login
        </Link>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="w-full py-12 px-6 border-t border-white/5 bg-slate-950/50">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div>
        <p className="text-slate-500 font-medium">© 2026 ResumeAI Analyzer. All rights reserved.</p>
      </div>
      <div className="flex gap-8 text-sm text-slate-400">
        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-primary transition-colors">Contact</a>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <Router>
      <div className="bg-bg-dark text-white font-sans selection:bg-primary/30">
        <Navbar />
        
        <main className="min-h-screen pt-20">
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <Hero />
              </>
            } />
            <Route path="/account" element={<Accounts />} />
            <Route path="/create/*" element={<Create />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/resume-analyzer" element={<Resumeanalyzer />} />
            <Route path="/login" element={<Signup />} /> {/* Temporarily using Signup for login UI demo */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;