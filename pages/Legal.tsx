
import React from 'react';
import SEO from '../components/SEO';

const LegalLayout: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-slate-950 text-slate-50 min-h-screen">
    <div className="max-w-3xl mx-auto px-4 py-32">
      <h1 className="text-5xl md:text-7xl font-bold mb-16 text-slate-50 tracking-tighter">{title}</h1>
      <div className="prose prose-invert prose-lg text-slate-400 space-y-10 font-light leading-relaxed">
        {children}
      </div>
    </div>
  </div>
);

export const PrivacyPolicy: React.FC = () => (
  <LegalLayout title="Privacy Policy">
    <SEO title="Privacy Policy" description="How Northernlight Labs handles your data and ensures privacy." />
    <p className="font-bold text-blue-400 uppercase text-xs tracking-[0.2em] mb-4">Last Updated: January 1, 2024</p>
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-slate-50 tracking-tight">1. Information Collection</h2>
      <p>Northernlight Labs collects information you provide directly to us through our contact forms, newsletter sign-ups, and engagement discovery calls. This helps us tailor our engineering pods to your specific technical requirements.</p>
    </section>
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-slate-50 tracking-tight">2. Data Usage</h2>
      <p>We use the information we collect to provide, maintain, and improve our services, including to process transactions and respond to your inquiries. We never sell your data to third parties.</p>
    </section>
    <p className="pt-10 border-t border-slate-900">For more detailed information regarding our data practices, please contact our Data Protection Officer at <span className="text-blue-400 font-medium">dpo@northernlightlabs.engineering</span>.</p>
  </LegalLayout>
);

export const TermsOfService: React.FC = () => (
  <LegalLayout title="Terms of Service">
    <SEO title="Terms of Service" description="The rules and terms governing our engineering partnerships." />
    <p className="font-bold text-blue-400 uppercase text-xs tracking-[0.2em] mb-4">Last Updated: January 1, 2024</p>
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-slate-50 tracking-tight">1. Scope of Services</h2>
      <p>Northernlight Labs provides professional software engineering and product strategy services on a per-project or monthly retainer basis as defined in a mutually signed Statement of Work (SOW).</p>
    </section>
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-slate-50 tracking-tight">2. Intellectual Property</h2>
      <p>Upon full payment of fees, all deliverables created by Northernlight Labs specifically for the Client shall be considered "Work Made for Hire" and the property of the Client. We believe in total transparency and ownership for our partners.</p>
    </section>
  </LegalLayout>
);
