import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#050508] border-t border-white/[0.05] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#home" className="text-lg font-black tracking-tight select-none">
          <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            AM
          </span>
          <span className="text-white">.</span>
        </a>

        <p className="text-gray-600 text-sm">
          © 2026 Abdelrahman Montaser. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          {[
            { href: "https://www.linkedin.com/in/abdelrahman-montaser-839600280", icon: <FaLinkedin />, color: "hover:text-blue-400" },
            { href: "https://github.com/Elfouly282", icon: <FaGithub />, color: "hover:text-white" },
            { href: "https://wa.me/201275835070", icon: <FaWhatsapp />, color: "hover:text-green-400" },
          ].map(({ href, icon, color }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-600 ${color} transition-colors duration-200 text-lg`}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
