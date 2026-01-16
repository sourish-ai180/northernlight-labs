
import React from 'react';
import { SERVICES } from '../constants';
import Button from '../components/Button';
import SEO from '../components/SEO';

const Services: React.FC = () => {
  return (
    <div className="pb-40 bg-slate-950 text-slate-50">
      <SEO
        title="Software Engineering Services"
        description="Comprehensive engineering services for startups: Product Strategy, Full-stack dev, AI integration, and UI/UX design. Scale your product with Northernlight Labs."
      />
      <section className="pt-24 pb-32 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-10 text-slate-50 tracking-tighter">Domain <span className="text-green-400">Expertise.</span></h1>
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto font-light">
            Specialized engineering squads for the world's most ambitious product teams. High-stakes software, delivered with precision by Northernlight Labs.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 mt-32 space-y-48">
        {SERVICES.map((service, idx) => (
          <section key={service.id} className={`flex flex-col lg:flex-row gap-24 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            <div className="flex-1 space-y-10">
              <div className="text-7xl mb-10" aria-hidden="true">{service.icon}</div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-50 tracking-tight">{service.title}</h2>
              <p className="text-xl text-slate-400 leading-relaxed font-light">{service.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-4 text-slate-300">
                    <div className="w-6 h-6 rounded-full bg-green-900/30 flex items-center justify-center border border-green-400/30 shrink-0">
                      <svg className="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-semibold text-sm tracking-tight">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-10">
                <Button to="/contact" size="lg">Discuss {service.title}</Button>
              </div>
            </div>
            <div className="flex-1 w-full h-[500px] bg-slate-900 border border-slate-800 rounded-[3rem] overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-linear-to-tr from-slate-950/40 via-transparent to-transparent z-10"></div>
              <img src={`https://picsum.photos/seed/${service.id}/1200/900`} alt={service.title} className="w-full h-full object-cover transform transition-transform duration-[2s] hover:scale-105" loading="lazy" />
            </div>
          </section>
        ))}
      </div>

      <section className="mt-48 bg-slate-900 border-y border-slate-800 py-32 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center relative">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-80 h-80 bg-green-400/10 blur-[100px]"></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-slate-50 tracking-tight">Custom architecture for custom goals.</h2>
          <p className="text-xl text-slate-400 mb-14 font-light max-w-3xl mx-auto">Every project is unique. We don't believe in boilerplate solutions. Let's design a roadmap that specifically targets your bottlenecks with Northernlight Labs.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button to="/contact" size="lg" variant="primary">Schedule Discovery Call</Button>
            <Button variant="outline" size="lg">Our Stack</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
