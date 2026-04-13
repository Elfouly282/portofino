import React from "react";
import {
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaGithub,
  FaBriefcase,
  FaExternalLinkAlt,
  FaMapMarkerAlt,
  FaGraduationCap,
} from "react-icons/fa";
import { SiFirebase, SiMaterialdesign } from "react-icons/si";
import { MdApi } from "react-icons/md";
import { GraduationCap, Briefcase, Zap, Code } from "lucide-react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Projects from "./Projects";
/* eslint-enable no-unused-vars */
import dartIcon from "/Images/dart-icon.svg";
import flutterIcon from "/Images/flutter-icon.svg";
import blocIcon from "/Images/bloc-icon.svg";
const cv = "/CV/Abdelrahman%20Montaser%20Flutter%20CV.pdf";
import supabase from "/Images/supabase.jpg";

const skills = [
  { name: "Dart", level: 100, icon: <img src={dartIcon} alt="Dart" className="w-5 h-5" /> },
  { name: "Flutter", level: 97, icon: <img src={flutterIcon} alt="Flutter" className="w-5 h-5" /> },
  { name: "BLoC / Cubit", level: 99, icon: <img src={blocIcon} alt="Bloc" className="w-5 h-5" /> },
  { name: "Firebase", level: 90, icon: <SiFirebase className="text-yellow-500 text-lg" /> },
  { name: "Supabase", level: 80, icon: <img src={supabase} alt="Supabase" className="w-5 h-5 rounded-sm object-cover" /> },
  { name: "REST APIs", level: 95, icon: <MdApi className="text-green-400 text-xl" /> },
  { name: "Clean Architecture", level: 90, icon: <SiMaterialdesign className="text-violet-400 text-lg" /> },
  { name: "GitHub", level: 95, icon: <FaGithub className="text-gray-300 text-lg" /> },
  { name: "JavaScript", level: 75, icon: <FaJs className="text-yellow-400 text-lg" /> },
  { name: "Node.js", level: 70, icon: <FaNodeJs className="text-green-500 text-lg" /> },
  { name: "HTML & CSS", level: 85, icon: <FaHtml5 className="text-orange-500 text-lg" /> },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7, delay: 0.1 },
};

const SectionLabel = ({ children }) => (
  <span className="inline-flex items-center gap-2 px-3 py-1 bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold rounded-full uppercase tracking-widest mb-4">
    {children}
  </span>
);

const SectionTitle = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-black text-white mb-12 text-center">
    <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
      {children}
    </span>
  </h2>
);

const Card = ({ children, className = "" }) => (
  <div
    className={`bg-[#0d0d18] border border-white/[0.06] rounded-2xl p-6 hover:border-violet-500/20 hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-300 ${className}`}
  >
    {children}
  </div>
);

