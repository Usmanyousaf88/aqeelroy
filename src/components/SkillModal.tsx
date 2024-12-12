import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";

interface SkillModalProps {
  title: string;
  icon: string;
  description: string;
  details: string[];
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
}

const skillImages = {
  "Content Creation": "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  "Video Animation & Editing": "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
  "Motion Graphics": "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  "Social Media Ads": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  "Promos & Explainers": "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
  "Trendy Reels Strategy": "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
};

export const SkillModal = ({ title, icon, description, details, testimonial }: SkillModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-secondary/80 p-6 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors cursor-pointer backdrop-blur-sm"
        >
          <span className="text-4xl mb-4 block">{icon}</span>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-300 text-sm">{description}</p>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="bg-secondary/95 text-white border border-primary/20 max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <span>{icon}</span> {title}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          {skillImages[title as keyof typeof skillImages] && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 rounded-lg overflow-hidden"
            >
              <img
                src={skillImages[title as keyof typeof skillImages]}
                alt={title}
                className="w-full h-48 object-cover rounded-lg"
              />
            </motion.div>
          )}
          <p className="text-gray-300 mb-6">{description}</p>
          <div className="space-y-4">
            {details.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-2"
              >
                <span className="text-primary">•</span>
                <p className="text-gray-300">{detail}</p>
              </motion.div>
            ))}
          </div>
          {testimonial && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 p-6 bg-gradient-to-br from-primary/20 to-secondary rounded-lg border border-primary/20"
            >
              <p className="text-gray-300 italic mb-4">"{testimonial.text}"</p>
              <div>
                <p className="text-white font-semibold">{testimonial.author}</p>
                <p className="text-primary text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};