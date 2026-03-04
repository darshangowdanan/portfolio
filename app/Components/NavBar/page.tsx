import React from "react";
import { Home, Briefcase, Code, User, Send } from "lucide-react";
const Nav = () => {
  const navLinks = [
    { name: "Home", href: "#home", icon: <Home size={20} /> },
    { name: "Projects", href: "#projects", icon: <Briefcase size={20} /> },
    { name: "Skills", href: "#skills", icon: <Code size={20} /> },
    { name: "About", href: "#about", icon: <User size={20} /> },
    { name: "Contact", href: "#contact", icon: <Send size={20} /> },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center p-4 md:p-6 h-auto md:h-36">
      <nav 
        aria-label="Main Navigation"
        className="
          flex items-center 
          px-5 py-3 md:px-8 md:py-3 
          bg-transparent backdrop-blur-md 
          border border-white/10 rounded-full 
          shadow-2xl transition-all duration-300 
          hover:border-white/20 w-auto h-16       "
      >
        <ul className="flex items-center gap-6 md:gap-12">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-slate-300 transition-all duration-300 hover:text-white relative group flex items-center justify-center"
                target="_self"
              >
                {/* Mobile: Icons with hover scale and glow */}
                <span className="md:hidden p-2 transition-transform duration-300 group-hover:scale-125 group-hover:text-white group-active:scale-95">
                  {link.icon}
                  <span className="absolute inset-0 bg-white/10 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </span>

                {/* Desktop: Text Labels */}
                <span className="hidden md:block text-xl lg:text-2xl">
                  {link.name}
                </span>

                {/* Animated Underline (Desktop Only) */}
                <span className="hidden md:block absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                
                {/* Tooltip for Mobile (optional, shows on long press/hover) */}
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-neutral-800 text-[10px] text-white rounded opacity-0 pointer-events-none transition-opacity group-hover:md:hidden group-hover:opacity-100">
                  {link.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;