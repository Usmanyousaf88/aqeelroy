import { Hero } from "@/components/Hero";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="bg-secondary min-h-screen">
      <Hero />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="container mx-auto px-4 py-16"
      >
        <h2 className="text-3xl font-bold text-white mb-8">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Portfolio items will go here */}
        </div>
      </motion.section>
    </div>
  );
};

export default Index;