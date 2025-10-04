import { projects, type Project } from "@/lib/data";
import { SectionWrapper } from "./section-wrapper";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { CheckCircle, Terminal, Layers } from "lucide-react";

const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
  const image = PlaceHolderImages.find(p => p.id === project.imagePlaceholderId);
  const imageSide = index % 2 === 0 ? 'left' : 'right';

  const ImageContent = () => (
    <div className="lg:w-1/2 flex justify-center items-center">
      {image && (
        <Card className="overflow-hidden bg-muted/30 shadow-xl hover:shadow-2xl transition-shadow duration-300 w-full">
          <Image
            src={image.imageUrl}
            alt={image.description}
            data-ai-hint={image.imageHint}
            width={800}
            height={600}
            className="object-cover w-full h-auto"
          />
        </Card>
      )}
    </div>
  );

  return (
    <div className={cn(
      "flex flex-col lg:flex-row gap-8 lg:gap-12 items-center",
      imageSide === 'right' && 'lg:flex-row-reverse'
    )}>
      <ImageContent />
      <div className="lg:w-1/2 space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-semibold text-primary">{project.period}</p>
          <h3 className="text-2xl md:text-3xl font-bold">{project.title}</h3>
        </div>
        
        <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground">
          <p className="font-semibold text-foreground">"{project.focus.quote}"</p>
          <p>{project.focus.description}</p>
        </blockquote>
        
        {project.role && (
          <div className="space-y-2">
            <h4 className="font-semibold flex items-center gap-2"><CheckCircle className="w-5 h-5 text-accent"/> Mi Rol Técnico</h4>
            <p className="text-muted-foreground">{project.role}</p>
          </div>
        )}
        
        <div className="space-y-2">
          <h4 className="font-semibold flex items-center gap-2"><Layers className="w-5 h-5 text-accent"/> Tecnologías Clave</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(tech => <Badge key={tech} variant="secondary">{tech}</Badge>)}
          </div>
        </div>

        {project.deployment && (
          <div className="space-y-2">
            <h4 className="font-semibold flex items-center gap-2"><Terminal className="w-5 h-5 text-accent"/> Entorno y Despliegue</h4>
            <p className="text-muted-foreground">{project.deployment}</p>
          </div>
        )}

        {project.context && (
           <div className="space-y-2">
            <h4 className="font-semibold flex items-center gap-2"><CheckCircle className="w-5 h-5 text-accent"/> Contexto y Alcance</h4>
            <p className="text-muted-foreground">{project.context}</p>
          </div>
        )}

      </div>
    </div>
  );
};


export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" className="bg-background py-8 md:py-12 lg:py-16">
      <div className="flex flex-col items-center text-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Proyectos Destacados</h2>
        <p className="max-w-2xl text-muted-foreground md:text-lg">
          Aquí hay algunos de los proyectos en los que he trabajado, mostrando mi enfoque en UI/UX y mi rol técnico.
        </p>
      </div>
      <div className="space-y-20">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
