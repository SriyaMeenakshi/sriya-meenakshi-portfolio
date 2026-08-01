import { useState } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { profile } from "../../data/profile";
import { FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";

const Hero = () => {
  // --- 3D INTERACTION LOGIC START ---
  
  // Track mouse position relative to the center of the image container
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Map mouse positions to rotation values (-15 degrees to +15 degrees)
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (event) => {
    // Get the element's position and size
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position relative to center (0 to 1 scale)
    const currentMouseX = (event.clientX - rect.left) / width - 0.5;
    const currentMouseY = (event.clientY - rect.top) / height - 0.5;

    // Update motion values
    mouseX.set(currentMouseX);
    mouseY.set(currentMouseY);
  };

  const handleMouseLeave = () => {
    // Smoothly reset rotations to 0 when mouse leaves
    mouseX.set(0);
    mouseY.set(0);
  };

  // --- 3D INTERACTION LOGIC END ---

  return (
    <section className="min-h-[95vh] flex items-center pt-32 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 w-full">
        
        {/* RIGHT SIDE: INTERACTIVE 3D IMAGE AREA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Elegant spring transition
          className="w-full md:w-5/12 flex justify-center perspective-[1000px]" // Enables 3D perspective
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Main Container - The "Frame" that tilts */}
          <motion.div
            style={{ rotateX, rotateY }} // Apply mouse-driven rotations
            className="w-64 h-80 md:w-80 md:h-[400px] rounded-3xl border-[3px] border-white/50 shadow-2xl overflow-hidden relative group cursor-pointer bg-[var(--card)]"
          >
            {/* 1. Background Layer: Fixed in place */}
            <div 
              className="absolute inset-0 z-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${profile.heroBgPattern})` }}
            ></div>

            {/* 2. Character Layer: Tilts MORE for depth (using translation) */}
            <motion.img
              src={profile.characterImage}
              alt="Anime Avatar"
              // Slight translation opposite to tilt amplifies depth
              style={{ x: useTransform(mouseX, [-0.5, 0.5], [5, -5]), 
                       y: useTransform(mouseY, [-0.5, 0.5], [5, -5]) }}
              className="absolute inset-x-0 bottom-0 z-10 w-auto h-[110%] max-w-none object-contain pointer-events-none drop-shadow-2xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />

            {/* 3. Shine Overlay Layer: Fixed, creates gloss effect */}
            <div className="absolute inset-0 z-20 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </motion.div>
        </motion.div>

        {/* LEFT SIDE: TEXT CONTENT (Unchanged) */}
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href={profile.resume}
              className="bg-[var(--primary)] hover:bg-[var(--text)] text-white px-8 py-3 rounded-[var(--radius)] font-medium flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg"
            >
              <FiDownload /> Download Resume
            </a>
            
            <div className="flex gap-4 justify-center sm:justify-start">
              <a href={profile.github} className="bg-white border border-[var(--border)] text-[var(--text)] p-3 rounded-[var(--radius)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all shadow-sm"><FiGithub size={24} /></a>
              <a href={profile.linkedin} className="bg-white border border-[var(--border)] text-[var(--text)] p-3 rounded-[var(--radius)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all shadow-sm"><FiLinkedin size={24} /></a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;