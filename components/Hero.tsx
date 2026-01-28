
import React from 'react';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-teal-50/50 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-cyan-50/50 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          <div className="w-full lg:max-w-2xl text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-slate-900 tracking-tight leading-[0.9] mb-6">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">Digital Solutions.</span>
            </h1>
            
            <p className="mt-8 text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              I'm <span className="text-slate-900 font-bold">Vaibhavi Jani</span>, an IT Engineer specialized in crafting high-performance, accessible web interfaces and intelligent user experiences.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, '#contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 text-base font-bold rounded-2xl shadow-xl shadow-teal-500/10 text-white bg-slate-900 hover:bg-teal-600 transition-all transform hover:-translate-y-1"
              >
                Let's Collaborate
              </a>
              <a
                href="#specialization"
                onClick={(e) => handleScroll(e, '#specialization')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 border border-slate-200 text-base font-bold rounded-2xl text-slate-700 bg-white hover:border-teal-200 hover:bg-teal-50 transition-all transform hover:-translate-y-1"
              >
                Explore Portfolio
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] aspect-square">
              {/* Professional Abstract Tech Illustration */}
              <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-2xl">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#0d9488', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#0891b2', stopOpacity: 1 }} />
                  </linearGradient>
                  <filter id="shadow">
                    <feDropShadow dx="0" dy="4" stdDeviation="10" floodOpacity="0.1" />
                  </filter>
                </defs>
                <rect x="50" y="50" width="400" height="300" rx="30" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
                <rect x="50" y="50" width="400" height="60" rx="30" fill="#ffffff" />
                <circle cx="90" cy="80" r="8" fill="#ff5f56" />
                <circle cx="120" cy="80" r="8" fill="#ffbd2e" />
                <circle cx="150" cy="80" r="8" fill="#27c93f" />
                
                {/* Abstract Code/UI elements */}
                <rect x="80" y="140" width="120" height="12" rx="6" fill="#cbd5e1" opacity="0.5" />
                <rect x="80" y="170" width="280" height="12" rx="6" fill="url(#grad1)" />
                <rect x="80" y="200" width="200" height="12" rx="6" fill="#cbd5e1" opacity="0.5" />
                <rect x="80" y="230" width="240" height="12" rx="6" fill="#cbd5e1" opacity="0.3" />
                
                {/* Floating Elements */}
                <g className="animate-float">
                  <rect x="350" y="100" width="100" height="100" rx="20" fill="#ffffff" filter="url(#shadow)" />
                  <circle cx="400" cy="150" r="25" fill="#f0fdfa" />
                  <path d="M390 150L397 157L410 143" stroke="#0d9488" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </g>
                
                <g className="animate-float-delayed">
                  <rect x="20" y="250" width="120" height="120" rx="24" fill="#ffffff" filter="url(#shadow)" />
                  <rect x="45" y="280" width="70" height="10" rx="5" fill="#0d9488" opacity="0.2" />
                  <rect x="45" y="300" width="50" height="10" rx="5" fill="#0d9488" opacity="0.1" />
                  <rect x="45" y="325" width="30" height="30" rx="15" fill="url(#grad1)" />
                </g>

                {/* AI / Connectivity Dots */}
                <circle cx="400" cy="350" r="6" fill="#0d9488" className="animate-pulse" />
                <path d="M400 350L450 400" stroke="#0d9488" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                <circle cx="450" cy="400" r="4" fill="#0891b2" opacity="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(-10px); }
          50% { transform: translateY(10px); }
        }
        .animate-float {
          animation: float 6s infinite ease-in-out;
        }
        .animate-float-delayed {
          animation: float-delayed 8s infinite ease-in-out;
        }
      `}} />
    </section>
  );
};

export default Hero;
