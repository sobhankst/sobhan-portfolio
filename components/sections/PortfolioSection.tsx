"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import {
  LuArrowLeft,
  LuArrowRight,
  LuArrowUpRight,
  LuGithub,
} from "react-icons/lu";
import Image from "next/image";
import { projects } from "@/lib/constants";

const PortfolioSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < projects.length - 1) setCurrentIndex(currentIndex + 1);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="mt-30 h-full w-full"
    >
      <div className="container mx-auto px-4">
        <div className="mt-5 flex flex-col gap-5 pb-8 md:flex-row">
          {/* Left Side: Description */}
          <div className="flex-1/3 flex-col gap-4">
            <span className="text-shadow block text-6xl drop-shadow-2xl text-shadow-white">
              {projects[currentIndex].number}
            </span>
            <h3 className="text-3xl font-semibold">
              {projects[currentIndex].title}
            </h3>
            <p className="text-sm">{projects[currentIndex].description}</p>
            <p className="text-lightGreen text-xl font-medium">
              {projects[currentIndex].tech}
            </p>
            <hr className="bg-lightGray my-2 h-0.5 w-full" />
            <div className="flex items-center gap-3">
              {/* Live demo link */}
              <Link
                href={projects[currentIndex].live_link}
                target="_blank"
                className="bg-lightGray hover:text-lightGreen size-12 rounded-full p-3 text-white shadow-xl transition-colors duration-300"
              >
                <LuArrowUpRight className="size-full" />
              </Link>
              <Link
                href={projects[currentIndex].github}
                target="_blank"
                className="bg-lightGray hover:text-lightGreen size-12 rounded-full p-3 text-white shadow-xl transition-colors duration-300"
              >
                <LuGithub className="size-full" />
              </Link>
            </div>
          </div>

          {/* Right Side: Image Carousel */}
          <div className="mt-0 flex flex-2/3 flex-col items-start md:-mt-5">
            <h2 className="text-left text-2xl font-semibold capitalize">
              Latest <span className="text-lightGreen">Project</span>
            </h2>
            <div className="relative mt-2 h-[20rem] w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={projects[currentIndex].image}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={projects[currentIndex].image}
                    alt={`portfolio-${currentIndex}`}
                    fill
                    loading="lazy"
                    className="rounded-md object-cover shadow-md"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="mt-4 flex w-full justify-center gap-4">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`bg-lightGray border-lightGreen cursor-pointer rounded-md border px-3 py-1 text-white transition duration-300 disabled:cursor-not-allowed ${
                  currentIndex === 0
                    ? "cursor-not-allowed opacity-50"
                    : "hover:text-lightGreen"
                }`}
              >
                <LuArrowLeft className="size-6" />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === projects.length - 1}
                className={`bg-lightGray border-lightGreen cursor-pointer rounded-md border px-3 py-1 text-white transition duration-300 disabled:cursor-not-allowed ${
                  currentIndex === projects.length - 1
                    ? "cursor-not-allowed opacity-50"
                    : "hover:text-lightGreen"
                }`}
              >
                <LuArrowRight className="size-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default PortfolioSection;
