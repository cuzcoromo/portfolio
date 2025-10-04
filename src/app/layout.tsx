import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
  title: 'Romo Cuzco',
  description: 'Portafolio de Romo Cuzco. Experiencia en desarrollo Web (JavaScript, React, Next, Node js), Móvil (Flutter) y Bases de Datos (SQL, MonoDB). Comprometido con UI/UX y despliegue en Linux.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen flex flex-col bg-background" suppressHydrationWarning>
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
        <Toaster />
      </body>
    </html>
  );
}
