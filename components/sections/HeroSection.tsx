import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { socialLinks } from "@/lib/constants";

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
      className="mt-30 h-full w-full text-white md:mt-40 md:h-[calc(100vh-160px)] lg:mt-36 lg:h-[calc(100vh-144px)] xl:mt-40 xl:h-[calc(100vh-160px)] 2xl:mt-50 2xl:h-[calc(100vh-200px)]"
    >
      <div className="container mx-auto h-full px-5 lg:px-10">
        <div className="flex h-full w-full flex-col items-center gap-4 pb-8 lg:flex-row lg:items-center lg:justify-between lg:pb-0">
          {/* Left Content */}
          <div className="order-2 flex flex-col items-center lg:order-1 lg:basis-1/2 lg:items-start">
            <div className="w-full">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl font-bold md:text-6xl">Abdus Sobhan</h2>
                <h3 className="mt-1 text-xl font-medium text-white/75 italic md:text-2xl">
                  I&apos;m Front-End Developer
                </h3>
              </div>
              <p className="mt-2 text-center text-base md:text-left md:text-lg">
                I&apos;m passionate about creating modern, user-friendly web
                applications using technologies like{" "}
                <span className="text-lightGreen font-medium">React</span>, {""}
                <span className="text-lightGreen font-medium">
                  Next.js
                </span>,{" "}
                <span className="text-lightGreen font-medium">TypeScript</span>,
                and{" "}
                <span className="text-lightGreen font-medium">
                  Tailwind CSS
                </span>{" "}
                . I strive for clean code and building projects that deliver a
                seamless user experience. I also enjoy collaborating with teams
                to bring innovative ideas to life.
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
                  {socialLinks.map((link) => (
                    <Link
                      key={link.id}
                      target="_blank"
                      href={link.link}
                      className="border-lightGreen text-lightGreen hover:bg-lightGreen aspect-square size-14 rounded-full border-2 bg-transparent p-3.5 shadow-2xl transition-all duration-500 hover:text-black"
                    >
                      {link.icon ? <link.icon className="size-full" /> : null}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Right side content */}
          <div className="order-1 h-full w-full lg:order-2 lg:basis-1/2">
            <div className="relative h-40 w-full md:h-full">
              {/* Hero Image */}
              <Image
                src={"/images/developer.png"}
                fill
                alt="profile pic"
                className="mask-b-from-darkGray mask-l-from-darkGray mask-b-from-60% mask-b-to-100% mask-l-from-60% mask-l-to-100% object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
