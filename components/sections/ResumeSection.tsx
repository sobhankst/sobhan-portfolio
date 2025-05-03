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
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: 0.2,
      }}
      className="mt-30 w-full text-white md:mt-40 lg:mt-36 xl:mt-32 2xl:mt-50"
    >
      <div className="container mx-auto px-5 lg:px-10">
        <div className="flex h-full flex-col space-y-8 overflow-hidden md:flex-row md:space-x-8">
          <div className="flex flex-4/12 flex-col">
            <h2 className="text-4xl font-medium">
              Why Hire{" "}
              <span className="text-lightGreen font-medium">Me?</span>{" "}
            </h2>
            <p className="mt-2 text-base">
              As a passionate{" "}
              <span className="text-lightGreen font-medium">React</span> &{" "}
              <span className="text-lightGreen font-medium">Next.js</span>{" "}
              Developer, I specialize in building modern, high-performance web
              applications with clean code and beautiful UI.
            </p>
            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-1">
              <button
                onClick={() => setIsActive("experience")}
                type="button"
                className={`bg-lightGray hover:border-lightGreen hover:text-lightGreen w-full cursor-pointer rounded-md border-2 px-4 py-2.5 text-lg capitalize shadow transition-all duration-300 ${isActive === "experience" ? "text-lightGreen border-lightGreen" : "border-lightGray"}`}
              >
                Experience
              </button>
              <button
                onClick={() => setIsActive("education")}
                type="button"
                className={`bg-lightGray hover:border-lightGreen hover:text-lightGreen w-full cursor-pointer rounded-md border-2 px-3 py-2.5 text-lg capitalize shadow transition-all duration-300 ${isActive === "education" ? "text-lightGreen border-lightGreen" : "border-lightGray"}`}
              >
                Education
              </button>
              <button
                onClick={() => setIsActive("skills")}
                type="button"
                className={`bg-lightGray hover:border-lightGreen hover:text-lightGreen w-full cursor-pointer rounded-md border-2 px-3 py-2.5 text-lg capitalize shadow transition-all duration-300 ${isActive === "skills" ? "text-lightGreen border-lightGreen" : "border-lightGray"}`}
              >
                Skills
              </button>
              <button
                onClick={() => setIsActive("aboutme")}
                type="button"
                className={`bg-lightGray hover:border-lightGreen hover:text-lightGreen w-full cursor-pointer rounded-md border-2 px-3 py-2.5 text-lg capitalize shadow transition-all duration-300 ${isActive === "aboutme" ? "text-lightGreen border-lightGreen" : "border-lightGray"}`}
              >
                About Me
              </button>
            </div>
          </div>
          <div className="h-full flex-8/12">
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
