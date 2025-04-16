
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', animated = false }) => {
  const sizeClasses = {
    sm: 'text-lg font-bold',
    md: 'text-xl font-bold',
    lg: 'text-3xl font-bold',
  };
  
  const animationClass = animated ? 'animate-rotate-in' : '';

  return (
    <Link to="/" className={`flex items-center ${animationClass}`}>
      <span className={`font-manrope ${sizeClasses[size]} text-gradient-primary`}>
        <span className="bg-gradient-to-r from-purple-400 to-indigo-600 bg-clip-text text-transparent">my</span>
        <span className="text-foreground">.</span>
        <span className="text-primary">Design</span>
      </span>
    </Link>
  );
};

export default Logo;
