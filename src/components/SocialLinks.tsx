
import React from 'react';
import { Linkedin, Dribbble, Instagram, Twitter, Mail, Globe } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  delay?: number;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label, delay = 0 }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-secondary/80 hover:bg-primary transition-all duration-300 hover:-translate-y-1"
      aria-label={label}
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="text-muted-foreground group-hover:text-white transition-colors">
        {icon}
      </span>
      <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 text-xs whitespace-nowrap transition-all duration-300">
        {label}
      </span>
    </a>
  );
};

interface SocialLinksProps {
  className?: string;
  animation?: boolean;
  isVisible?: boolean;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ 
  className = "", 
  animation = true,
  isVisible = true
}) => {
  const socialLinks = [
    { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn", delay: 100 },
    { icon: <Globe size={18} />, href: "#", label: "Behance", delay: 200 },
    { icon: <Dribbble size={18} />, href: "#", label: "Dribbble", delay: 300 },
    { icon: <Globe size={18} />, href: "#", label: "Pinterest", delay: 400 },
    { icon: <Instagram size={18} />, href: "#", label: "Instagram", delay: 500 },
    { icon: <Twitter size={18} />, href: "#", label: "Thread", delay: 600 },
    { icon: <Mail size={18} />, href: "mailto:contact@mrityunjay.design", label: "Email", delay: 700 },
  ];

  return (
    <div className={`flex space-x-3 ${className}`}>
      {socialLinks.map((link, index) => (
        <div 
          key={index} 
          className={animation && isVisible ? 'animate-fade-in' : ''}
          style={{ animationDelay: `${link.delay}ms` }}
        >
          <SocialLink {...link} />
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;
