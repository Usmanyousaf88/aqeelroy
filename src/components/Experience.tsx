import { motion } from "framer-motion";

const experiences = [
  {
    company: "ArhamSoft (Pvt) Ltd",
    role: "Video Content Creator",
    period: "Feb 2022 - Present",
    description: "Creating engaging video content strategies and managing both pre and post-production processes.",
  },
  {
    company: "Nearpeer.org",
    role: "Video Production Assistant",
    period: "Jul 2021 - Jul 2022",
    description: "Created high-quality educational promos and oversaw production processes.",
  },
  {
    company: "Miracle Interiors",
    role: "Video Creator",
    period: "Sep 2018 - Apr 2019",
    description: "Produced high-quality furniture product promos and managed YouTube content.",
  },
];

export const Experience = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-secondary/90"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary/80 p-6 rounded-lg border border-primary/20"
            >
              <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
              <p className="text-primary mb-2">{exp.company}</p>
              <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
              <p className="text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};