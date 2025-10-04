import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'romo-cuzco-portrait');
  
  return (
    <section id="home" className="w-full py-10 md:py-12 lg:py-16 bg-secondary/30">
      <div className="container px-6 md:px-10">
        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12 xl:gap-16 items-center">
          <div className="lg:col-span-3 flex flex-col justify-center space-y-4 text-center lg:text-left" data-aos="fade-right">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Romo Jacobo Cuzco Agualsaca
              </h1>
              <p className="text-xl md:text-2xl text-primary font-medium font-headline">
                Ingeniero en Sistemas Computacionales
              </p>
            </div>
            <p className="max-w-3xl text-muted-foreground md:text-xl mx-auto lg:mx-0">
              Desarrollador Web y Móvil Full Stack. Adaptabilidad y experiencia integral en diseño de vistas gráficas (UI/UX), desarrollo con React, Node.js, Flutter y administración de Bases de Datos.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start pt-4">
              <Button asChild size="lg">
                <a href="#projects">
                  Ver Proyectos Destacados <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#contact">
                  Contratame
                </a>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-2 flex justify-center items-center" data-aos="fade-left">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 blur-sm"></div>
                {heroImage && (
                  <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    data-ai-hint={heroImage.imageHint}
                    width={250}
                    height={250}
                    className="relative object-cover rounded-full w-[200px] h-[200px] md:w-[250px] md:h-[250px] shadow-md border-4 border-card"
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
