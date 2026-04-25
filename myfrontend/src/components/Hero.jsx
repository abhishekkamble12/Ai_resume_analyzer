import React from 'react';

const FeatureCard = ({ title, description, icon, color }) => (
  <div className="glass-dark p-8 rounded-3xl border border-white/5 hover:border-primary/20 transition-all duration-500 group">
    <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-primary transition-colors">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

function Hero() {
  const features = [
    {
      title: "AI Analysis",
      description: "Get instant, detailed feedback on your resume's structure, content, and phrasing using our advanced AI engine.",
      icon: "🧠",
      color: "bg-blue-500/10 text-blue-500"
    },
    {
      title: "ATS Optimization",
      description: "Ensure your resume passes Applicant Tracking Systems (ATS) by identifying key missing skills and industry keywords.",
      icon: "📊",
      color: "bg-primary/10 text-primary"
    },
    {
        title: "Career Strategy",
        description: "Receive personalized career advice and tips on how to tailor your resume for top-tier companies.",
        icon: "🚀",
        color: "bg-purple-500/10 text-purple-500"
      }
  ];

  return (
    <div className="py-24 px-6 bg-slate-950/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-primary font-bold tracking-widest uppercase text-xs mb-4">Powerful Features</p>
            <h2 className="text-4xl md:text-5xl font-black mb-0">Transform your resume into a <span className="text-primary">career agent.</span></h2>
          </div>
          <p className="text-slate-400 max-w-sm mb-2">
            Everything you need to navigate the modern job market with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>

        <div className="mt-24 rounded-[40px] p-12 bg-gradient-to-br from-primary/10 to-transparent border border-white/5 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
                <h3 className="text-3xl font-bold mb-6">Ready to land your dream job?</h3>
                <p className="text-slate-400 text-lg mb-0 text-pretty">
                    Join thousands of professionals who have already accelerated their careers using our platform.
                </p>
            </div>
            <div className="flex gap-4">
                <button className="bg-white text-black font-bold py-4 px-10 rounded-2xl hover:bg-slate-200 transition-all">
                    Get Started Free
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;