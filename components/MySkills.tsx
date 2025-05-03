import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
} from "react-icons/si";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 className="text-orange-500" />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-400" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600" />,
  },
  {
    name: "React.js",
    icon: <FaReact className="text-cyan-400" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-white" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-400" />,
  },
  {
    name: "Prisma",
    icon: <SiPrisma className="text-white" />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-400" />,
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-white" />,
  },
];
const MySkills = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="h-full w-full"
      >
        <h2 className="text-2xl font-medium capitalize xl:text-4xl">
          My <span className="text-lightGreen">Skills</span>
        </h2>
        <p className="text-base leading-relaxed xl:text-lg">
          I specialize in developing scalable, responsive, and high-performance
          web applications using <span className="text-lightGreen">HTML</span>,{" "}
          <span className="text-lightGreen">CSS</span>,{" "}
          <span className="text-lightGreen">JavaScript</span>,{" "}
          <span className="text-lightGreen">TypeScript</span>,{" "}
          <span className="text-lightGreen">React.js</span>,{""}
          <span className="text-lightGreen">Next.js</span>,{" "}
          <span className="text-lightGreen">Tailwind CSS</span>,{" "}
          <span className="text-lightGreen">Prisma</span>, and{" "}
          <span className="text-lightGreen">PostgreSQL</span>, with a strong
          emphasis on clean code architecture and exceptional user experience
        </p>
        <div className="mt-3 max-h-[calc(100vh-330px)] overflow-y-auto scroll-smooth pb-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group bg-lightGray flex flex-col items-center justify-center rounded-xl p-3 text-white shadow-md transition duration-300 hover:shadow-xl"
              >
                <div className="mb-3 text-4xl transition-transform group-hover:scale-110">
                  {skill.icon}
                </div>
                <h3 className="text-lightGreen text-lg font-semibold">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MySkills;
