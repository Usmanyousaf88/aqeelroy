import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-secondary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary" />
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Aqeel Roy
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Professional Video Animator & Motion Designer
          </p>
          <a
            href="#contact"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg transition-colors"
          >
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
};