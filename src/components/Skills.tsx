import { motion } from "framer-motion";

const skills = [
  { name: "Content Creation", icon: "📈" },
  { name: "Video Animation & Editing", icon: "🎥" },
  { name: "Motion Graphics", icon: "✨" },
  { name: "Social Media Ads", icon: "📱" },
  { name: "Promos & Explainers", icon: "🖥️" },
  { name: "Trendy Reels Strategy", icon: "🔥" },
];

export const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-secondary"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary/80 p-6 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors"
            >
              <span className="text-4xl mb-4 block">{skill.icon}</span>
              <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};