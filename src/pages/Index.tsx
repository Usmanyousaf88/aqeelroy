import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Recommendations } from "@/components/Recommendations";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";

const Index = () => {
  return (
    <div className="bg-secondary min-h-screen">
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