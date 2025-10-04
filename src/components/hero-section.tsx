import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'romo-cuzco-portrait');
  
  return (
    <section id="home" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left" data-aos="fade-right">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                Romo Jacobo Cuzco Agualsaca
              </h1>
              <p className="text-xl md:text-2xl text-primary font-medium font-headline">
                Ingeniero en Sistemas Computacionales
              </p>
            </div>
            <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0">
              Desarrollador Web y Móvil Full Stack. Adaptabilidad y experiencia integral en diseño de vistas gráficas (UI/UX), desarrollo con React, Node.js, Flutter y administración de Bases de Datos.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start pt-4">
              <Button asChild size="lg">
                <a href="#projects">
                  Ver Proyectos Destacados <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-blue-300 border-2 text-blue-300 hover:bg-blue-300 hover:text-white">
                <a href="#contact">
                  Contratame
                </a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-center" data-aos="fade-left">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full opacity-75 blur"></div>
                {heroImage && (
                  <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    data-ai-hint={heroImage.imageHint}
                    width={300}
                    height={300}
                    className="relative object-cover rounded-full w-[250px] h-[250px] md:w-[300px] md:h-[300px] shadow-lg border-4 border-card"
                    priority
                  />
                )}
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
