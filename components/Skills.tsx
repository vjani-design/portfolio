
import React from 'react';

const Skills: React.FC = () => {
  const technicalSkills = [
    { name: 'HTML5', percentage: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', percentage: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', percentage: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Python', percentage: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'React', percentage: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Tailwind', percentage: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  ];

  return (
    <section id="skills" className="py-24 bg-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-teal-600 font-black text-xs uppercase tracking-[0.3em]">Technical Stack</span>
          <h2 className="mt-2 text-4xl font-black text-slate-900 tracking-tight sm:text-5xl">Skills & Tools</h2>
          <div className="mt-6 w-24 h-1.5 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technicalSkills.map((skill) => (
            <div key={skill.name} className="group relative flex flex-col items-center p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-teal-500/10 hover:-translate-y-2 transition-all duration-500">
              <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
                <div className="absolute inset-0 bg-teal-50 rounded-full scale-0 group-hover:scale-110 transition-transform duration-500"></div>
                <img src={skill.icon} alt={skill.name} className="relative w-12 h-12 object-contain group-hover:rotate-12 transition-transform duration-500" />
              </div>
              
              <h3 className="text-lg font-black text-slate-900 mb-4">{skill.name}</h3>
              
              <div className="w-full space-y-2">
                <div className="flex justify-between items-end">
                   <span className="text-[10px] font-black text-teal-600 uppercase tracking-tighter">{skill.percentage}%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-10 bg-slate-900 rounded-[3rem] text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-teal-500/20 rounded-full blur-[80px] group-hover:scale-110 transition-transform duration-1000"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-4">Always Evolving</h3>
            <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Currently diving deep into Generative AI workflows, specialized Prompt Engineering, and building LLM-integrated web applications using modern frameworks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
