
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ExternalLink, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link?: string;
  caseStudyLink?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="overflow-hidden border border-border bg-secondary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 h-full">
      <div className="relative overflow-hidden aspect-[16/9]">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 bg-background/80 hover:bg-primary text-foreground p-2 rounded-full backdrop-blur-sm transition-colors"
            aria-label={`View ${project.title} project`}
          >
            <ArrowUpRight size={16} />
          </a>
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-2 font-manrope">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 font-manrope">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-primary/10 text-primary">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-2 mt-4">
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <FileText size={14} />
            <span>Case Study</span>
          </Button>
          <Button size="sm" className="flex items-center gap-1">
            <ExternalLink size={14} />
            <span>View Project</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
