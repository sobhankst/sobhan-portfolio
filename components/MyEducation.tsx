import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";
type Education = {
  title: string;
  institute: string;
  year: string;
  icon: React.ReactNode;
};

const education: Education[] = [
  {
    title: "Diploma in Computer Engineering",
    institute: "Gurukul Institute of Technology, Kushtia",
    year: "Completed in 2016",
    icon: <FaGraduationCap className="text-6xl text-sky-400" />,
  },
  {
    title: "Internship in Web Development",
    institute: "DUSRA Soft Ltd.",
    year: "Completed in 2016",
    icon: <FaLaptopCode className="text-6xl text-green-400" />,
  },
];
const MyEducation = () => {
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
          My <span className="text-lightGreen">Education</span>
        </h2>
        <p className="mt-1 text-base leading-relaxed">
          I completed a Diploma in Computer Engineering from Gurukul Institute
          of Technology in 2016, where I gained a solid foundation in software
          development, programming, and computer systems. During the same year,
          I completed an internship in Web Development at DUSRA Soft Ltd.
        </p>
        <div className="mt-3 max-h-[calc(100vh-300px)] overflow-y-auto scroll-smooth pb-6">
          {/* Card */}
          <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-2">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-lightGray group h-full w-full overflow-hidden rounded-xl px-4 py-6 text-center shadow-md"
              >
                <div className="mb-3 flex transform justify-center transition-transform duration-500 group-hover:scale-115">
                  {edu.icon}
                </div>
                <h3 className="text-lightGreen mb-2 text-xl font-semibold">
                  {edu.title}
                </h3>
                <p className="text-base font-medium text-gray-400">
                  {edu.year}
                </p>
                <p className="text-center text-lg text-gray-300">
                  {edu.institute}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MyEducation;
