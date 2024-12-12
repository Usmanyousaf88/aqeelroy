import { motion } from "framer-motion";
import { Play, Film, Clapperboard, Laptop, Palette, Trophy, Lightbulb } from "lucide-react";

export const About = () => {
  const software = [
    { icon: Film, name: "After Effects" },
    { icon: Play, name: "Premiere Pro" },
    { icon: Clapperboard, name: "Cinema 4D" },
    { icon: Palette, name: "Photoshop" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-secondary/80"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-8 flex items-center justify-center gap-2">
          <Laptop className="w-8 h-8 text-primary" />
          About Me
        </h2>
        <div className="text-gray-300 space-y-6 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg leading-relaxed"
          >
            Hey there! 👋 I'm not just another video animator – I'm a storyteller who happens to use motion as my medium. 
            For the past 6 years, I've been on an incredible journey, transforming ideas into captivating visual experiences 
            that make people stop scrolling and start watching.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4 bg-primary/10 p-4 rounded-lg border border-primary/20"
          >
            <Lightbulb className="w-12 h-12 text-primary flex-shrink-0" />
            <p className="text-lg">
              What sets me apart? I don't just create animations – I craft experiences that connect with your audience 
              on an emotional level. Every frame is thoughtfully designed to tell your story in the most impactful way possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-4 bg-primary/10 p-4 rounded-lg border border-primary/20"
          >
            <Trophy className="w-12 h-12 text-primary flex-shrink-0" />
            <p className="text-lg">
              Whether it's a scroll-stopping social media ad or a corporate presentation that needs to wow the board room, 
              I bring the perfect blend of creativity and technical precision to every project. My work isn't just about 
              making things look pretty – it's about delivering results that exceed expectations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <h3 className="text-xl font-semibold mb-4 text-white">Tools I Master:</h3>
            <div className="flex flex-wrap gap-6 justify-center">
              {software.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 * index }}
                  className="flex flex-col items-center gap-2 bg-secondary-foreground/5 p-4 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <tool.icon className="w-10 h-10 text-primary" />
                  <span className="text-sm font-medium">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};