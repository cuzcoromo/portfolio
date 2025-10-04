import { HeroSection } from "@/components/hero-section";
import { InfrastructureSection } from "@/components/infrastructure-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { TestimonialSection } from "@/components/testimonial-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <TestimonialSection />
      <InfrastructureSection />
    </div>
  );
}
