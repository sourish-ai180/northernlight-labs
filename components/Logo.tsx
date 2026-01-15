
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <div className={`relative ${className} flex items-center justify-center`}>
      <img
        src="/logo.png"
        alt="Northernlight Labs"
        className="w-full h-full object-contain"
        style={{
          maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)'
        }}
      />
    </div>
  );
};

export default Logo;
