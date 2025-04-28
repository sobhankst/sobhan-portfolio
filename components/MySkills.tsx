import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
} from "react-icons/fa";
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
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="h-full w-full"
    >
      <h2 className="text-2xl font-medium capitalize">
        My <span className="text-lightGreen">Skills</span>
      </h2>
      <p className="text-sm leading-relaxed">
        I specialize in developing scalable, responsive, and high-performance
        web applications using HTML, CSS, JavaScript, TypeScript, React.js,
        Next.js, Tailwind CSS, Prisma, and PostgreSQL, with a strong emphasis on
        clean code architecture and exceptional user experience
      </p>
      <div className="mt-3 h-[300px] overflow-y-scroll scroll-smooth pb-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-darkGray group flex flex-col items-center justify-center rounded-xl p-3 text-white shadow-md transition duration-300 hover:shadow-xl"
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
  );
};

export default MySkills;
