
import React, { useState } from 'react';
import Button from '../components/Button';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pb-40 bg-slate-950">
      <SEO title="Contact" description="Schedule a discovery call with the Northernlight Labs leadership team." />
      <section className="pt-24 pb-20 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-10 text-slate-50 tracking-tighter">Get in <span className="text-green-400">Touch.</span></h1>
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto font-light">
            Have an idea or an early product in mind? Let’s talk through your goals and see how we can help you design and build it the right way.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-slate-100 tracking-tight">Tell us about your project</h2>
            <p className="text-slate-400 mb-12 font-light">Share a bit of context so we can understand your needs before we connect.</p>
            {submitted ? (
              <div className="bg-green-400/10 border border-green-400/30 p-16 rounded-[3rem] text-center shadow-2xl">
                <div className="w-20 h-20 bg-green-400 rounded-full flex items-center justify-center text-slate-950 mx-auto mb-8 shadow-xl shadow-green-900/50">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-slate-50 mb-4">Brief Received</h3>
                <p className="text-slate-400 text-lg font-light leading-relaxed">Thank you. Julian or Elena will review your brief and contact you within 24 hours to schedule a deep-dive call.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Full Name</label>
                    <input required type="text" placeholder="Your name" className="w-full px-6 py-4 bg-slate-900 border border-slate-800 text-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all placeholder:text-slate-600" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Work Email</label>
                    <input required type="email" placeholder="you@company.com" className="w-full px-6 py-4 bg-slate-900 border border-slate-800 text-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all placeholder:text-slate-600" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Company / Funding Stage</label>
                  <input required type="text" placeholder="Company name (optional) / idea stage" className="w-full px-6 py-4 bg-slate-900 border border-slate-800 text-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all placeholder:text-slate-600" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Engagement Interest</label>
                  <div className="relative">
                    <select className="w-full px-6 py-4 bg-slate-900 border border-slate-800 text-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-400 appearance-none cursor-pointer">
                      <option>Product MVP / Early Build</option>
                      <option>Feature Development</option>
                      <option>Technical Consulting</option>
                      <option>Long-term Collaboration</option>
                      <option>Not sure yet</option>
                    </select>
                    <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none text-slate-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="3" /></svg>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Technical Context</label>
                  <textarea required rows={5} placeholder="What are you trying to build? Any challenges or ideas you want to discuss?" className="w-full px-6 py-4 bg-slate-900 border border-slate-800 text-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-400 resize-none transition-all placeholder:text-slate-600"></textarea>
                </div>
                <Button type="submit" size="lg" className="w-full">Start the conversation</Button>
              </form>
            )}
          </div>

          <div className="lg:pl-20 space-y-20 flex flex-col justify-center">
            <div className="space-y-12">
              <div>
                <h3 className="text-sm font-black text-green-400 uppercase tracking-[0.3em] mb-8">Direct Channels</h3>
                <div className="space-y-8">
                  <div className="flex items-center space-x-6 group">
                    <div className="w-14 h-14 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-green-400 transition-colors">✉️</div>
                    <div>
                      <div className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-1">Email</div>
                      <div className="text-slate-200 font-bold tracking-tight">hello@northernlightlabs.engineering</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6 group">
                    <div className="w-14 h-14 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-green-400 transition-colors">📍</div>
                    <div>
                      <div className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-1">HQ</div>
                      <div className="text-slate-200 font-bold tracking-tight">Global collaboration • Remote-first</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-10 bg-linear-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-400/5 rounded-full blur-2xl group-hover:bg-green-400/10 transition-all"></div>
                <h3 className="text-2xl font-bold mb-4 text-slate-50 tracking-tight">Prefer a quick conversation?</h3>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed font-light">If you’d rather skip the form, feel free to reach out directly. We’re happy to have a short call and see if we’re a good fit.</p>
                <a href="#" className="inline-flex items-center text-green-400 font-bold hover:text-green-300 transition-colors group/link">
                  Connect on LinkedIn
                  <span className="ml-2 transform group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
