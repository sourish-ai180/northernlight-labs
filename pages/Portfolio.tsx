
import React from 'react';
import { CASE_STUDIES } from '../constants';
import Button from '../components/Button';
import SEO from '../components/SEO';

const Portfolio: React.FC = () => {
  return (
    <div className="pb-32 bg-slate-950">
      <SEO
        title="Portfolio & Case Studies"
        description="High-stakes software built for high-growth startups. Explore our engineering case studies in fintech, healthtech, and more."
      />
      <section className="pt-24 pb-32 max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-10 text-slate-50 tracking-tighter">Proof of <span className="text-green-400">Concept.</span></h1>
        <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto font-light">
          We build high-stakes software for startups that need to get it right the first time.
          From stealth MVPs to Series B scaling engines.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4">
        <div className="space-y-40">
          {CASE_STUDIES.map((study, idx) => (
            <div key={study.id} className={`group flex flex-col lg:flex-row gap-20 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <div className="overflow-hidden rounded-[2.5rem] shadow-2xl relative">
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent z-10 opacity-50 transition-opacity duration-500 group-hover:opacity-30"></div>
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full aspect-video object-cover transition-transform duration-[2s] ease-in-out group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="flex-1 space-y-10 flex flex-col justify-center">
                <div className="inline-block px-4 py-1.5 bg-green-900/20 border border-green-400/30 text-green-400 text-xs font-black uppercase tracking-[0.2em] rounded-full self-start transition-all duration-300 group-hover:border-green-400">
                  {study.category}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-50 tracking-tight transition-colors duration-300 group-hover:text-green-400">{study.title}</h2>
                <p className="text-xl text-slate-400 leading-relaxed font-light">{study.description}</p>

                <div className="grid grid-cols-2 gap-12 border-y border-slate-800/60 py-10">
                  {study.stats.map((stat, i) => (
                    <div key={i} className="group/stat">
                      <div className="text-4xl font-black text-slate-50 transition-all duration-300 group-hover:text-green-400 group-hover:translate-x-1">{stat.value}</div>
                      <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <Button variant="outline" size="lg">View full case study</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-48 bg-slate-900/40 py-32 border-y border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-slate-50 tracking-tight">Ready to be our next success story?</h2>
          <Button to="/contact" size="lg">Start a project</Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
