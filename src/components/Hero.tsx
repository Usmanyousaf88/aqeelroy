import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter, Calendar } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-secondary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary" />
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center gap-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary"
          >
            <img
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
              alt="Aqeel Roy"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm Aqeel Roy 👋
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              With over 6 years of experience in video animation, I bring stories to life through captivating visuals. 
              I specialize in creating dynamic content that helps brands stand out and connect with their audience.
            </p>

            <div className="flex items-center justify-center gap-6 mb-8">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-300 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg transition-colors flex items-center gap-2"
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full text-lg transition-colors flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book a Call
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};