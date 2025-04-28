"use client";
import React, { useState } from "react";
import MyExperience from "../MyExperience";
import { motion } from "framer-motion";
import MyEducation from "../MyEducation";
import MySkills from "../MySkills";
import AboutMe from "../AboutMe";
const ResumeSection = () => {
  const [isActive, setIsActive] = useState("experience");
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="mt-30 w-full text-white"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col space-x-8 overflow-hidden md:flex-row">
          <div className="flex flex-4/12 flex-col">
            <h2 className="text-3xl font-medium">Why Hire Me?</h2>
            <p className="text-sm">
              As a passionate React & Next.js Developer, I specialize in
              building modern, high-performance web applications with clean code
              and beautiful UI. I focus on creating real-world, scalable
              solutions that are optimized for both performance and user
              experience.
            </p>
            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-1">
              <button
                onClick={() => setIsActive("experience")}
                type="button"
                className={`bg-lightGray hover:border-lightGreen hover:text-lightGreen w-full cursor-pointer rounded-md border-2 px-4 py-2.5 capitalize shadow transition-all duration-300 ${isActive === "experience" ? "text-lightGreen border-lightGreen" : "border-lightGray"}`}
              >
                Experience
              </button>
              <button
                onClick={() => setIsActive("education")}
                type="button"
                className={`bg-lightGray hover:border-lightGreen hover:text-lightGreen w-full cursor-pointer rounded-md border-2 px-3 py-2.5 capitalize shadow transition-all duration-300 ${isActive === "education" ? "text-lightGreen border-lightGreen" : "border-lightGray"}`}
              >
                Education
              </button>
              <button
                onClick={() => setIsActive("skills")}
                type="button"
                className={`bg-lightGray hover:border-lightGreen hover:text-lightGreen w-full cursor-pointer rounded-md border-2 px-3 py-2.5 capitalize shadow transition-all duration-300 ${isActive === "skills" ? "text-lightGreen border-lightGreen" : "border-lightGray"}`}
              >
                Skills
              </button>
              <button
                onClick={() => setIsActive("aboutme")}
                type="button"
                className={`bg-lightGray hover:border-lightGreen hover:text-lightGreen w-full cursor-pointer rounded-md border-2 px-3 py-2.5 capitalize shadow transition-all duration-300 ${isActive === "aboutme" ? "text-lightGreen border-lightGreen" : "border-lightGray"}`}
              >
                About Me
              </button>
            </div>
          </div>
          <div className="mt-3 h-[calc(100vh-12rem)] flex-8/12 overflow-hidden md:mt-0">
            {isActive === "experience" ? (
              <MyExperience />
            ) : isActive === "education" ? (
              <MyEducation />
            ) : isActive === "skills" ? (
              <MySkills />
            ) : isActive === "aboutme" ? (
              <AboutMe />
            ) : null}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ResumeSection;
