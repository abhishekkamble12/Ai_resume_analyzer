import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="relative overflow-hidden pt-10 pb-20 px-6">
      {/* Background Glows */}
      <div className="glow w-[500px] h-[500px] bg-primary/20 top-[-200px] right-[-100px]"></div>
      <div className="glow w-[400px] h-[400px] bg-blue-500/10 bottom-[100px] left-[-100px]"></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-slate-300 mb-8 animate-float">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          Trusted by 50,000+ Job Seekers Worldwide
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 max-w-4xl leading-[1.1]">
          Elevate Your Career with <br />
          <span className="text-gradient">AI-Powered Analysis</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
          Only 2% of resumes make it past the initial screening. Our advanced AI helps you optimize every section, keyword, and bullet point to land your dream job.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link to="/resume-analyzer" className="bg-primary hover:bg-primary-dark text-black font-bold py-4 px-10 rounded-2xl transition-all shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1">
            Analyze Resume Now
          </Link>
          <Link to="/signup" className="glass py-4 px-10 rounded-2xl font-bold hover:bg-white/10 transition-all border border-white/20">
            Create Account
          </Link>
        </div>

        <div className="mt-20 relative w-full max-w-5xl group">
          <div className="absolute inset-0 bg-primary/20 blur-[100px] opacity-0 group-hover:opacity-40 transition-opacity duration-1000"></div>
          <div className="glass-dark rounded-3xl p-4 border border-white/10 shadow-2xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg?auto=compress&cs=tinysrgb&w=1280"
              alt="Dashboard Preview"
              className="w-full h-auto rounded-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
            {/* Overlay simulation of analysis UI */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-md">
                 <div className="glass p-6 rounded-2xl border border-primary/20 shadow-2xl animate-float">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">85</div>
                        <div>
                            <p className="text-sm font-bold text-white">ATS Compatibility Result</p>
                            <p className="text-xs text-slate-400">Excellent Matching Score</p>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-4/5"></div>
                        </div>
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Analysis in Progress...</p>
                    </div>
                 </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;