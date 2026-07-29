import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi"; // We installed react-icons for these

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Reusable link array to map over
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Hackathons", path: "/hackathons" },
    { name: "Gallery", path: "/gallery" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center h-20">
        
        {/* Logo / Name */}
        <Link 
          to="/" 
          className="text-2xl font-bold font-['Playfair_Display'] text-[var(--text)] tracking-wide"
        >
          Sriya.
        </Link>

        {/* Desktop Menu - Hidden on mobile, visible on medium screens and up */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-[var(--text-light)] hover:text-[var(--primary)] transition-colors font-medium text-sm"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button - Visible only on small screens */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-2xl text-[var(--text)]"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu (Framer Motion Animation) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 w-full bg-[var(--card)] shadow-lg border-t border-[var(--border)] flex flex-col py-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)} // Close menu on click
                className="px-6 py-4 text-center text-lg text-[var(--text-light)] hover:bg-[var(--highlight)] hover:text-[var(--text)] transition-all border-b border-gray-50 last:border-0"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;