const Aboutme = () => {
  return (
    <div id="about" className="bg-[#050508]">

      {/* ── About Me ── */}
      <section className="py-24 px-6 md:px-20 max-w-5xl mx-auto">
        <motion.div {...fadeUp} className="space-y-6">
          <SectionLabel><Code className="h-3 w-3" /> About Me</SectionLabel>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
            I&rsquo;m{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
              Abdelrahman Montaser
            </span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
            Flutter Developer with{" "}
            <span className="text-white font-semibold">2+ years</span> of hands-on experience building
            mobile applications using{" "}
            <span className="text-cyan-400 font-semibold">Dart</span> and{" "}
            <span className="text-violet-400 font-semibold">Flutter</span>. Contributed to educational
            platforms, service-based apps, and e-commerce solutions. Passionate about writing clean,
            maintainable code and delivering high-performance, user-friendly applications. Experienced
            in{" "}
            <span className="text-cyan-400 font-semibold">BLoC / Cubit</span>, Clean Architecture,
            Firebase, Supabase, and RESTful APIs.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold rounded-xl shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 hover:scale-105 transition-all duration-200 text-sm"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── Education ── */}
      {/* <section className="py-20 px-6 bg-[#07070f]">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-4">
            <SectionLabel><GraduationCap className="h-3 w-3" /> Education</SectionLabel>
          </motion.div>
          <SectionTitle>Education</SectionTitle>
          <motion.div {...fadeUp}>
            <Card className="flex flex-col md:flex-row items-start gap-5">
              <div className="p-3 bg-violet-500/10 border border-violet-500/20 rounded-xl flex-shrink-0">
                <FaGraduationCap className="text-violet-400 text-2xl" />
              </div>
              <div className="space-y-1">
                <span className="text-xs text-violet-400 font-semibold uppercase tracking-wider">
                  09/2022 – 06/2026
                </span>
                <h3 className="text-white text-xl font-bold">
                  Faculty of Computers and Information, Egypt University
                </h3>
                <p className="text-gray-400 text-sm flex items-center gap-1">
                  <FaMapMarkerAlt className="text-red-400 text-xs" /> Egypt
                </p>
                <span className="inline-block mt-1 text-sm text-cyan-400 font-semibold">
                  Bachelor&rsquo;s Degree – Computer Science
                </span>
              </div>
            </Card>
          </motion.div>
        </div>
      </section> */}

      {/* ── Projects ── */}
      <Projects />

      {/* ── Experience ── */}
      {/* <section className="py-20 px-6 bg-[#07070f]">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-4">
            <SectionLabel><Briefcase className="h-3 w-3" /> Work</SectionLabel>
          </motion.div>
          <SectionTitle>Experience</SectionTitle>

          <motion.div {...fadeUp} className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-violet-500/50 to-transparent" />
            <div className="space-y-8 pl-14">

              {/* Dokkan */}
              <div className="relative">
                <div className="absolute -left-9 top-1 w-8 h-8 bg-gradient-to-br from-cyan-500 to-violet-600 rounded-full flex items-center justify-center shadow-lg shadow-violet-500/30">
                  <FaBriefcase className="text-white text-xs" />
                </div>
                <Card>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="text-white text-lg font-bold">Flutter Developer</h3>
                    <span className="text-xs text-cyan-400 font-semibold bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
                      07/2025 – Present
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <a
                      href="https://dokkan.agency/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-violet-400 font-semibold hover:text-violet-300 text-sm transition"
                    >
                      Dokkan Agency <FaExternalLinkAlt className="text-xs" />
                    </a>
                    <span className="text-gray-600">·</span>
                    <span className="flex items-center gap-1 text-gray-500 text-xs">
                      <FaMapMarkerAlt className="text-red-400" /> Egypt
                    </span>
                    <span className="text-xs bg-white/5 text-gray-400 px-2 py-0.5 rounded-full border border-white/10">
                      On-site
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">
                    Developed and deployed{" "}
                    <span className="text-white font-semibold">6+ production e-commerce apps</span>{" "}
                    on Google Play &amp; App Store.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["BayoumiStore", "EvalEltorky", "4Dream", "AlSherif Melamine", "SilverPure", "Premium Mart"].map(
                      (app) => (
                        <span
                          key={app}
                          className="text-xs bg-white/[0.04] text-gray-400 px-3 py-1 rounded-full border border-white/[0.08]"
                        >
                          {app}
                        </span>
                      )
                    )}
                  </div>
                </Card>
              </div>

              {/* Camp Coding */}
              <div className="relative">
                <div className="absolute -left-9 top-1 w-8 h-8 bg-gradient-to-br from-cyan-500 to-violet-600 rounded-full flex items-center justify-center shadow-lg shadow-violet-500/30">
                  <FaBriefcase className="text-white text-xs" />
                </div>
                <Card>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="text-white text-lg font-bold">Flutter Developer</h3>
                    <span className="text-xs text-cyan-400 font-semibold bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
                      01/2025 – 06/2025
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-violet-400 font-semibold text-sm">Camp Coding</span>
                    <span className="text-gray-600">·</span>
                    <span className="flex items-center gap-1 text-gray-500 text-xs">
                      <FaMapMarkerAlt className="text-red-400" /> Egypt
                    </span>
                    <span className="text-xs bg-white/5 text-gray-400 px-2 py-0.5 rounded-full border border-white/10">
                      On-site
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">
                    Built multi-role service apps supporting{" "}
                    <span className="text-white font-semibold">3 user roles</span>.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["OnNextStay (Cleaning Service)", "El Hagrasy (Maintenance)"].map((app) => (
                      <span
                        key={app}
                        className="text-xs bg-white/[0.04] text-gray-400 px-3 py-1 rounded-full border border-white/[0.08]"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>

              {/* CORE Academy */}
              <div className="relative">
                <div className="absolute -left-9 top-1 w-8 h-8 bg-gradient-to-br from-cyan-500 to-violet-600 rounded-full flex items-center justify-center shadow-lg shadow-violet-500/30">
                  <FaBriefcase className="text-white text-xs" />
                </div>
                <Card>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="text-white text-lg font-bold">Instructor Flutter Developer</h3>
                    <span className="text-xs text-cyan-400 font-semibold bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
                      07/2024 – 11/2024
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-violet-400 font-semibold text-sm">CORE Academy</span>
                    <span className="text-gray-600">·</span>
                    <span className="flex items-center gap-1 text-gray-500 text-xs">
                      <FaMapMarkerAlt className="text-red-400" /> Egypt
                    </span>
                    <span className="text-xs bg-white/5 text-gray-400 px-2 py-0.5 rounded-full border border-white/10">
                      On-site
                    </span>
                  </div>
                  <ul className="text-gray-400 text-sm space-y-2 list-none">
                    <li className="flex items-start gap-2">
                      <span className="text-violet-400 mt-1">▸</span>
                      Trained{" "}
                      <span className="text-white font-semibold">15+ students</span>{" "}
                      in Flutter development &amp; state management
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-violet-400 mt-1">▸</span>
                      Designed structured curricula covering{" "}
                      <span className="text-white font-semibold">10+ core topics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-violet-400 mt-1">▸</span>
                      Led hands-on workshops that boosted engagement by{" "}
                      <span className="text-white font-semibold">20%</span>
                    </li>
                  </ul>
                </Card>
              </div>

            </div>
          </motion.div>
        </div>
      </section> */}

      {/* ── Training & Activities ── */}
      {/* <section className="py-20 px-6 bg-[#050508]">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-4">
            <SectionLabel><Zap className="h-3 w-3" /> Activities</SectionLabel>
          </motion.div>
          <SectionTitle>Training &amp; Activities</SectionTitle>
          <motion.div
            {...fadeUp}
            className="grid md:grid-cols-3 gap-6"
          >
            <Card>
              <span className="text-xs text-violet-400 font-semibold uppercase tracking-wider">
                07/2025 – 08/2025
              </span>
              <h3 className="text-white text-base font-bold mt-2 mb-1">
                Mobile App Developer Intern
              </h3>
              <p className="text-cyan-400 font-semibold text-sm mb-3">
                Information Technology Institute (ITI)
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Completed a 120-hour program covering{" "}
                <span className="text-gray-300">HTML, CSS, Flutter, Dart, and Firebase</span>.
              </p>
            </Card>

            <Card>
              <span className="text-xs text-violet-400 font-semibold uppercase tracking-wider">
                02/2025 – 03/2025
              </span>
              <h3 className="text-white text-base font-bold mt-2 mb-1">
                Mobile App Developer Intern
              </h3>
              <p className="text-cyan-400 font-semibold text-sm mb-3">
                National Telecommunication Institute (NTI)
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Completed a 120-hour program{" "}
                <span className="text-gray-300">(90h Flutter + 30h Soft Skills)</span>{" "}
                focused on scalable, responsive app development.
              </p>
            </Card>

            <Card>
              <span className="text-xs text-violet-400 font-semibold uppercase tracking-wider">
                12/2024 — Cairo, Egypt
              </span>
              <h3 className="text-white text-base font-bold mt-2 mb-1">Participant</h3>
              <p className="text-cyan-400 font-semibold text-sm mb-3">
                Grand Egyptian Museum Hackathon (GEM)
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Collaborated with a team to develop an innovative solution for a{" "}
                <span className="text-gray-300">software-related challenge</span>.
              </p>
            </Card>
          </motion.div>
        </div>
      </section> */}

      {/* ── Skills ── */}
      <section id="skills" className="py-20 px-6 bg-[#07070f]">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-4">
            <SectionLabel>Tech Stack</SectionLabel>
          </motion.div>
          <SectionTitle>Skills</SectionTitle>
          <motion.p {...fadeUp} className="text-center text-gray-500 -mt-6 mb-12 text-sm">
            Core technologies I use to build fast, scalable mobile apps
          </motion.p>

          <motion.div
            {...fadeUp}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {skills.map((skill, i) => (
              <div
                key={i}
                className="group bg-[#0d0d18] border border-white/[0.06] rounded-2xl p-5 hover:border-violet-500/30 hover:bg-[#100f20] hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white/5 rounded-lg">{skill.icon}</div>
                  <span className="text-white text-sm font-semibold">{skill.name}</span>
                  <span className="ml-auto text-xs text-gray-600 font-mono">{skill.level}%</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-1.5">
                  <div
                    className="h-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Aboutme;
