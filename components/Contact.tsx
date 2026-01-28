
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-extrabold mb-8 tracking-tight">Get in touch!</h2>
            <p className="text-slate-400 text-lg mb-12">
              Have an interesting project or a job opportunity? I'm always open to discussing new ideas and collaborations.
            </p>
            
            <div className="space-y-8">
              <a href="tel:+919925822005" className="flex items-start group hover:bg-white/5 p-4 -m-4 rounded-2xl transition-all">
                <div className="flex-shrink-0 bg-teal-500/10 p-3 rounded-xl border border-teal-500/20 group-hover:bg-teal-500 group-hover:border-teal-500 transition-all">
                  <svg className="w-6 h-6 text-teal-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-xs font-bold text-teal-400 uppercase tracking-widest">Mobile</p>
                  <p className="text-xl font-medium">+91 9925822005</p>
                </div>
              </a>

              <a href="mailto:vsjani79@gmail.com" className="flex items-start group hover:bg-white/5 p-4 -m-4 rounded-2xl transition-all">
                <div className="flex-shrink-0 bg-teal-500/10 p-3 rounded-xl border border-teal-500/20 group-hover:bg-teal-500 group-hover:border-teal-500 transition-all">
                  <svg className="w-6 h-6 text-teal-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-xs font-bold text-teal-400 uppercase tracking-widest">Email</p>
                  <p className="text-xl font-medium">vsjani79@gmail.com</p>
                </div>
              </a>

              <div className="flex items-start p-4 -m-4">
                <div className="flex-shrink-0 bg-teal-500/10 p-3 rounded-xl border border-teal-500/20">
                  <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-xs font-bold text-teal-400 uppercase tracking-widest">Address</p>
                  <p className="text-xl font-medium">Rajkot, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 sm:p-12 rounded-3xl border border-white/10">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                  <input type="text" className="w-full bg-white/10 border-0 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-teal-500 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                  <input type="email" className="w-full bg-white/10 border-0 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-teal-500 outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-white/10 border-0 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-teal-500 outline-none transition-all resize-none" placeholder="Your message here..."></textarea>
              </div>
              <button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 py-4 rounded-xl font-bold transition-all shadow-lg shadow-teal-500/20 active:scale-[0.98]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Decorative gradient background */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-500/20 rounded-full blur-[120px]"></div>
    </section>
  );
};

export default Contact;
