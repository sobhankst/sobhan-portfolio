"use client";
import React from "react";
import { motion } from "framer-motion";
import { SiFiverr, SiFreelancer, SiUpwork } from "react-icons/si";

type Experience = {
  platform: string;
  startDate: string;
  endDate: string;
  icon: React.ReactNode;
};

const experiences: Experience[] = [
  {
    platform: "Freelancer.com",
    startDate: "September 23, 2021",
    endDate: "Present",
    icon: <SiFreelancer className="text-4xl text-sky-400" />,
  },
  {
    platform: "Fiverr.com",
    startDate: "November 2022",
    endDate: "Present",
    icon: <SiFiverr className="text-4xl text-green-400" />,
  },
  {
    platform: "Upwork",
    startDate: "2025",
    endDate: "Present",
    icon: <SiUpwork className="text-4xl text-green-500" />,
  },
];

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
};

const ExperienceCard = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mx-auto w-full max-w-7xl px-4 py-10"
    >
      <h2 className="mb-10 text-center text-2xl font-medium capitalize">
        My <span className="text-lightGreen">Experience</span>
      </h2>

      <div className="relative flex flex-col items-center justify-center md:flex-row md:overflow-x-auto">
        {/* Timeline Line */}
        <div className="md:bg-lightGreen bg-lightGreen absolute top-0 left-1/2 h-full w-1 md:top-1/2 md:left-0 md:h-1 md:w-full" />

        <div className="flex flex-col space-y-10 md:flex-row md:space-y-0 md:space-x-10 md:px-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              className="flex flex-col items-center md:min-w-[200px]"
            >
              {/* Timeline Dot */}
              <motion.div
                className="bg-lightGreen border-darkGray mb-4 h-5 w-5 rounded-full border-4 md:mt-8 md:mb-0"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.3, duration: 0.4 }}
                viewport={{ once: true }}
              />

              {/* Card */}
              <div className="bg-darkGray w-64 rounded-xl p-6 text-center shadow-md transition hover:shadow-xl">
                <div className="mb-3 flex justify-center">{exp.icon}</div>
                <h3 className="text-lightGreen mb-2 text-lg font-semibold">
                  {exp.platform}
                </h3>
                <p className="text-sm text-gray-400">
                  {exp.startDate} — {exp.endDate}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
