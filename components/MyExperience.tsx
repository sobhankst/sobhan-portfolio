import React from "react";
import { AnimatePresence, motion } from "framer-motion";
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
    startDate: "2021",
    endDate: "Present",
    icon: <SiFreelancer className="text-6xl text-sky-400" />,
    description:
      "As a dedicated freelance web developer, I have successfully collaborated with global clients, delivering high-quality, custom web applications using modern technologies like React, Next.js, and Tailwind CSS.",
  },
  {
    platform: "Fiverr.com",
    startDate: "2022",
    endDate: "Present",
    icon: <SiFiverr className="text-6xl text-green-400" />,
    description:
      "I offer expert web development services on Fiverr, specializing in building responsive, dynamic, and user-friendly web applications, helping clients achieve their business goals with robust solutions.",
  },
  {
    platform: "Upwork",
    startDate: "2025",
    endDate: "Present",
    icon: <SiUpwork className="text-6xl text-green-500" />,
    description:
      "As an Upwork freelancer, I leverage my expertise in front-end technologies and modern web frameworks to provide scalable, performance-driven solutions for clients across various industries.",
  },
];
const MyExperience = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="h-full w-full"
      >
        <h2 className="text-4xl font-medium capitalize">
          My <span className="text-lightGreen">Experinece</span>
        </h2>
        <p className="mt-2 text-base leading-relaxed">
          With over three years of web development experience, I specialize in
          building responsive, high-performance applications using{" "}
          <span className="text-lightGreen font-semibold">React</span>,{" "}
          <span className="text-lightGreen font-semibold">Next.js</span>,{" "}
          <span className="text-lightGreen font-semibold">TypeScript</span>, and{" "}
          <span className="text-lightGreen font-semibold">Tailwind CSS</span>{" "}
          for clients across Freelancer, Fiverr, and Upwork.
        </p>
        <div className="mt-3 max-h-[calc(100vh-330px)] overflow-y-auto scroll-smooth pb-8">
          {/* Card */}
          <div className="grid w-full grid-cols-1 place-items-center gap-4 overflow-hidden md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-lightGray group h-full w-full transform rounded-xl p-4 text-center shadow-md transition-all duration-500"
              >
                <div className="mb-3 flex transform justify-center transition-transform duration-300 group-hover:scale-125">
                  {exp.icon}
                </div>
                <h3 className="text-lightGreen mb-2 text-xl font-semibold">
                  {exp.platform}
                </h3>
                <p className="text-base text-gray-400">
                  {exp.startDate} — {exp.endDate}
                </p>
                {/* <p className="text-left text-sm">{exp.description}</p> */}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MyExperience;
