import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionWrapperProps = {
  children: ReactNode;
  id: string;
  className?: string;
};

export function SectionWrapper({ children, id, className }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("w-full py-12 md:py-16 lg:py-20", className)}>
      <div className="container px-8 md:px-12">
        {children}
      </div>
    </section>
  );
}
