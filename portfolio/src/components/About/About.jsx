import { motion } from "framer-motion";
import { FiCode, FiBookOpen, FiCpu, FiAward } from "react-icons/fi";

const About = () => {
  // You can eventually move these arrays to your data/profile.js file
  const skills = ["Python", "C++", "Java", "Next.js", "Tailwind CSS", "Streamlit", "OpenCV"];
  const learning = ["Full Stack Development", "Large Language Models", "Computer Vision"];

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
        
        {/* Intro Card - Spans 2 columns on large screens */}
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
          <p className="text-[var(--text-light)] leading-relaxed mb-4">
            I am a 3rd-year B.Tech student specializing in Computer Science with a focus on Artificial Intelligence and Machine Learning at Gayatri Vidya Parishad College of Engineering for Women.
          </p>
          <p className="text-[var(--text-light)] leading-relaxed">
            Beyond code, I enjoy competitive programming, building data-driven tools, and exploring my creative side through photography and cinematic video editing. Whether I'm optimizing an AI pipeline or capturing a moment, I love blending logic with creativity.
          </p>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          // Added a subtle gradient background using your highlight color
          className="bg-[var(--card)] p-8 rounded-[var(--radius)] shadow-sm border border-[var(--border)] hover:shadow-md transition-shadow bg-gradient-to-br from-white to-[var(--highlight)]/30"
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-[var(--text)]">
            <FiAward className="text-[var(--primary)]" /> Education
          </h3>
          <div className="mb-4">
            <h4 className="font-medium text-[var(--text)]">B.Tech in CS (AI & ML)</h4>
            <p className="text-sm text-[var(--text-light)] mt-1">2023 - 2027</p>
          </div>
          <div>
            <h4 className="font-medium text-[var(--text)]">GATE 2026 Aspirant</h4>
            <p className="text-sm text-[var(--text-light)] mt-1">Focusing on Digital Logic & Engineering Mathematics</p>
          </div>
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
            {skills.map((skill) => (
              <span 
                key={skill} 
                className="bg-[var(--background)] text-[var(--text)] px-3 py-1 rounded-full text-sm font-medium border border-[var(--border)]"
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
            {learning.map((item) => (
              <div 
                key={item} 
                className="flex items-center gap-2 bg-[var(--accent)]/20 text-[var(--text)] px-4 py-2 rounded-lg text-sm font-medium"
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