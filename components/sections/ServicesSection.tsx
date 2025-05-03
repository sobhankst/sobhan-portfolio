import React from "react";
import ServiceCard from "../ServiceCard";
import { AnimatePresence, motion } from "framer-motion";
import { services } from "@/lib/constants";

const ServicesSection = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.section
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: 0.2,
        }}
        className="mt-30 w-full text-white md:mt-40 lg:mt-28 xl:mt-32 2xl:mt-50"
      >
        <div className="container mx-auto px-5 lg:px-10">
          <h2 className="text-center text-4xl font-bold">
            My <span className="text-lightGreen">Services</span>
          </h2>
          <div className="grid w-full grid-cols-1 gap-4 overflow-y-auto py-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
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
    </AnimatePresence>
  );
};

export default ServicesSection;
