"use server";

import { enhanceUIUX } from "@/ai/flows/enhance-ui-ux-with-ai";
import { z } from "zod";

const schema = z.object({
  pageDescription: z.string().min(10, "La descripción de la página es muy corta.").max(500, "Descripción muy larga."),
  currentDesign: z.string().min(10, "La descripción del diseño actual es muy corta.").max(500, "Descripción muy larga."),
  userGoal: z.string().min(10, "El objetivo del usuario es muy corto.").max(500, "Descripción muy larga."),
});

export type FormState = {
  message: string;
  suggestions?: string;
  fields?: Record<string, string>;
  issues?: string[];
};

export async function getUIUXSuggestions(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  const formData = Object.fromEntries(data);
  const parsed = schema.safeParse(formData);

  if (!parsed.success) {
    const issues = parsed.error.issues.map((issue) => issue.message);
    return {
      message: "Por favor, corrija los errores en el formulario.",
      issues,
      fields: {
        pageDescription: String(formData.pageDescription),
        currentDesign: String(formData.currentDesign),
        userGoal: String(formData.userGoal),
      }
    };
  }

  try {
    const result = await enhanceUIUX(parsed.data);
    if (result.suggestions) {
      return {
        message: "Sugerencias generadas con éxito.",
        suggestions: result.suggestions,
      };
    } else {
      return { message: "No se pudieron generar sugerencias. Inténtelo de nuevo." };
    }
  } catch (error) {
    return {
      message: `Error al generar sugerencias: ${error instanceof Error ? error.message : 'Error desconocido'}`
    };
  }
}
