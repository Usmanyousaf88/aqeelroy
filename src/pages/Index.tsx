import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Recommendations } from "@/components/Recommendations";

const Index = () => {
  return (
    <div className="bg-secondary min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Recommendations />
    </div>
  );
};

export default Index;