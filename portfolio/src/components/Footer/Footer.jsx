import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../../data/profile";

const Footer = () => {
  return (
    <footer className="bg-[var(--card)] border-t border-[var(--border)] py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side: Brand & CTA */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold font-['Playfair_Display'] text-[var(--text)] tracking-wide">
            {profile.name}.
          </h2>
          <p className="text-[var(--text-light)] mt-2">
            Let's build something amazing together.
          </p>
        </div>

        {/* Right Side: Social Links */}
        <div className="flex gap-4">
          <a 
            href={profile.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-[var(--background)] rounded-full text-[var(--text)] hover:bg-[var(--primary)] hover:text-white transition-all shadow-sm" 
            aria-label="GitHub"
          >
            <FiGithub size={20} />
          </a>
          <a 
            href={profile.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-[var(--background)] rounded-full text-[var(--text)] hover:bg-[var(--primary)] hover:text-white transition-all shadow-sm" 
            aria-label="LinkedIn"
          >
            <FiLinkedin size={20} />
          </a>
          <a 
            href={`mailto:${profile.email}`} 
            className="p-3 bg-[var(--background)] rounded-full text-[var(--text)] hover:bg-[var(--primary)] hover:text-white transition-all shadow-sm" 
            aria-label="Email"
          >
            <FiMail size={20} />
          </a>
        </div>

      </div>
      
      {/* Copyright */}
      <div className="text-center text-[var(--text-light)] text-sm mt-12 pt-8 border-t border-[var(--border)] max-w-7xl mx-auto px-6 lg:px-12">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;