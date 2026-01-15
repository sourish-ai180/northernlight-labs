
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, ExternalLink } from 'lucide-react';

import Button from '../components/Button';
import SEO from '../components/SEO';
import { SERVICES, CASE_STUDIES } from '../constants';

const Home: React.FC = () => {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Northernlight Labs",
    "url": "https://northernlightlabs.engineering",
    "logo": "https://northernlightlabs.engineering/logo.png",
    "areaServed": ["US", "GB", "DE"]
  };

  const communityItems = [
    { label: 'Creators', icon: '✨' },
    { label: 'Agencies', icon: '🏢' },
    { label: 'Marketers', icon: '📢' },
    { label: 'Consultants', icon: '💻' },
    { label: 'Startups', icon: '🚀' },
    { label: 'Designers', icon: '🎨' },
    { label: 'Freelancers', icon: '💼' }
  ];

  const marqueeItems = [...communityItems, ...communityItems];

  return (
    <div className="overflow-hidden bg-slate-950 text-slate-50">
      <SEO
        title="Product Engineering Partner for Startups"
        description="Northernlight Labs builds high-performance software for ambitious startups in the US, UK, and Europe."
        schema={orgSchema}
      />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#050B1A]">
        {/* Aurora glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-30%] left-1/4 w-[900px] h-[500px] bg-green-400/10 blur-[180px]" />
          <div className="absolute top-[-20%] right-1/4 w-[700px] h-[400px] bg-cyan-400/10 blur-[160px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-36 text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-10">
            <span className="w-2 h-2 rounded-full bg-[#00FF7F] animate-pulse" />
            <span className="text-sm text-slate-300">
              Now accepting new projects
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-[5rem] font-extrabold tracking-tight leading-[1.05] text-white mb-10">
            We build software that
            <br />
            <span className="bg-linear-to-r from-[#00FF7F] to-[#00D4FF] bg-clip-text text-transparent">
              scales
            </span>{' '}
            as fast as your
            <br />
            ambition.
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-14 font-light">
            High-performance engineering pods for founders.
            <br className="hidden md:block" />
            We handle the complexity so you can focus on the vision.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button to="/contact" variant="primary" size="lg">
              Start your project →
            </Button>

            <Button to="/portfolio" variant="outline" size="lg">
              ▶ View our work
            </Button>
          </div>

        </div>
      </section>


      {/* ============ FULL WIDTH MARQUEE ============ */}
      <section className="relative mt-20">
        <div className="max-w-5xl mx-auto text-center px-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Trusted by builders worldwide
          </h2>
          <p className="text-slate-400 text-lg font-light max-w-2xl mx-auto">
            Creators, agencies, and fast-moving teams choose Northernlight Labs.
          </p>
        </div>

        <div className="relative w-screen left-1/2 -ml-[50vw] overflow-hidden py-10">
          <div className="animate-marquee flex gap-6 px-8">
            {marqueeItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-8 py-4 bg-slate-900/40 border border-slate-800 rounded-full transition-all duration-300 hover:border-cyan-400/50 hover:bg-slate-900 hover:shadow-[0_0_30px_rgba(0,212,255,0.1)]"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-lg font-semibold">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-linear-to-r from-slate-950 via-slate-950/80 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-linear-to-l from-slate-950 via-slate-950/80 to-transparent z-10" />
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="max-w-7xl mx-auto px-6 mt-40">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Capabilities</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg font-light">
            Full-lifecycle engineering for modern startups.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map(service => (
            <div
              key={service.id}
              className="p-10 bg-slate-900/50 border border-slate-800 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/50"
            >
              <div className="text-5xl mb-8">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-400 mb-8 text-sm font-light leading-relaxed">
                {service.description}
              </p>
              <Link to="/services" className="text-cyan-400 font-bold text-sm hover:underline">
                Explore →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ================= BRIEF WORK PREVIEW ================= */}
      <section className="max-w-7xl mx-auto px-6 mt-60">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Selected Work</h2>
            <p className="text-slate-400 text-lg font-light">
              High-impact solutions delivered for forward-thinking companies.
            </p>
          </div>
          <Button to="/portfolio" variant="outline" className="group">
            View Portfolio
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {CASE_STUDIES.slice(0, 2).map((study) => (
            <Link
              to="/portfolio"
              key={study.id}
              className="group block relative rounded-[2.5rem] overflow-hidden bg-slate-900/20 border border-white/5 transition-all duration-500 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-900/10"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400 px-3 py-1 bg-cyan-950/60 backdrop-blur-md rounded-full w-fit border border-cyan-400/20">
                      {study.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="absolute top-6 right-6 p-3 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <ExternalLink className="w-5 h-5 text-white" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="max-w-7xl mx-auto px-6 mt-40 mb-32">
        <div className="bg-slate-900 border border-slate-800 rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden">
          {/* Multi-tone accent glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-400/5 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 blur-[100px] pointer-events-none" />

          <h2 className="text-5xl md:text-7xl font-bold mb-10 relative z-10">
            Ready to build?
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-16 font-light relative z-10">
            Let’s talk about your product and how we can help you ship faster.
          </p>
          <div className="relative z-10">
            <Button to="/contact" size="lg" className="px-12 h-20 text-xl">
              Schedule a call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
