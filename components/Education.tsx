
import React from 'react';

const Education: React.FC = () => {
  const educationData = [
    {
      institution: 'VVP ENGINEERING COLLEGE',
      degree: 'BACHELOR’S OF ENGINEERING (IT)',
      duration: '2022 - 2026 (Expected)',
      details: 'Specializing in Front-End Web Development and AI Integration.',
      isCurrent: true,
    },
    {
      institution: 'School Of Science',
      degree: 'HSC (Higher Secondary)',
      score: '64%',
      duration: '2020 - 2022',
      isCurrent: false,
    },
    {
      institution: 'Prince High School',
      degree: 'SSC (Secondary Education)',
      score: '96%',
      duration: '2019 - 2020',
      isCurrent: false,
    },
  ];

  return (
    <section id="education" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-teal-600 font-black text-xs uppercase tracking-[0.3em]">Learning Journey</span>
          <h2 className="mt-2 text-4xl font-black text-slate-900 tracking-tight sm:text-5xl">Academic History</h2>
          <div className="mt-6 w-24 h-1.5 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-1 bg-slate-200 transform sm:-translate-x-1/2 rounded-full"></div>

          <div className="space-y-12 relative">
            {educationData.map((edu, index) => (
              <div key={index} className={`relative flex flex-col sm:flex-row items-start sm:items-center ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                
                {/* Dot */}
                <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white bg-teal-500 shadow-sm z-10 flex items-center justify-center">
                  {edu.isCurrent && <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>}
                </div>

                {/* Content Box */}
                <div className="w-full sm:w-[45%] ml-12 sm:ml-0 group">
                  <div className={`p-8 bg-white rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 ${index % 2 === 0 ? 'sm:text-left' : 'sm:text-right'}`}>
                    <div className={`flex flex-col ${index % 2 === 0 ? 'sm:items-start' : 'sm:items-end'}`}>
                      <span className="text-xs font-black text-teal-600 uppercase tracking-widest mb-2 bg-teal-50 px-3 py-1 rounded-full">{edu.duration}</span>
                      <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-teal-600 transition-colors">{edu.institution}</h3>
                      <p className="text-slate-500 font-bold mb-4">{edu.degree}</p>
                      
                      {edu.score && (
                        <div className="inline-flex items-center px-4 py-2 bg-slate-900 text-white rounded-2xl text-sm font-black">
                          Score: {edu.score}
                        </div>
                      )}
                      
                      {edu.details && (
                        <p className="mt-4 text-slate-500 text-sm leading-relaxed max-w-sm">
                          {edu.details}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Date for Mobile/Desktop Spacer */}
                <div className="hidden sm:block sm:w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
