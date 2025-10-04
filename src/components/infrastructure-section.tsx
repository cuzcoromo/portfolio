import { infrastructure } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionWrapper } from "./section-wrapper";

export function InfrastructureSection() {
  return (
    <SectionWrapper id="experience" className="bg-background">
      <div className="flex flex-col items-center text-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Mantenimiento y Gestión de Infraestructura</h2>
        <p className="max-w-3xl text-muted-foreground md:text-lg">
          Experiencia técnica fundamental que garantiza una perspectiva integral en el ciclo de vida del software. (Universidad Estatal de Bolívar, 2019 - 2020)
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {infrastructure.map((item) => (
          <Card key={item.title} className="text-center hover:shadow-lg transition-shadow duration-300 bg-secondary/30">
            <CardHeader className="flex flex-col items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
