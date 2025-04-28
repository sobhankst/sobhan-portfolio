import React from "react";
import { motion } from "framer-motion";
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
    icon: <FaGraduationCap className="text-4xl text-sky-400" />,
  },
  {
    title: "Internship in Web Development",
    institute: "DUSRA Soft Ltd.",
    year: "Completed in 2016",
    icon: <FaLaptopCode className="text-4xl text-green-400" />,
  },
];
const MyEducation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="h-full w-full"
    >
      <h2 className="text-2xl font-medium capitalize">
        My <span className="text-lightGreen">Education</span>
      </h2>
      <p className="text-sm leading-relaxed">
        I completed a Diploma in Computer Engineering from Gurukul Institute of
        Technology in 2016, where I gained a solid foundation in software
        development, programming, and computer systems. During the same year, I
        completed an internship in Web Development at DUSRA Soft Ltd., where I
        acquired hands-on experience in building dynamic websites and web
        applications.
      </p>
      <div className="mt-3 h-[300px] overflow-hidden overflow-y-auto scroll-smooth pb-8">
        {/* Card */}
        <div className="grid w-full grid-cols-1 place-items-center gap-4 px-4 xl:grid-cols-2">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-lightGray w-90 transform rounded-xl p-6 text-center shadow-md transition-all duration-500 hover:scale-[1.03]"
            >
              <div className="mb-3 flex justify-center">{edu.icon}</div>
              <h3 className="text-lightGreen mb-2 text-lg font-semibold">
                {edu.title}
              </h3>
              <p className="text-sm text-gray-400">{edu.year}</p>
              <p className="text-center text-sm text-gray-300">
                {edu.institute}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MyEducation;
