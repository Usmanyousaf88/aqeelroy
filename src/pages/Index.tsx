import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Recommendations } from "@/components/Recommendations";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Recommendations />
    </div>
  );
};

export default Index;