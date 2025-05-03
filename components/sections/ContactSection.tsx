import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import ContactForm from "../ContactForm";
import { AnimatePresence, motion } from "framer-motion";
const ContactSection = () => {
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
      className="mt-30 w-full md:mt-40 lg:mt-36 2xl:mt-50"
    >
      <div className="container mx-auto px-5 lg:px-10">
        <div className="flex flex-col gap-8 pb-8 md:flex-row">
          {/* Left side address */}
          <div className="flex flex-2/5 flex-col gap-4">
            <h2 className="text-3xl font-medium md:text-4xl">
              Let&apos;s Work{" "}
              <span className="text-lightGreen font-medium">Together</span>
            </h2>
            <p className="text-base">
              I&apos;m a passionate Front-End Developer with expertise in{" "}
              <span className="text-lightGreen font-semibold">React</span>,{" "}
              <span className="text-lightGreen font-semibold">Next.js</span>,{" "}
              <span className="text-lightGreen font-semibold">TypeScript</span>,
              and{" "}
              <span className="text-lightGreen font-semibold">
                Tailwind CSS
              </span>
              . Whether you&apos;re building a modern website, web app, or need
              a polished UI, I&apos;m here to help turn your ideas into
              high-performing digital experiences. Let&apos;s connect and bring
              your vision to life!
            </p>
            {/* Phone number */}
            <div className="flex items-center space-x-3">
              <div className="bg-lightGray text-lightGreen rounded-md p-2">
                <BiPhone className="size-6" />
              </div>
              <div className="flex flex-col text-base">
                <span className="font-medium">Phone</span>
                <p>(+880) 1915 800 645</p>
              </div>
            </div>
            {/* Email address */}
            <div className="flex items-center space-x-3">
              <div className="bg-lightGray text-lightGreen rounded-md p-2">
                <BiEnvelope className="size-6" />
              </div>
              <div className="flex flex-col text-base">
                <span className="font-medium">Email</span>
                <p>sobhan.kst@gmail.com</p>
              </div>
            </div>
            {/* Address */}
            <div className="flex items-center space-x-3">
              <div className="bg-lightGray text-lightGreen rounded-md p-2">
                <BiMap className="size-6" />
              </div>
              <div className="flex flex-col text-base">
                <span className="font-medium">Address</span>
                <p>Bollovpur, Kushtia, Bangladesh</p>
              </div>
            </div>
          </div>
          {/* Right side contact form */}
          <div className="flex flex-3/5 justify-center">
            <ContactForm />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
