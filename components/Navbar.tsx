
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import Logo from './Logo';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between md:grid md:grid-cols-3">

        {/* BRAND IDENTITY */}
        <Link to="/" className="flex items-center gap-3 group transition-colors duration-300 md:justify-self-start">
          <Logo className="w-9 h-9 transition-transform duration-500 group-hover:scale-110" />
          <span className="text-[18px] font-semibold text-white transition-colors duration-300 group-hover:text-cyan-400">
            Northernlight{' '}
            <span className="bg-linear-to-r from-[#00FF7F] to-[#00D4FF] bg-clip-text text-transparent">
              Labs
            </span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-10 md:justify-self-center">
          {NAV_ITEMS.map((item) => {
            const active = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative group text-sm font-medium transition-colors duration-300 ${active ? 'text-white' : 'text-slate-300 hover:text-white'
                  }`}
              >
                {item.label}

                {/* UNDERLINE */}
                <span
                  className={`
                    absolute left-0 -bottom-1 h-[2px] rounded-full
                    bg-linear-to-r from-[#00FF7F] to-[#00D4FF]
                    transition-all duration-300 ease-out
                    ${active ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}
                  `}
                />
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:block md:justify-self-end">
          <Button to="/contact" variant="outlineBrand" size="md">
            Contact us
          </Button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-slate-300 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-lg border-t border-white/10 px-6 py-6 space-y-4 animate-slide-up">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block text-lg font-medium transition-colors ${location.pathname === item.path
                ? 'text-cyan-400'
                : 'text-slate-300 hover:text-white'
                }`}
            >
              {item.label}
            </Link>
          ))}

          <Button
            to="/contact"
            variant="outlineBrand"
            size="lg"
            className="w-full justify-center"
          >
            Contact us
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
