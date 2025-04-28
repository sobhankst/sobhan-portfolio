import React from "react";
import ServiceCard from "../ServiceCard";
import { motion } from "framer-motion";
import { services } from "@/lib/constants";

const ServicesSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="mt-30 w-full text-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="pb-8 text-center text-xl font-semibold md:text-3xl">
          My <span className="text-lightGreen">Services</span>
        </h2>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Service Card */}

          {services.map((service, i) => (
            <ServiceCard
              key={i}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
