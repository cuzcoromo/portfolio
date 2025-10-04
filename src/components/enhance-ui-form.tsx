"use client";

import { useFormState, useFormStatus } from "react-dom";
import { getUIUXSuggestions, type FormState } from "@/app/actions";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Terminal } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? "Generando..." : "Obtener Sugerencias"}
    </Button>
  );
}

export function EnhanceUIForm() {
  const initialState: FormState = {
    message: "",
  };
  const [state, formAction] = useFormState(getUIUXSuggestions, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message && !state.suggestions && !state.issues) {
      toast({
        title: "Respuesta del Servidor",
        description: state.message,
        variant: state.message.startsWith("Error") ? "destructive" : "default",
      });
    }
    if (state.suggestions) {
      formRef.current?.reset();
    }
  }, [state, toast]);

  return (
    <div className="max-w-2xl mx-auto mt-12 space-y-8">
      <Card>
        <form ref={formRef} action={formAction}>
          <CardHeader>
            <CardTitle>Describe tu Proyecto</CardTitle>
            <CardDescription>
              Proporciona los detalles de la interfaz que deseas mejorar.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="pageDescription">Descripción de la Página</Label>
              <Textarea
                id="pageDescription"
                name="pageDescription"
                placeholder="Ej: Página de inicio para una aplicación de e-commerce."
                defaultValue={state.fields?.pageDescription}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="currentDesign">Diseño Actual</Label>
              <Textarea
                id="currentDesign"
                name="currentDesign"
                placeholder="Ej: Un carrusel de productos seguido de una cuadrícula de categorías."
                defaultValue={state.fields?.currentDesign}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="userGoal">Objetivo del Usuario</Label>
              <Textarea
                id="userGoal"
                name="userGoal"
                placeholder="Ej: El usuario debe poder encontrar y comprar un producto rápidamente."
                defaultValue={state.fields?.userGoal}
              />
            </div>
             {state.issues && (
              <Alert variant="destructive">
                <AlertTitle>Errores de Validación</AlertTitle>
                <AlertDescription>
                  <ul>
                    {state.issues.map((issue) => (
                      <li key={issue}>- {issue}</li>
                    ))}
                  </ul>
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </form>
      </Card>

      {state.suggestions && (
        <Card className="bg-secondary">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Terminal />
              Sugerencias de la IA
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-wrap">{state.suggestions}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
