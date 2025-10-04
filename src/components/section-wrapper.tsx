import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionWrapperProps = {
  children: ReactNode;
  id: string;
  className?: string;
};

export function SectionWrapper({ children, id, className }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("w-full py-8 md:py-12 lg:py-16", className)}>
      <div className="container px-4 md:px-6">
        {children}
      </div>
    </section>
  );
}
