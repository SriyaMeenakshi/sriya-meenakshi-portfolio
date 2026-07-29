import { motion } from "framer-motion";
import { profile } from "../../data/profile";
import { FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";

const Hero = () => {
  return (
    // pt-32 adds padding to account for the fixed navbar height
    <section className="min-h-[90vh] flex items-center pt-32 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
      
      {/* Container switches from column on mobile to row on md screens */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 w-full">
        
        {/* Right side (or Top on mobile): Image Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-5/12 flex justify-center"
        >
          {/* Placeholder for your actual image */}
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-[var(--accent)] border-4 border-white shadow-xl overflow-hidden relative group">
             {/* Replace with <img src={your_image_path} /> later */}
             <div className="absolute inset-0 bg-[var(--secondary)] opacity-20 group-hover:opacity-0 transition-opacity"></div>
             <div className="w-full h-full flex items-center justify-center text-[var(--text-light)] font-medium">
               Image Placeholder
             </div>
          </div>
        </motion.div>

        {/* Left side (or Bottom on mobile): Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-7/12 text-center md:text-left"
        >
          <h2 className="text-xl md:text-2xl text-[var(--text-light)] mb-2 font-medium">Hello 👋, I'm</h2>
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--text)] mb-4 font-['Playfair_Display']">
            {profile.name}
          </h1>
          <h3 className="text-2xl md:text-3xl text-[var(--primary)] font-semibold mb-6">
            {profile.role}
          </h3>
          
          <p className="text-lg text-[var(--text-light)] mb-8 max-w-lg leading-relaxed mx-auto md:mx-0">
            {profile.tagline}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href={profile.resume}
              className="bg-[var(--primary)] hover:bg-[var(--text)] text-white px-8 py-3 rounded-[var(--radius)] font-medium flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg"
            >
              <FiDownload /> Download Resume
            </a>
            
            <div className="flex gap-4 justify-center sm:justify-start">
              <a 
                href={profile.github}
                className="bg-white border border-[var(--border)] text-[var(--text)] p-3 rounded-[var(--radius)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all shadow-sm"
                aria-label="GitHub"
              >
                <FiGithub size={24} />
              </a>
              <a 
                href={profile.linkedin}
                className="bg-white border border-[var(--border)] text-[var(--text)] p-3 rounded-[var(--radius)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all shadow-sm"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={24} />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;