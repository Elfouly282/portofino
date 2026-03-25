/* eslint-disable no-unused-vars */
import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { SiGoogledrive } from "react-icons/si";
import { ExternalLink, Download } from "lucide-react";
import { motion } from "framer-motion";
import bmiImage from "/Images/bmi.png";
import quizImage from "/Images/core-academy.jpg";
import todoImage from "/Images/ons.png";
import bayoumi from "/Images/bayoumi.png";
import islamic from "/Images/islamic.png";
import evalImage from "/Images/eval.png";
import coffe from "/Images/coffe-town.png";
import melamine from "/Images/Melamine.png";
import fourdream from "/Images/4Dream.png";
import yalamatch from "/Images/yala-match.png";






import responsiveImage from "/Images/BABa.png";

const Projects = () => {
  const projects = [
      {
      id: 3,
      name: "BaBa App",
      tag: "In Progress",
      description:
        "A multi-service app connecting users with vendors for browsing, ordering, and booking. Features delivery management and real-time order tracking.",
      image: responsiveImage,
      huaweiAppStore: "https://appgallery.huawei.com/app/C117147745",
    },


   {
      id: 1,
      name: "Islamic Brand",
      tag: "E-commerce",
      description:"Islamic Brand is a modern mobile application designed to provide a seamless shopping experience for modest fashion. The app allows users to explore a wide range of high-quality Islamic clothing with elegant and contemporary designs suitable for everyday wear and special occasions.",
      image: islamic,
      googlePlay: "https://play.google.com/store/apps/details?id=com.islamic.brand",
      // appStore: "#",
    },
    {
      id: 5,
      name: "OnNextStay",
      tag: "Service",
      description:"Developed On Next Stay, a cleaning service app with separate roles for admin,clients, and cleaners, enabling easy booking and management of home/villa cleaning services.",
      image: todoImage,
      // googlePlay: "#",
      drive : "https://drive.google.com/drive/folders/1v9s1bjXnOPHCSjXuj-gzyNBnPHWekEjA",
    },


    {
      id: 1,
      name: "Bayoumi Store",
      tag: "E-commerce",
      description: " E-commerce mobile app for household appliances & electronics,providing product browsing, cart management, and online ordering with a smooth user experience.",
      image: bayoumi,
      googlePlay: "https://play.google.com/store/apps/details?id=com.bayoumy",
      appStore: "https://apps.apple.com/eg/app/bayoumi-gallery-%D8%AC%D8%A7%D9%84%D9%8A%D8%B1%D9%8A-%D8%A8%D9%8A%D9%88%D9%85%D9%8A/id6471124378",
      downloads: "1K+",  

    },

    {
      id: 1,
      name: "Eval Eltorky",
      tag: "E-commerce",
      description:"Eval El Torkey is a household products brand specializing in high-quality melamine and homeware items. I rebuilt their mobile application from scratch, replacing an older legacy version with a modern, scalable Flutter app",
      image: evalImage,
      googlePlay: "https://play.google.com/store/apps/details?id=com.evall",
      appStore: "https://apps.apple.com/eg/app/eval-eltorkey-%D8%A7%D9%8A%D9%81%D8%A7%D9%84-%D8%A7%D9%84%D8%AA%D8%B1%D9%83%D9%8A/id6444809492",
       downloads: "5K+",  

    },


                {
      id: 1,
      name: "Yala Match",
      tag: "Sports",
      description:"Yala Match is a football match booking app that allows users to easily find and book football fields in various cities. The app features separate dashboards for field owners and admins, enabling efficient management of bookings and monitoring of activities.",
      image: yalamatch,
      googlePlay: "https://play.google.com/store/apps/details?id=app.yalamatch",
      appStore: "https://apps.apple.com/eg/app/yalamatch/id6751447545",
      huaweiAppStore: "https://appgallery.huawei.com/app/C117202075",
       downloads: "100+",  

    },


            {
      id: 1,
      name: "Coffe Town",
      tag: "E-commerce",
      description:
        "A mobile app for booking football fields in different cities, with separate dashboards for field owners and admins to manage bookings and monitor activities.",
      image: coffe,
      // googlePlay: "#",
      // appStore: "#",
    },

            {
      id: 1,
      name: "4Dream",
      tag: "E-commerce",
      description:"an Egyptian home-fragrance & household care brand—covering air fresheners, incense, floor & surface cleaners, shower gel, shampoo, and body splash",
      image: fourdream,
      googlePlay: "https://play.google.com/store/apps/details?id=com.FourDream",
      appStore: "https://apps.apple.com/eg/app/4dream/id6754845628",
    },

            {
      id: 1,
      name: "Melamine Elsherif",
      tag: "E-commerce",
      description:"Al Sherif Melamine is a mobile application designed to showcase the company’s products and brand history. The app allows users to explore a wide range of high-quality melamine kitchenware with modern designs, reflecting over 65 years of manufacturing experience.",
      image: melamine,
      googlePlay: "https://play.google.com/store/apps/details?id=com.melamine_elsherif",
      appStore: "https://apps.apple.com/eg/app/melamine-elsherif/id6746694839",
    },

    {
      id: 2,
      name: "CoreAcademy",
      tag: "EdTech",
      description:
        "An educational platform for a programming academy offering multiple courses, with separate interfaces for students and teachers.",
      image: quizImage,
      googlePlay: "https://play.google.com/store/apps/details?id=com.core.academy.student",
      appStore: "https://apps.apple.com/eg/app/core-academy-student/id6747823762",
    },




  ];

  const tagColors = {
    Sports: "text-green-400 bg-green-500/10 border-green-500/20",
    EdTech: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    "In Progress": "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
    Content: "text-pink-400 bg-pink-500/10 border-pink-500/20",
    Service: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    "E-commerce": "text-violet-400 bg-violet-500/10 border-violet-500/20",
  };

  return (
    <section className="py-20 px-6 bg-[#050508]" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold rounded-full uppercase tracking-widest">
              Portfolio
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                className="group bg-[#0d0d18] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-violet-500/25 hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-300 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                {/* Image */}
                <div className="relative overflow-hidden bg-[#07070f] aspect-video">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d18] via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white text-base font-bold">{project.name}</h3>
                    {project.tag && (
                      <span
                        className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                          tagColors[project.tag] || "text-gray-400 bg-white/5 border-white/10"
                        }`}
                      >
                        {project.tag}
                      </span>
                    )}
                  </div>
                  {project.downloads && (
                    <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 mb-3">
                      <Download size={12} />
                      <span className="font-semibold">{project.downloads}</span>
                      <span className="text-gray-500">downloads</span>
                    </div>
                  )}
                  <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.googlePlay && (
                      <a
                        href={project.googlePlay}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 text-gray-300 rounded-lg hover:bg-green-500/10 hover:border-green-500/30 hover:text-green-400 transition-all duration-200 text-xs font-medium"
                      >
                        <FaGooglePlay className="text-xs" />
                        Google Play
                      </a>
                    )}
                    {project.appStore && (
                      <a
                        href={project.appStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 text-gray-300 rounded-lg hover:bg-white/10 hover:text-white transition-all duration-200 text-xs font-medium"
                      >
                        <FaApple className="text-xs" />
                        App Store
                      </a>
                    )}
                    {project.drive && (
                      <a
                        href={project.drive}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 text-gray-300 rounded-lg hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-400 transition-all duration-200 text-xs font-medium"
                      >
                        <SiGoogledrive className="text-xs" />
                        Drive
                      </a>
                    )}
                    {project.huaweiAppStore && (
                      <a
                        href={project.huaweiAppStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 text-gray-300 rounded-lg hover:bg-red-500/10 hover:border-red-500/30 hover:text-red-400 transition-all duration-200 text-xs font-medium"
                      >
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        Huawei Store
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
