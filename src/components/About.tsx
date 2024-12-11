import { motion } from "framer-motion";

export const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-secondary/80"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
        <div className="text-gray-300 space-y-4 max-w-3xl mx-auto">
          <p>
            I am an experienced Video Animator with over 6 years of expertise in creating dynamic and captivating animations that bring stories to life. My passion lies in crafting eye-catching content that amplifies brand messages and engages audiences.
          </p>
          <p>
            With a proven track record in video production and motion graphics, I specialize in creating content that not only looks stunning but also delivers results. From social media ads to corporate presentations, I bring creativity and technical excellence to every project.
          </p>
        </div>
      </div>
    </motion.section>
  );
};