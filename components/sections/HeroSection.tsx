import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LuFacebook, LuGithub, LuLinkedin, LuYoutube } from "react-icons/lu";

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: 0.2,
      }}
      className="mt-30 w-full text-white md:mt-40 lg:mt-36 xl:mt-40 2xl:mt-50"
    >
      <div className="container mx-auto px-5 lg:px-10">
        <div className="flex w-full flex-col items-center gap-4 pb-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Left Content */}
          <div className="order-2 flex w-full flex-col items-center lg:order-1 lg:basis-1/2 lg:items-start">
            <div className="">
              <h2 className="text-4xl font-bold md:text-6xl">Abdus Sobhan</h2>
              <h3 className="mt-1 text-xl font-medium text-white/75 italic md:text-2xl">
                I&apos;m Front-End Developer
              </h3>
            </div>
            <p className="mt-2 text-center text-base md:text-left md:text-lg">
              I&apos;m passionate about creating modern, user-friendly web
              applications using technologies like{" "}
              <span className="text-lightGreen font-medium">React</span>, {""}
              <span className="text-lightGreen font-medium">Next.js</span>,{" "}
              <span className="text-lightGreen font-medium">TypeScript</span>,
              and{" "}
              <span className="text-lightGreen font-medium">Tailwind CSS</span>{" "}
              . I strive for clean code and building projects that deliver a
              seamless user experience. I also enjoy collaborating with teams to
              bring innovative ideas to life.
            </p>
            <div className="mt-5 flex flex-col items-center gap-5 sm:flex-row">
              {/* Download CV Button */}
              <Link
                href={"/Sobhan.pdf"}
                download={"/Sobhan.pdf"}
                className="bg-lightGreen border-lightGreen hover:text-lightGreen shadow-lightGreen md: order-2 inline-flex w-full cursor-pointer items-center justify-center rounded-full border-2 px-5 py-3 text-lg font-medium text-black shadow transition-all duration-500 hover:bg-transparent hover:shadow-none sm:order-1 md:w-sm"
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
          <div className="order-1 flex justify-center overflow-hidden lg:order-2 lg:basis-1/2 lg:justify-end">
            <div className="relative size-40 sm:size-52 md:size-60 lg:size-64 xl:size-96 2xl:size-112">
              <div className="border-lightGreen absolute inset-0 animate-spin rounded-full border-4 border-r-transparent border-l-transparent"></div>
              {/* Hero Image */}
              <Image
                src={"/images/profile.jpg"}
                width={500}
                height={500}
                alt="profile pic"
                className="mask-b-from-darkGray absolute top-1/2 left-1/2 size-full -translate-x-1/2 -translate-y-1/2 rounded-full mask-b-from-50% mask-b-to-90% object-cover p-2"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
