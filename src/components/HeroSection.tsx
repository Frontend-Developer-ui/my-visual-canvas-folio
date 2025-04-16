
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="gradient-text">Mrityunjay Yadav</span>
            <br />
            Visual Designer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
            Crafting engaging user interfaces and experiences that resonate with users
            through thoughtful design and research.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
          <a
            href="#projects"
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
