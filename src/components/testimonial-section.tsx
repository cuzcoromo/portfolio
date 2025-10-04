import { testimonial } from "@/lib/data";
import { SectionWrapper } from "./section-wrapper";
import { Star } from "lucide-react";

export function TestimonialSection() {
  return (
    <SectionWrapper id="testimonial" className="bg-background">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <div className="flex justify-center gap-1 text-accent">
          <Star className="w-6 h-6 fill-current" />
          <Star className="w-6 h-6 fill-current" />
          <Star className="w-6 h-6 fill-current" />
          <Star className="w-6 h-6 fill-current" />
          <Star className="w-6 h-6 fill-current" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold">Compromiso y Profesionalismo</h2>
        <blockquote className="text-lg md:text-xl italic">
          "{testimonial.quote}"
        </blockquote>
        <div>
          <p className="font-bold">{testimonial.author}</p>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
    </SectionWrapper>
  );
}
