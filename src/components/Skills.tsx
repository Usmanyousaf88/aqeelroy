import { motion } from "framer-motion";
import { SkillModal } from "./SkillModal";

const skills = [
  {
    name: "Content Creation",
    icon: "📈",
    description: "Creating impactful content that resonates with target audiences",
    details: [
      "Strategic content planning and execution",
      "Brand message alignment",
      "Audience engagement optimization",
      "Content performance analysis",
      "Multi-platform content adaptation"
    ],
    testimonial: {
      text: "Aqeel's content creation skills are exceptional. He consistently delivers engaging content that perfectly aligns with our brand vision.",
      author: "Sarah Johnson",
      role: "Marketing Director"
    }
  },
  {
    name: "Video Animation & Editing",
    icon: "🎥",
    description: "Professional video editing and animation services",
    details: [
      "Advanced video editing techniques",
      "Custom animation creation",
      "Motion graphics design",
      "Color grading and correction",
      "Sound design and mixing"
    ],
    testimonial: {
      text: "The quality of Aqeel's video editing is outstanding. His attention to detail and creative approach have significantly improved our video content.",
      author: "Michael Chen",
      role: "Creative Director"
    }
  },
  {
    name: "Motion Graphics",
    icon: "✨",
    description: "Creating visually stunning motion graphics",
    details: [
      "2D and 3D animation",
      "Logo animation",
      "Kinetic typography",
      "Visual effects (VFX)",
      "Animated infographics"
    ]
  },
  {
    name: "Social Media Ads",
    icon: "📱",
    description: "Engaging social media ad creation",
    details: [
      "Platform-specific ad optimization",
      "Trend-aware content creation",
      "Ad performance tracking",
      "A/B testing and optimization",
      "Cross-platform campaign coordination"
    ]
  },
  {
    name: "Promos & Explainers",
    icon: "🖥️",
    description: "Compelling promotional and explainer videos",
    details: [
      "Script development",
      "Storyboard creation",
      "Voice-over coordination",
      "Visual storytelling",
      "Brand message integration"
    ],
    testimonial: {
      text: "Aqeel's explainer videos have helped us communicate complex ideas simply and effectively. His work has been instrumental in our product launches.",
      author: "David Park",
      role: "Product Manager"
    }
  },
  {
    name: "Trendy Reels Strategy",
    icon: "🔥",
    description: "Creating viral-worthy social media content",
    details: [
      "Trend analysis and adaptation",
      "Engaging storytelling",
      "Platform-specific optimization",
      "Viral content creation",
      "Audience growth strategies"
    ]
  }
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
            <SkillModal
              key={skill.name}
              title={skill.name}
              icon={skill.icon}
              description={skill.description}
              details={skill.details}
              testimonial={skill.testimonial}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};