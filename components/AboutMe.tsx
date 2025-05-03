import React from "react";
import { AnimatePresence, motion } from "framer-motion";
const AboutMe = () => {
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
          About <span className="text-lightGreen">Me</span>
        </h2>
        <p className="mt-2 text-base leading-relaxed">
          Hi, I&apos;m{" "}
          <span className="text-lightGreen font-semibold">Sobhan</span> — a
          passionate
          <span className="text-lightGreen font-semibold">
            {" "}
            Front-End Web Developer{" "}
          </span>
          who transforms ideas into beautiful, interactive, and high-performing
          web applications.
        </p>
        <div className="mt-3 max-h-[calc(100vh-260px)] overflow-y-auto scroll-smooth pb-8">
          <div className="space-y-6">
            <p className="text-base leading-relaxed">
              With a strong foundation in{" "}
              <span className="text-lightGreen font-semibold">React</span>,{" "}
              <span className="text-lightGreen font-semibold">Next.js</span>,{" "}
              <span className="text-lightGreen font-semibold">TypeScript</span>,
              and{" "}
              <span className="text-lightGreen font-semibold">
                Tailwind CSS
              </span>
              , I focus on building fast, scalable, and accessible user
              interfaces. I love turning complex problems into elegant, reusable
              code—while keeping the user experience at the heart of everything
              I do.
            </p>

            <div>
              <h3 className="text-lightGreen mb-2 text-xl font-semibold">
                🛠️ Tech Stack
              </h3>
              <ul className="list-inside list-disc space-y-1 text-sm md:text-base">
                <li>Languages: HTML, CSS, JavaScript (ES6+), TypeScript</li>
                <li>Frameworks: React.js, Next.js</li>
                <li>Styling: Tailwind CSS, Framer Motion, shadcn/ui</li>
                <li>
                  Tools: Prisma ORM, PostgreSQL, Supabase, Zod, Resend API
                </li>
                <li>
                  Skills: Server Actions, Auth Systems, Form Validation, SEO,
                  API Integration
                </li>
              </ul>
            </div>

            <p className="text-base leading-relaxed">
              I&apos;m a continuous learner who&apos;s always exploring the
              latest in front-end tech. Whether it&apos;s mastering{" "}
              <span className="font-semibold">Next.js App Router</span>,
              creating real-world UI components, or integrating APIs — I enjoy
              building apps that are both functional and delightful.
            </p>

            <p className="text-base leading-relaxed">
              My goal is to help{" "}
              <span className="text-lightGreen font-semibold">
                clients and startups
              </span>{" "}
              build modern, user-centric websites with real-world performance
              and clean code architecture.
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AboutMe;
