
import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Logo from "./Logo";

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const footerElement = document.getElementById('footer');
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  return (
    <footer id="footer" className="bg-secondary py-12 mt-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div 
            className={`mb-6 md:mb-0 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Logo size="lg" animated={isVisible} />
            <p className="mt-2 text-sm text-muted-foreground max-w-md">
              Creating engaging user interfaces and meaningful interactions that
              resonate with users.
            </p>
          </div>

          <div className="flex space-x-6">
            {[
              { icon: <Github size={20} />, href: "#", label: "GitHub", delay: 100 },
              { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn", delay: 200 },
              { icon: <Twitter size={20} />, href: "#", label: "Twitter", delay: 300 },
              { icon: <Mail size={20} />, href: "mailto:contact@mrityunjay.design", label: "Email", delay: 400 },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`text-muted-foreground hover:text-primary transition-colors ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                aria-label={item.label}
                style={{ animationDelay: `${item.delay}ms` }}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div 
          className={`border-t border-border mt-8 pt-8 text-center md:text-left transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Mrityunjay Yadav. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
