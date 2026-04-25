import React from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';

const TemplateCard = ({ name, type, image }) => (
  <div className="group relative glass-dark rounded-3xl border border-white/5 overflow-hidden transition-all duration-500 hover:border-primary/40 hover:-translate-y-2">
    <div className="aspect-[3/4] overflow-hidden bg-slate-900 border-b border-white/5">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="font-bold text-white mb-1">{name}</h4>
          <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{type}</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-black">
          +
        </div>
      </div>
      <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-bold hover:bg-primary hover:text-black hover:border-primary transition-all">
        Use Template
      </button>
    </div>
  </div>
);

function Create() {
  const location = useLocation();
  
  const templates = [
    {
      name: "Executive Minimal",
      type: "Modern / ATS Friendly",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Creative Pulse",
      type: "Design / Portfolio",
      image: "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Tech Lead Pro",
      type: "Developer / Data",
      image: "https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-black mb-4">Resume <span className="text-primary">Templates</span></h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Each resume template is designed to follow the exact rules used by hiring managers at top companies like Google, Meta, and Amazon.
        </p>
      </div>

      <div className="flex justify-center mb-16">
        <div className="p-1 rounded-2xl bg-white/5 border border-white/10 flex gap-2">
            <button className="px-8 py-2 rounded-xl bg-primary text-black font-bold text-sm">All Templates</button>
            <button className="px-8 py-2 rounded-xl hover:bg-white/5 text-slate-400 font-bold text-sm transition-all">Popular</button>
            <button className="px-8 py-2 rounded-xl hover:bg-white/5 text-slate-400 font-bold text-sm transition-all">ATS Optimized</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {templates.map((t, idx) => (
          <TemplateCard key={idx} {...t} />
        ))}
      </div>

      <div className="glass p-12 rounded-[40px] text-center max-w-4xl mx-auto border border-primary/20 bg-primary/5">
         <h2 className="text-3xl font-black mb-6">Need a custom design?</h2>
         <p className="text-slate-300 mb-10 max-w-lg mx-auto">
            Our AI can help you generate a custom layout based on your specific industry and years of experience.
         </p>
         <button className="bg-primary hover:bg-primary-dark text-black font-black py-4 px-12 rounded-2xl transition-all shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1">
            Talk to Resume AI
         </button>
      </div>
    </div>
  );
}

export default Create;