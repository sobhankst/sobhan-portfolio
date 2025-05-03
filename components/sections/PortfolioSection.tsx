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
  const [direction, setDirection] = useState<"left" | "right">("right");

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection("left");
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < projects.length - 1) {
      setDirection("right");
      setCurrentIndex(currentIndex + 1);
    }
  };

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
      className="mt-30 w-full md:mt-40 lg:mt-30 xl:mt-36 2xl:mt-50"
    >
      <div className="container mx-auto px-5 lg:px-10">
        <h2 className="text-center text-4xl font-semibold capitalize">
          Latest <span className="text-lightGreen">Project</span>
        </h2>
        <div className="mt-8 flex flex-col gap-5 overflow-hidden pb-8 md:flex-row">
          {/* Left Side: Description */}
          <AnimatePresence mode="wait">
            <motion.div
              key={projects[currentIndex].title}
              initial={{ x: direction === "right" ? 100 : -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction === "right" ? -100 : 100, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex-1/3 flex-col space-y-2"
            >
              <span className="text-shadow block text-6xl drop-shadow-2xl text-shadow-white">
                {projects[currentIndex].number}
              </span>
              <h3 className="text-3xl font-semibold">
                {projects[currentIndex].title}
              </h3>
              <p className="text-base">{projects[currentIndex].description}</p>
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
            </motion.div>
          </AnimatePresence>
          {/* Right Side: Image Carousel */}
          <div className="mt-0 flex flex-2/3 flex-col items-start md:-mt-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={projects[currentIndex].image}
                initial={{
                  x: direction === "right" ? 100 : -100,
                  opacity: 0,
                }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction === "right" ? -100 : 100, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative mt-2 h-[20rem] w-full"
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
