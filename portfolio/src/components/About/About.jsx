import { motion } from "framer-motion";
import { FiCode, FiBookOpen, FiCpu, FiAward } from "react-icons/fi";
import { profile } from "../../data/profile"; // Import your data

const About = () => {
  return (
    <section id="about" className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center md:text-left"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] font-['Playfair_Display'] mb-4">
          About Me
        </h2>
        <div className="w-20 h-1 bg-[var(--primary)] mx-auto md:mx-0 rounded-full"></div>
      </motion.div>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Intro Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-[var(--card)] p-8 rounded-[var(--radius)] shadow-sm border border-[var(--border)] lg:col-span-2 hover:shadow-md transition-shadow"
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-[var(--text)]">
            <FiCpu className="text-[var(--primary)]" /> My Journey
          </h3>
          {/* Map through the paragraphs in profile.js */}
          {profile.aboutMe.map((paragraph, index) => (
            <p key={index} className="text-[var(--text-light)] leading-relaxed mb-4 last:mb-0">
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[var(--card)] p-8 rounded-[var(--radius)] shadow-sm border border-[var(--border)] hover:shadow-md transition-shadow bg-gradient-to-br from-white to-[var(--highlight)]/30"
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-[var(--text)]">
            <FiAward className="text-[var(--primary)]" /> Education
          </h3>
          {/* Map through education history */}
          {profile.education.map((edu, index) => (
            <div key={index} className="mb-4 last:mb-0">
              <h4 className="font-medium text-[var(--text)]">{edu.title}</h4>
              <p className="text-sm font-medium text-[var(--primary)] mt-0.5">{edu.subtitle}</p>
              <p className="text-sm text-[var(--text-light)] mt-1">{edu.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Skills Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-[var(--card)] p-8 rounded-[var(--radius)] shadow-sm border border-[var(--border)] hover:shadow-md transition-shadow"
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-[var(--text)]">
            <FiCode className="text-[var(--primary)]" /> Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {/* Map through skills */}
            {profile.skills.map((skill) => (
              <span 
                key={skill} 
                className="bg-[var(--background)] text-[var(--text)] px-3 py-1 rounded-full text-sm font-medium border border-[var(--border)] transition-colors hover:border-[var(--primary)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Currently Learning Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-[var(--card)] p-8 rounded-[var(--radius)] shadow-sm border border-[var(--border)] lg:col-span-2 hover:shadow-md transition-shadow"
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-[var(--text)]">
            <FiBookOpen className="text-[var(--primary)]" /> Currently Exploring
          </h3>
          <div className="flex flex-wrap gap-3">
            {/* Map through learning interests */}
            {profile.learning.map((item) => (
              <div 
                key={item} 
                className="flex items-center gap-2 bg-[var(--accent)]/20 text-[var(--text)] px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-[var(--accent)]/40"
              >
                <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
                {item}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;