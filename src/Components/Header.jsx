import React, { useState, useEffect } from "react";
import { Home, User, Mail, Code2, Menu, X } from "lucide-react";
import { FaTools } from "react-icons/fa";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050508]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-black tracking-tight select-none">
          <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            AM
          </span>
          <span className="text-white">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 font-medium"
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-[#050508]/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 font-medium text-sm"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
