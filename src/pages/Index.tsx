
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard, { Project } from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";
import ToolBadge from "@/components/ToolBadge";
import ContactForm from "@/components/ContactForm";

import {
  Figma,
  Framer,
  Layers,
  Palette,
  PenTool,
  Search,
  Type,
  LayoutGrid,
  MousePointer,
} from "lucide-react";

const Index: React.FC = () => {
  // Project data
  const projects: Project[] = [
    {
      id: 1,
      title: "Financial App Redesign",
      description:
        "A complete overhaul of a financial application focusing on improved user experience and accessibility.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
      tags: ["UI/UX", "Figma", "Prototyping"],
    },
    {
      id: 2,
      title: "E-commerce Website",
      description:
        "Designed a modern e-commerce platform with focus on conversion optimization and user engagement.",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1472&auto=format&fit=crop",
      tags: ["Responsive Design", "Wireframing", "User Research"],
    },
    {
      id: 3,
      title: "Travel App Concept",
      description:
        "A concept travel application designed to make planning trips easier and more enjoyable.",
      imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1470&auto=format&fit=crop",
      tags: ["Mobile App", "UI Design", "Framer"],
    },
    {
      id: 4,
      title: "Health Dashboard",
      description:
        "A comprehensive health monitoring dashboard designed for ease of use and data visualization.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
      tags: ["Dashboard", "Data Visualization", "UX Research"],
    },
    {
      id: 5,
      title: "Brand Identity System",
      description:
        "Complete brand identity design including logo, color palette, typography, and guidelines.",
      imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1528&auto=format&fit=crop",
      tags: ["Branding", "Logo Design", "Style Guide"],
    },
    {
      id: 6,
      title: "Content Creator Platform",
      description:
        "A platform designed for content creators to showcase and monetize their work effectively.",
      imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1470&auto=format&fit=crop",
      tags: ["Web Design", "User Testing", "Information Architecture"],
    },
  ];

  // Skills data
  const skills = [
    {
      icon: <Layers size={24} />,
      title: "Visual Design",
      description:
        "Creating attractive, cohesive visual elements that align with brand identity and enhance user experience.",
    },
    {
      icon: <Search size={24} />,
      title: "User Research",
      description:
        "Conducting thorough research to understand user needs, behaviors, and pain points to inform design decisions.",
    },
    {
      icon: <LayoutGrid size={24} />,
      title: "Layout Design",
      description:
        "Crafting structured, balanced layouts that guide users through content in an intuitive way.",
    },
    {
      icon: <MousePointer size={24} />,
      title: "Prototyping",
      description:
        "Building interactive prototypes to test usability and gather feedback before development.",
    },
    {
      icon: <PenTool size={24} />,
      title: "Wireframing",
      description:
        "Creating structural blueprints that establish information hierarchy and core functionality.",
    },
    {
      icon: <Palette size={24} />,
      title: "Color Theory",
      description:
        "Utilizing color psychology and principles to create visually appealing and effective designs.",
    },
    {
      icon: <Type size={24} />,
      title: "Typography",
      description:
        "Selecting and implementing typography that enhances readability and brand personality.",
    },
    {
      icon: <Layers size={24} />,
      title: "Information Architecture",
      description:
        "Organizing content in a way that makes it easy for users to navigate and find what they need.",
    },
  ];

  // Tools data
  const tools = [
    { name: "Figma", icon: <Figma size={16} /> },
    { name: "Framer", icon: <Framer size={16} /> },
    { name: "Canva", icon: <PenTool size={16} /> },
    { name: "Webflow", icon: <LayoutGrid size={16} /> },
    { name: "Miro", icon: <Layers size={16} /> },
    { name: "Adobe CC", icon: <Palette size={16} /> },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        <HeroSection />

        {/* Projects Section */}
        <section id="projects" className="py-24">
          <div className="container mx-auto px-6">
            <SectionHeading
              title="My Projects"
              subtitle="Explore a selection of my recent design work across various domains."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div key={project.id} className="animate-scale-in">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <SectionHeading
              title="Skills & Expertise"
              subtitle="My core competencies and areas of expertise in design."
              alignment="center"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {skills.map((skill, index) => (
                <SkillCard
                  key={index}
                  icon={skill.icon}
                  title={skill.title}
                  description={skill.description}
                />
              ))}
            </div>

            <div className="mt-16">
              <h3 className="text-xl font-semibold mb-6 text-center">Tools & Technologies</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {tools.map((tool, index) => (
                  <ToolBadge key={index} name={tool.name} icon={tool.icon} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading title="About Me" />
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    As a Visual Designer with over 2 years of self-taught experience, I specialize in creating engaging user interfaces and conducting user research.
                  </p>
                  <p>
                    I use tools like Figma, Framer, Canva, Webflow and Miro, and I'm currently learning Adobe Creative Cloud. My goal is to deliver meaningful interactions that resonate with users.
                  </p>
                  <p>
                    Grounded in design thinking and thorough user research, I ensure each decision enhances usability and aesthetics. I excel in creating responsive designs that adapt across devices while collaborating with cross-functional teams for high-quality outcomes.
                  </p>
                  <p>
                    Focusing on usability testing and information architecture, I aim to build intuitive interfaces that leave a lasting impact.
                  </p>
                  <p>
                    I'm excited to connect with fellow professionals and contribute to innovative projects that push the boundaries of design.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-secondary/50 rounded-lg overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop"
                    alt="Mrityunjay Yadav"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent"></div>
                </div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary rounded-lg -z-10"></div>
                <div className="absolute -top-8 -right-8 w-32 h-32 border-2 border-primary/50 rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <SectionHeading
                title="Get In Touch"
                subtitle="Interested in working together? Feel free to reach out!"
                alignment="center"
              />
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
