
import React from 'react';

const About: React.FC = () => {
  const specializations = [
    'Volunteerism',
    'Public Speaking',
    'Leadership',
    'Team Coordination',
  ];

  const languages = [
    { name: 'Gujarati', level: 'Native', region: 'Asian' },
    { name: 'Hindi', level: 'Native', region: 'Asian' },
    { name: 'English', level: 'Fluent', region: 'British' },
  ];

  return (
    <section id="about" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div id="specialization" className="scroll-mt-24">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-bold text-teal-600 bg-teal-50 rounded-full uppercase tracking-widest">
              My Expertise
            </div>
            
            {/* Professional Bio Summary */}
            <div className="mb-12 relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-500 rounded-full opacity-50"></div>
              <p className="pl-6 text-lg text-slate-700 leading-relaxed font-medium">
                Motivated and detail-oriented IT Engineering student, <span className="text-slate-900 font-bold">Vaibhavi Jani</span>, 
                currently pursuing a Bachelor's degree in Information Technology. Skilled in front-end development using 
                technologies such as HTML, CSS, JavaScript as well as in AI and ML technologies. Experienced in building 
                responsive, user-friendly web interfaces and optimizing UI/UX for seamless user experiences across 
                different devices. Passionate about clean, efficient code and staying up-to-date with the latest 
                front-end trends and best practices. Eager to apply academic knowledge and hands-on experience to 
                contribute to innovative front-end projects and projects of AI and ML in a professional setting.
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-8">Specializations</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specializations.map((spec) => (
                <div key={spec} className="group flex items-center p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-teal-200 hover:bg-teal-50/50 hover:shadow-lg hover:shadow-teal-500/5 transition-all">
                  <div className="h-3 w-3 rounded-full bg-teal-500 mr-4 shadow-sm group-hover:scale-125 transition-transform"></div>
                  <span className="text-slate-700 font-bold">{spec}</span>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Achievement</h3>
              <div className="relative p-8 bg-gradient-to-br from-slate-50 to-white rounded-3xl border border-slate-100 shadow-sm">
                <div className="absolute top-0 right-0 -mr-2 -mt-2 text-teal-500/10">
                  <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.01703C7.91246 16 7.01703 16.8954 7.01703 18V21H14.017ZM14.017 21H17.017C18.1216 21 19.017 20.1046 19.017 19V11.5L12.017 4.5L5.01703 11.5V19C5.01703 20.1046 5.91246 21 7.01703 21H14.017Z" />
                  </svg>
                </div>
                <h4 className="text-lg font-black text-teal-600 mb-3 uppercase tracking-tighter">Student Coordinator</h4>
                <p className="text-slate-700 leading-relaxed font-medium italic relative z-10">
                  "Spearheaded student coordination for the National Conference on 'Sustainable Water Solutions for Kutch and Saurashtra region', managing cross-functional teams and scheduling."
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <div className="inline-block px-3 py-1 mb-4 text-xs font-bold text-teal-600 bg-teal-50 rounded-full uppercase tracking-widest">
                Communication
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-8">Languages</h2>
              <div className="space-y-6">
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Asian Origins</p>
                  <div className="flex flex-wrap gap-4">
                    {['Gujarati', 'Hindi'].map(lang => (
                      <div key={lang} className="flex flex-col px-6 py-3 bg-white rounded-2xl shadow-sm border border-slate-100 min-w-[120px]">
                        <span className="text-slate-900 font-bold">{lang}</span>
                        <span className="text-[10px] text-teal-500 font-black uppercase">Native</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Global Standard</p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex flex-col px-6 py-3 bg-white rounded-2xl shadow-sm border border-slate-100 min-w-[120px]">
                      <span className="text-slate-900 font-bold">English</span>
                      <span className="text-[10px] text-teal-500 font-black uppercase">Fluent</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
