/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Download, ArrowRight, MapPin } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import dartIcon from "/Images/dart-icon.svg";
import flutterIcon from "/Images/flutter-icon.svg";
const cv = "/CV/Abdelrahman%20Montaser%20Flutter%20CV.pdf";
import myLogo from "/Images/my-logo.svg";

const techStack = [
  { icon: dartIcon, label: "Dart" },
  { icon: flutterIcon, label: "Flutter" },
];

const Navbar = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[#050508] overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid" />

      {/* Ambient glow blobs */}
      <div className="absolute top-1/3 -left-32 w-[600px] h-[600px] bg-violet-700/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 flex flex-col md:flex-row items-center justify-between gap-16 w-full">

        {/* Left — text content */}
        <div className="max-w-2xl space-y-7 text-center md:text-left">

          {/* <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold rounded-full uppercase tracking-widest"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
            Available for work
            <span className="text-gray-500">·</span>
            <MapPin className="h-3 w-3" />
            Egypt
          </motion.span> */}

          <motion.h1
            className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Abdelrahman
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
              Montaser
            </span>
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl text-gray-400 font-medium min-h-[2rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Typewriter
              words={[
                "Flutter Developer",
                "Mobile App Developer",
                "Clean Code Advocate",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={55}
              deleteSpeed={80}
              delaySpeed={2000}
            />
          </motion.div>

          <motion.p
            className="text-gray-500 text-base md:text-lg leading-relaxed max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            2+ years building production-grade mobile apps.
            Clean Architecture · BLoC / Cubit · Firebase · Supabase
          </motion.p>

          <motion.div
            className="flex items-center gap-3 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            {techStack.map(({ icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-3 py-2 bg-white/[0.03] border border-white/[0.08] rounded-xl"
              >
                <img src={icon} alt={label} className="w-5 h-5" />
                <span className="text-gray-400 text-sm font-medium">{label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-3 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <a
              href={cv}
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold rounded-xl shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 hover:scale-105 transition-all duration-200 text-sm"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-gray-300 font-semibold rounded-xl hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-200 text-sm"
            >
              Contact Me
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/Elfouly282"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-gray-300 font-semibold rounded-xl hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-200 text-sm"
            >
              <FaGithub className="h-4 w-4" />
              GitHub
            </a>
          </motion.div>
        </div>

        {/* Right — logo */}
        <motion.div
          className="relative flex-shrink-0 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-purple-500/20 rounded-full scale-[1.6] blur-3xl pointer-events-none" />
          <motion.div
            className="relative"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src={myLogo}
              alt="Abdelrahman Montaser Logo"
              className="relative w-60 md:w-[320px] object-contain drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Navbar;
