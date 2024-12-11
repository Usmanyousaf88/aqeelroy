import { motion } from "framer-motion";

const recommendations = [
  {
    name: "Asad Nazir",
    role: "Digital Marketer",
    text: "I've worked with Aqeel Roy for 3 years, and his video editing skills are outstanding. He consistently delivers visually stunning content and is proficient in Adobe After Effects, Premiere Pro, DaVinci Resolve, Final Cut, and Adobe Suite.",
  },
  {
    name: "Zain Sultan",
    role: "SEO Expert",
    text: "I highly recommend Aqeel Roy as a video editor. He is incredibly skilled and produces excellent work. His editing is top-notch, and he also tells amazing stories that really captivate the audience.",
  },
];

export const Recommendations = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-secondary/80"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12">Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recommendations.map((rec, index) => (
            <motion.div
              key={rec.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary/90 p-6 rounded-lg border border-primary/20"
            >
              <p className="text-gray-300 mb-4">"{rec.text}"</p>
              <div>
                <p className="text-white font-semibold">{rec.name}</p>
                <p className="text-primary text-sm">{rec.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};