"use client"

import Link from "next/link"
import { Menu, Mountain } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "#skills", label: "Habilidades" },
  { href: "#projects", label: "Proyectos" },
  { href: "#experience", label: "Experiencia" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const navItems = navLinks;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-auto flex items-center space-x-2">
          <Mountain className="h-6 w-6 text-primary" />
          <span className="hidden font-bold sm:inline-block font-headline">Romo Cuzco</span>
        </Link>
        <div className="flex items-center justify-end space-x-4">
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            {navItems.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-primary"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 pt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium transition-colors hover:text-primary"
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    {link.label}
                  </Link>
                ))}
                 <Link
                    href="#contact"
                    className="text-lg font-medium transition-colors hover:text-primary"
                    onClick={(e) => handleLinkClick(e, "#contact")}
                  >
                    Contacto
                  </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
