import { skills } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionWrapper } from "./section-wrapper";

export function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="bg-background">
      <div className="flex flex-col items-center text-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Mi Stack Tecnológico y Habilidades Clave</h2>
        <p className="max-w-3xl text-muted-foreground md:text-lg">
          Mi capacidad de adaptación y desarrollo integral me permite abordar proyectos desde el Front-end hasta la infraestructura, garantizando soluciones robustas y escalables.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.values(skills).map((category) => (
          <Card key={category.title} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <category.icon className="w-8 h-8 text-primary" />
              <CardTitle className="text-xl">{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
