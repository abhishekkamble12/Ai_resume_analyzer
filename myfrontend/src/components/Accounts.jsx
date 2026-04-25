import React from 'react';

function Accounts() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-black mb-4">Your <span className="text-primary">Account</span></h1>
        <p className="text-slate-400">Manage your profile, saved resumes, and analysis history.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="md:col-span-1 space-y-6">
          <div className="glass-dark rounded-3xl p-8 border border-white/10 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center text-4xl mb-6 border-2 border-primary/40">
              👤
            </div>
            <h3 className="text-xl font-bold">Abhishek Kamble</h3>
            <p className="text-sm text-slate-500 mb-6">Free Tier Member</p>
            <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm font-bold">
              Edit Profile
            </button>
          </div>

          <div className="glass-dark rounded-3xl p-8 border border-white/10">
            <h4 className="font-bold mb-4">Subscription</h4>
            <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 mb-4">
               <p className="text-xs text-primary font-black uppercase tracking-widest mb-1">Current Plan</p>
               <p className="text-lg font-bold">Free Analyst</p>
            </div>
            <button className="w-full py-3 rounded-xl bg-primary text-black font-black transition-all text-sm hover:scale-[1.02]">
              Upgrade to Pro
            </button>
          </div>
        </div>

        {/* History / Activity */}
        <div className="md:col-span-2 space-y-6">
          <div className="glass-dark rounded-3xl p-8 border border-white/10 min-h-[400px]">
             <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold">Analysis History</h3>
                <span className="text-xs text-slate-500">Showing last 3 reports</span>
             </div>

             <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/[0.08] transition-all group cursor-pointer">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-xl">📄</div>
                            <div>
                                <p className="font-bold text-sm">Resume_Analyst_v{i}.pdf</p>
                                <p className="text-[10px] text-slate-500">Analyzed on May {12 + i}, 2026</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="text-xs font-bold text-primary">Score: 8{i}/100</div>
                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all text-xs">➔</div>
                        </div>
                    </div>
                ))}
             </div>

             <div className="mt-12 text-center">
                <p className="text-sm text-slate-500 mb-4">No more history to show.</p>
                <button className="text-primary text-sm font-bold hover:underline">Start New Analysis</button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accounts;
