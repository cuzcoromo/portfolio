import { EnhanceUIForm } from "@/components/enhance-ui-form";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function EnhanceUIPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mb-8">
        <Button variant="ghost" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al portafolio
          </Link>
        </Button>
      </div>
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">Herramienta de Mejora UI/UX con IA</h1>
        <p className="text-muted-foreground md:text-lg">
          Esta herramienta utiliza IA para proporcionar sugerencias contextuales y mejorar el diseño y la experiencia de usuario de una página o sección web.
        </p>
      </div>
      <EnhanceUIForm />
    </div>
  );
}
