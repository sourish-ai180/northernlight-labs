import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'outlineBrand' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({
  children,
  to,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button'
}) => {

  /* ================= BASE ================= */
  const base = `
    relative inline-flex items-center justify-center gap-2
    font-semibold whitespace-nowrap
    rounded-full
    transition-all duration-300 ease-out
    focus:outline-none
    focus:ring-2 focus:ring-cyan-400
    focus:ring-offset-2 focus:ring-offset-slate-950
    active:scale-95
  `;

  /* ================= VARIANTS ================= */
  const variants = {
    /* PRIMARY — gradient fill */
    primary: `
      bg-linear-to-r from-[#00FF7F] to-[#00D4FF]
      text-slate-950
      shadow-[0_0_24px_rgba(0,212,255,0.35)]
      hover:shadow-[0_0_40px_rgba(0,212,255,0.55)]
      hover:scale-[1.03]
    `,

    /* OUTLINE — View our work (NO background EVER) */
    outline: `
      bg-transparent
      text-slate-300
      border border-white/20

      hover:bg-transparent
      hover:text-white
      hover:border-cyan-400
      hover:shadow-[0_0_18px_rgba(0,212,255,0.35)]

      active:bg-transparent
      focus:bg-transparent
    `,

    /* OUTLINE BRAND — Contact us (logo colored border) */
    outlineBrand: `
      bg-transparent
      text-white
      border border-[#00D4FF]/60

      hover:bg-transparent
      hover:border-[#00FF7F]
      hover:shadow-[0_0_22px_rgba(0,212,255,0.45)]

      active:bg-transparent
      focus:bg-transparent
    `,

    /* GHOST */
    ghost: `
      bg-transparent
      text-slate-400
      hover:text-white
      hover:bg-white/5
    `
  };

  /* ================= SIZES ================= */
  const sizes = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-10 py-4 text-lg'
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
