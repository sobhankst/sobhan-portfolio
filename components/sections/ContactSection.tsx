import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import ContactForm from "../ContactForm";
import { motion } from "framer-motion";
const ContactSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="mt-30 h-full w-full"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-5 pb-8 md:flex-row">
          {/* Left side address */}
          <div className="flex flex-1/3 flex-col gap-4">
            <h2 className="text-2xl font-medium">Let&apos;s Work Together</h2>
            <p className="text-sm">
              I&apos;m a passionate Front-End Developer with expertise in React,
              Next.js, Tailwind CSS, and TypeScript. Whether you&apos;re
              building a modern website, web app, or need a polished UI,
              I&apos;m here to help turn your ideas into high-performing digital
              experiences. Let&apos;s connect and bring your vision to life!
            </p>
            {/* Phone number */}
            <div className="flex items-center space-x-3">
              <div className="bg-lightGray text-lightGreen rounded-md p-2">
                <BiPhone className="size-6" />
              </div>
              <div className="flex flex-col text-sm">
                <span className="font-medium">Phone</span>
                <p>(+880) 1915 800 645</p>
              </div>
            </div>
            {/* Email address */}
            <div className="flex items-center space-x-3">
              <div className="bg-lightGray text-lightGreen rounded-md p-2">
                <BiEnvelope className="size-6" />
              </div>
              <div className="flex flex-col text-sm">
                <span className="font-medium">Email</span>
                <p>sobhan.kst@gmail.com</p>
              </div>
            </div>
            {/* Address */}
            <div className="flex items-center space-x-3">
              <div className="bg-lightGray text-lightGreen rounded-md p-2">
                <BiMap className="size-6" />
              </div>
              <div className="flex flex-col text-sm">
                <span className="font-medium">Address</span>
                <p>Bollovpur, Kushtia, Bangladesh</p>
              </div>
            </div>
          </div>
          {/* Right side contact form */}
          <div className="flex flex-2/3 justify-center">
            <ContactForm />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
