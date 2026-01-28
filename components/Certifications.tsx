
import React from 'react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Getting Started with Machine Learning Algorithms',
      provider: 'Coursera / IBM'
    },
    {
      title: 'Introduction to Responsible AI',
      provider: 'Google Cloud'
    },
    {
      title: 'Summarizing Data using IBM Granite',
      provider: 'IBM'
    },
    {
      title: 'Classifying Data using IBM Granite',
      provider: 'IBM'
    },
    {
      title: 'Data Science Landscape',
      provider: 'IBM SkillsBuild'
    },
    {
      title: 'The Data Pathway',
      provider: 'IBM SkillsBuild'
    },
    {
      title: 'Getting started with Data',
      provider: 'IBM SkillsBuild'
    },
    {
      title: 'Prompt Design in Vertex AI',
      provider: 'Google Cloud'
    },
  ];

  return (
    <section id="certifications" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-black text-xs uppercase tracking-[0.3em]">Recognition</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Professional Certifications</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto font-medium">
            A comprehensive list of professional courses and certifications completed in AI, Data Science, and Machine Learning.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="group p-6 bg-slate-50 border border-slate-100 rounded-[2rem] hover:bg-white hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="h-12 w-12 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300 shadow-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                <p className="text-[10px] font-black text-teal-600 uppercase tracking-[0.2em] mb-2">{cert.provider}</p>
                
                <h4 className="text-base font-bold text-slate-800 leading-tight group-hover:text-teal-600 transition-colors">
                  {cert.title}
                </h4>
              </div>
              
              {/* Decorative background accent */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-teal-500/5 rounded-full blur-xl group-hover:bg-teal-500/10 transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
