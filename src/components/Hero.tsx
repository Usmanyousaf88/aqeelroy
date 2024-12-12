import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter, Calendar, Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

export const Hero = () => {
  const { theme, setTheme } = useTheme();
  
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/aqeelroy/", label: "LinkedIn" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center text-white relative overflow-hidden">
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="fixed top-4 right-4 p-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 hover:bg-primary/20 transition-colors z-50"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </motion.button>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary"
            style={{
              background: "linear-gradient(45deg, #8B5CF6, #D6BCFA)",
              padding: "4px",
            }}
          >
            <div className="w-full h-full rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
                alt="Aqeel Roy"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Hi, I'm Aqeel Roy 👋
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed backdrop-blur-sm">
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
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-300 hover:text-primary transition-all transform hover:shadow-lg"
                  aria-label={social.label}
                >
                  <social.icon size={24} className="filter drop-shadow-lg" />
                </motion.a>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-8 py-3 rounded-full text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 backdrop-blur-sm"
              >
                <a href="https://www.behance.net/aqeel_roy" target="_blank" rel="noopener noreferrer">
                  View My Work
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 backdrop-blur-sm"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book a Call
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
