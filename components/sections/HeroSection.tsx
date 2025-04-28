import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { LuFacebook, LuGithub, LuLinkedin, LuYoutube } from "react-icons/lu";

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="mt-30 w-full text-white"
    >
      <div className="container mx-auto px-4">
        <div className="flex w-full flex-col items-center gap-5 pb-8 md:flex-row md:items-center md:justify-between">
          {/* Left Content */}
          <div className="order-2 flex flex-2/3 flex-col md:order-1">
            <h2 className="text-4xl font-bold md:text-6xl">Abdus Sobhan</h2>
            <h3 className="text-xl font-medium text-white">
              I&apos;m Front-End Developer
            </h3>
            <p className="mt-2 text-sm">
              I&apos;m passionate about creating modern, user-friendly web
              applications using technologies like React, Next.js, TypeScript,
              and Tailwind CSS. I strive for clean code and building projects
              that deliver a seamless user experience.
            </p>
            <div className="mt-5 flex flex-col items-center gap-5 sm:flex-row">
              {/* Download CV Button */}
              <Link
                href={"/Sobhan.pdf"}
                download={"/Sobhan.pdf"}
                className="bg-lightGreen border-lightGreen hover:text-lightGreen shadow-lightGreen md: order-2 inline-flex w-full max-w-xs cursor-pointer items-center justify-center rounded-full border-2 px-5 py-3 text-lg font-medium text-black shadow transition-all duration-500 hover:bg-transparent hover:shadow-none sm:order-1"
              >
                Download CV
              </Link>
              {/* Social Link */}
              <div className="order-1 flex items-center gap-3 sm:order-2">
                <Link
                  target="_blank"
                  href={"https://github.com/sobhankst"}
                  className="border-lightGreen text-lightGreen hover:bg-lightGreen aspect-square size-14 rounded-full border-2 bg-transparent p-3.5 shadow-2xl transition-all duration-500 hover:text-black"
                >
                  <LuGithub className="size-full" />
                </Link>
                <Link
                  target="_blank"
                  href={"https://www.linkedin.com/in/sobhan90/"}
                  className="border-lightGreen text-lightGreen hover:bg-lightGreen aspect-square size-14 rounded-full border-2 bg-transparent p-3.5 shadow-2xl transition-all duration-500 hover:text-black"
                >
                  <LuLinkedin className="size-full" />
                </Link>
                <Link
                  target="_blank"
                  href={"https://facebook.com.com/sobhan.kst"}
                  className="border-lightGreen text-lightGreen hover:bg-lightGreen aspect-square size-14 rounded-full border-2 bg-transparent p-3.5 shadow-2xl transition-all duration-500 hover:text-black"
                >
                  <LuFacebook className="size-full" />
                </Link>
                <Link
                  target="_blank"
                  href={"https://www.youtube.com"}
                  className="border-lightGreen text-lightGreen hover:bg-lightGreen aspect-square size-14 rounded-full border-2 bg-transparent p-3.5 shadow-2xl transition-all duration-500 hover:text-black"
                >
                  <LuYoutube className="size-full" />
                </Link>
              </div>
            </div>
          </div>
          {/* Right side content */}
          <div className="order-1 flex-1/3 md:order-2">
            {/* Hero Image */}
            <Image
              src={"/images/me.jpg"}
              width={500}
              height={500}
              alt="profile pic"
              className="border-lightGreen w-full max-w-sm rounded-full border-2 object-cover p-2.5"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
