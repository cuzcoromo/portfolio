'use server';
/**
 * @fileOverview An AI tool that provides context-aware suggestions for enhancing the UI/UX design.
 *
 * - enhanceUIUX - A function that handles the UI/UX enhancement process.
 * - EnhanceUIUXInput - The input type for the enhanceUIUX function.
 * - EnhanceUIUXOutput - The return type for the enhanceUIUX function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhanceUIUXInputSchema = z.object({
  pageDescription: z
    .string()
    .describe('Description of the page or section to enhance.'),
  currentDesign: z
    .string()
    .describe('The current UI/UX design of the section.'),
  userGoal: z
    .string()
    .describe('The goal the user has for this page/section.'),
});
export type EnhanceUIUXInput = z.infer<typeof EnhanceUIUXInputSchema>;

const EnhanceUIUXOutputSchema = z.object({
  suggestions: z
    .string()
    .describe('AI-powered suggestions for enhancing the UI/UX design.'),
});
export type EnhanceUIUXOutput = z.infer<typeof EnhanceUIUXOutputSchema>;

export async function enhanceUIUX(input: EnhanceUIUXInput): Promise<EnhanceUIUXOutput> {
  return enhanceUIUXFlow(input);
}

const prompt = ai.definePrompt({
  name: 'enhanceUIUXPrompt',
  input: {schema: EnhanceUIUXInputSchema},
  output: {schema: EnhanceUIUXOutputSchema},
  prompt: `You are an expert UI/UX designer. Given the current design of a section, the description of the page, and the user's goals, provide suggestions for enhancing the UI/UX design.

Page Description: {{{pageDescription}}}
Current Design: {{{currentDesign}}}
User Goal: {{{userGoal}}}

Suggestions:`,
});

const enhanceUIUXFlow = ai.defineFlow(
  {
    name: 'enhanceUIUXFlow',
    inputSchema: EnhanceUIUXInputSchema,
    outputSchema: EnhanceUIUXOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
