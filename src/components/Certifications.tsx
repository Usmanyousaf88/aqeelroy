import { motion } from "framer-motion";
import { Badge } from "./ui/badge";

const certifications = [
  {
    title: "Essential Skills in Adobe Premiere Pro Professional Certificate",
    issuer: "Adobe",
    issued: "Dec 2024",
    expires: "Jun 2030",
    skills: ["Adobe Premiere Pro"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/2101px-Adobe_Premiere_Pro_CC_icon.svg.png"
  },
  {
    title: "Advanced Content Marketing",
    issuer: "LinkedIn",
    issued: "Nov 2024",
    expires: "Jan 2030",
    skills: ["Content Marketing"],
    logo: "https://cdn-icons-png.flaticon.com/512/174/174857.png"
  },
  {
    title: "Digital Marketing",
    issuer: "HubSpot Academy",
    issued: "Nov 2024",
    expires: "Jan 2030",
    credentialId: "4b244605fd584de883374a8c95c0e16e",
    skills: ["Digital Marketing"],
    logo: "https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png"
  },
  {
    title: "After Effects Guru: Mastering the Timeline",
    issuer: "LinkedIn",
    issued: "Aug 2024",
    expires: "Jan 2030",
    skills: ["After Effects"],
    logo: "https://cdn-icons-png.flaticon.com/512/174/174857.png"
  }
];

export const Certifications = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-secondary/90"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-2">
          Certifications & Accomplishments <span className="text-3xl">🏆</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="bg-secondary/80 p-6 rounded-lg border border-primary/20 hover:border-primary/40"
            >
              <div className="flex items-start gap-4">
                <img src={cert.logo} alt={cert.issuer} className="w-12 h-12 object-contain" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
                  <p className="text-primary mb-2">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm mb-3">
                    Issued {cert.issued} · Expires {cert.expires}
                  </p>
                  {cert.credentialId && (
                    <p className="text-gray-400 text-sm mb-3">
                      Credential ID: {cert.credentialId}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-primary/20 text-primary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 space-y-4 text-gray-300">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            • Completed over 10 professional certifications in video animation and editing.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            • Received multiple awards and recognitions from leading companies.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            • Mentored aspiring editors in Adobe After Effects, contributing to their professional growth.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};