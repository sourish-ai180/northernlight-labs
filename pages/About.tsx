
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import SEO from '../components/SEO';

const About: React.FC = () => {
  return (
    <div className="pb-32 bg-slate-950 text-slate-50">
      <SEO
        title="Our Senior Engineering DNA"
        description="Learn about Northernlight Labs. Built by founders for founders, we provide high-velocity senior engineering teams that scale with integrity."
      />
      <section className="pt-24 pb-32 max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-slate-50 tracking-tighter">Engineering with <span className="text-green-400">Integrity.</span></h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto font-light">
          Northernlight Labs was founded by three engineers who were tired of the "agency bloat" model.
          We built this firm to be the engineering partner we wished we had when scaling our own startups.
        </p>
      </section>

      <section className="bg-slate-900/40 py-32 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
              <img src="https://plus.unsplash.com/premium_photo-1670360414483-64e6d9ba9038?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" alt="Our DNA" loading="lazy" />
            </div>
            <div className="space-y-10">
              <div>
                <h2 className="text-4xl font-bold mb-6 tracking-tight">Our DNA</h2>
                <p className="text-slate-400 leading-relaxed font-light">
                  We believe that small, highly-skilled teams outperform large, bureaucratic organizations every single time.
                  Our approach is rooted in senior-level execution, technical transparency, and a deep understanding of business goals.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="group/stat">
                  <h4 className="text-3xl font-bold text-green-400 origin-left">8+</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-black">Years Avg Experience</p>
                </div>
                <div className="group/stat">
                  <h4 className="text-3xl font-bold text-green-400 origin-left">50+</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-black">Products Launched</p>
                </div>
                <div className="group/stat">
                  <h4 className="text-3xl font-bold text-green-400 origin-left">$100M+</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-black">Funding Raised</p>
                </div>
                <div className="group/stat">
                  <h4 className="text-3xl font-bold text-green-400 origin-left">0%</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-black">Junior Engineers</p>
                </div>
              </div>

              <div className="pt-6">
                <Button to="/contact">Join the partner program</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-40 max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">The Founding Team</h2>
          <p className="text-slate-400 max-w-xl mx-auto font-light">Combined decades of experience at top-tier tech companies and high-growth startups.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            { name: "Julian Thorne", role: "CEO & Product Strategy", bio: "Ex-Product at Stripe. Obsessed with UX clarity.", img: "https://picsum.photos/seed/p1/400/400" },
            { name: "Elena Schmidt", role: "CTO & Architecture", bio: "AWS Community Hero. Systems engineering expert.", img: "https://picsum.photos/seed/p2/400/400" },
            { name: "Marcus Vane", role: "Head of AI", bio: "PhD in Machine Learning. Practical AI advocate.", img: "https://picsum.photos/seed/p3/400/400" }
          ].map((member, i) => (
            <div key={i} className="group">
              <div className="overflow-hidden rounded-2xl mb-8 shadow-2xl transition-all duration-500 ease-in-out group-hover:shadow-green-900/20">
                <img src={member.img} alt={member.name} className="w-full aspect-square object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" loading="lazy" />
              </div>
              <h3 className="text-2xl font-bold text-slate-50 mb-2 transition-colors duration-300 group-hover:text-green-400 tracking-tight">{member.name}</h3>
              <div className="text-green-400 font-bold text-xs uppercase tracking-widest mb-4">{member.role}</div>
              <p className="text-slate-400 text-sm leading-relaxed font-light">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
