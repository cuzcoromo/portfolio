import { testimonials } from "@/lib/data";
import { SectionWrapper } from "./section-wrapper";
import { Award } from "lucide-react";

export function TestimonialSection() {
  return (
    <SectionWrapper id="testimonial" className="bg-background">
      <div className="flex flex-col items-center text-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Certificados y Testimonios</h2>
         <p className="max-w-3xl text-muted-foreground md:text-lg">
          Reconocimientos que avalan mi compromiso y profesionalismo.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-12">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="text-center space-y-4">
             <div className="flex justify-center">
                <Award className="w-10 h-10 text-accent" />
            </div>
            <blockquote className="text-lg md:text-xl italic">
              "{testimonial.quote}"
            </blockquote>
            <div>
              <p className="font-bold">{testimonial.author}</p>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
