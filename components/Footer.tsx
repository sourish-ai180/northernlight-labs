
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-1 md:col-span-1">
            {/* Standardized Brand Identity - Exactly identical to Navbar */}
            <Link
              to="/"
              className="flex items-center gap-3 mb-8 group transition-colors duration-300 w-fit"
            >
              <Logo className="w-9 h-9 transition-transform duration-500 group-hover:scale-110" />
              <span className="text-[18px] font-semibold text-white transition-colors duration-300 group-hover:text-cyan-400">
                Northernlight{' '}
                <span className="bg-linear-to-r from-[#00FF7F] to-[#00D4FF] bg-clip-text text-transparent">
                  Labs
                </span>
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs font-light">
              Thoughtful engineering for early-stage products and growing teams.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-100 mb-8 uppercase text-xs tracking-widest">Resources</h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-slate-400 hover:text-cyan-400 transition-all duration-300 ease-in-out">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-100 mb-8 uppercase text-xs tracking-widest">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="/legal/privacy" className="text-sm text-slate-400 hover:text-cyan-400 transition-all duration-300 ease-in-out">Privacy Policy</Link></li>
              <li><Link to="/legal/terms" className="text-sm text-slate-400 hover:text-cyan-400 transition-all duration-300 ease-in-out">Terms of Service</Link></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition-all duration-300 ease-in-out">Cookie Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-100 mb-8 uppercase text-xs tracking-widest">Connect</h4>
            <ul className="space-y-4">
              <li className="text-sm text-slate-400 font-light">hello@northernlightlabs.engineering</li>
              <li className="text-sm text-slate-400 font-light">Working globally • Based in India</li>
              <li className="flex space-x-5 pt-4">
                <a href="#" className="text-slate-500 hover:text-cyan-400 transition-all duration-300 ease-in-out" aria-label="LinkedIn">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
                <a href="#" className="text-slate-500 hover:text-cyan-400 transition-all duration-300 ease-in-out" aria-label="X">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
                </a>
                <a href="mailto:hello@northernlightlabs.engineering" className="text-slate-500 hover:text-cyan-400 transition-all duration-300 ease-in-out" aria-label="Email">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs tracking-wide">
          <p>© {new Date().getFullYear()} Northernlight Labs. All rights reserved.</p>
          <p className="mt-4 md:mt-0 font-medium tracking-tight">Built for the next generation of founders.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
