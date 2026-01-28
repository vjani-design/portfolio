
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Vaibhavi Jani. Built with React & Tailwind CSS.
        </p>
        <div className="mt-6 flex justify-center space-x-8">
          <a 
            href="https://linkedin.com/in/vaibhavijani" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-400 hover:text-teal-400 transition-colors font-bold uppercase text-xs tracking-widest"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/vaibhavijani" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-400 hover:text-teal-400 transition-colors font-bold uppercase text-xs tracking-widest"
          >
            GitHub
          </a>
          <a 
            href="https://twitter.com/vaibhavijani" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-400 hover:text-teal-400 transition-colors font-bold uppercase text-xs tracking-widest"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
