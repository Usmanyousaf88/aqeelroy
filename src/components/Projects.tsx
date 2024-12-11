import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Nearpeer",
    description: "Played a key role in producing educational content, reaching thousands of learners.",
    icon: "📚",
  },
  {
    title: "IGATEX/EXPORS Events",
    description: "Edited promotional videos for major events, enhancing audience engagement.",
    icon: "🎉",
  },
  {
    title: "Global Freelance Collaborations",
    description: "Worked with clients worldwide to deliver tailored video animations and 3D visuals.",
    icon: "🌐",
  },
];

export const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-secondary"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-2">
          Noteworthy Projects <span className="text-3xl">🌟</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="bg-secondary/80 p-6 rounded-lg border border-primary/20 hover:border-primary/40"
            >
              <span className="text-4xl mb-4 block">{project.icon}</span>
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
              <ExternalLink className="text-primary mt-4 w-5 h-5" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};