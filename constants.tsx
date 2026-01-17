
import React from 'react';
import { NavItem, Service, CaseStudy } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'About', path: '/about' },
];

export const SERVICES: Service[] = [
  {
    id: 'product-strategy',
    title: 'Product Strategy',
    description: 'We turn early ideas into clear roadmaps backed by research, validation, and technical feasibility.',
    icon: '🎯',
    features: ['Market Gap Analysis', 'MVP Scoping', 'Technical Feasibility', 'User Persona Development']
  },
  {
    id: 'full-stack-eng',
    title: 'Full-Stack Engineering',
    description: 'Scalable, production-ready web and mobile systems built to grow with your business.',
    icon: '💻',
    features: ['React & Next.js', 'Node.js & Go Backend', 'Cloud Native (AWS/GCP)', 'Real-time Systems']
  },
  {
    id: 'ai-integration',
    title: 'AI & Data Intelligence',
    description: 'Practical AI solutions that automate workflows and unlock real product leverage.',
    icon: '🤖',
    features: ['LLM Integration', 'Custom RAG Pipelines', 'Computer Vision', 'Predictive Analytics']
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Practical AI solutions that automate workflows and unlock real product leverage.',
    icon: '🎨',
    features: ['Interactive Prototyping', 'Design Systems', 'Usability Testing', 'Brand Identity']
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'finflow',
    title: 'FinFlow: Revolutionizing B2B Payments',
    category: 'Fintech',
    description: 'Building a complex real-time settlement engine for cross-border transactions.',
    image: 'https://picsum.photos/seed/fin/800/600',
    stats: [
      { label: 'Processing Speed', value: '1.2s' },
      { label: 'Weekly Volume', value: '$4M+' }
    ]
  },
  {
    id: 'healthsync',
    title: 'HealthSync: AI-Driven Diagnostics',
    category: 'Healthcare',
    description: 'An iPad-first application for clinical trials data collection and verification.',
    image: 'https://picsum.photos/seed/health/800/600',
    stats: [
      { label: 'User Retention', value: '94%' },
      { label: 'Clinics Deployed', value: '120+' }
    ]
  }
];


