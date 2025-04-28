import React from "react";
import { motion } from "framer-motion";
import { SiFreelancer, SiFiverr, SiUpwork } from "react-icons/si";
type Experience = {
  platform: string;
  startDate: string;
  endDate: string;
  icon: React.ReactNode;
  description: string;
};

const experiences: Experience[] = [
  {
    platform: "Freelancer.com",
    startDate: "September 23, 2021",
    endDate: "Present",
    icon: <SiFreelancer className="text-4xl text-sky-400" />,
    description:
      "As a dedicated freelance web developer, I have successfully collaborated with global clients, delivering high-quality, custom web applications using modern technologies like React, Next.js, and Tailwind CSS.",
  },
  {
    platform: "Fiverr.com",
    startDate: "November 2022",
    endDate: "Present",
    icon: <SiFiverr className="text-4xl text-green-400" />,
    description:
      "I offer expert web development services on Fiverr, specializing in building responsive, dynamic, and user-friendly web applications, helping clients achieve their business goals with robust solutions.",
  },
  {
    platform: "Upwork",
    startDate: "2025",
    endDate: "Present",
    icon: <SiUpwork className="text-4xl text-green-500" />,
    description:
      "As an Upwork freelancer, I leverage my expertise in front-end technologies and modern web frameworks to provide scalable, performance-driven solutions for clients across various industries.",
  },
];
const MyExperience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="h-full w-full"
    >
      <h2 className="text-2xl font-medium capitalize">
        My <span className="text-lightGreen">Experinece</span>
      </h2>
      <p className="text-sm leading-relaxed">
        With over three years of web development experience, I specialize in
        building responsive, high-performance applications using React.js,
        Next.js, TypeScript, and Tailwind CSS for clients across Freelancer,
        Fiverr, and Upwork.
      </p>
      <div className="mt-3 h-[300px] overflow-hidden overflow-y-auto scroll-smooth pb-8">
        {/* Card */}
        <div className="grid w-full grid-cols-1 place-items-center gap-5 px-4 lg:grid-cols-2 2xl:grid-cols-3">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-lightGray transform rounded-xl p-4 text-center shadow-md transition-all duration-500 hover:scale-[1.03]"
            >
              <div className="mb-3 flex justify-center">{exp.icon}</div>
              <h3 className="text-lightGreen mb-2 text-lg font-semibold">
                {exp.platform}
              </h3>
              <p className="text-sm text-gray-400">
                {exp.startDate} — {exp.endDate}
              </p>
              <p className="text-left text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MyExperience;
