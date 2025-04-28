import { FaCode, FaMobileAlt, FaRocket } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFramer } from "react-icons/si";

// Nav links list
export const NavItems = [
  {
    id: 1,
    label: "home",
  },
  {
    id: 2,
    label: "services",
  },
  {
    id: 3,
    label: "resume",
  },
  {
    id: 4,
    label: "portfolio",
  },
  {
    id: 5,
    label: "contact",
  },
];

// Services List item
export const services = [
  {
    title: "Frontend Development",
    description:
      "Build modern UI using React, Next.js, Tailwind CSS & TypeScript.",
    icon: FaCode,
  },
  {
    title: "Next.js Full Stack",
    description:
      "Server components, App Router, SSR, and SEO with Next.js 15+.",
    icon: SiNextdotjs,
  },
  {
    title: "Responsive Design",
    description: "Mobile-first, responsive layouts that adapt to all devices.",
    icon: FaMobileAlt,
  },
  // {
  //   title: "UI/UX Design",
  //   description:
  //     "Design seamless, user-friendly interfaces that drive engagement.",
  //   icon: FaPaintBrush,
  // },
  {
    title: "Tailwind CSS Styling",
    description:
      "Rapid, consistent styling with Tailwind CSS and utility-first design.",
    icon: SiTailwindcss,
  },
  {
    title: "Framer Motion Animation",
    description:
      "Smooth animations and transitions for a delightful user experience.",
    icon: SiFramer,
  },
  {
    title: "Performance Tuning",
    description:
      "Optimize for speed, Lighthouse scores, and real-world metrics.",
    icon: FaRocket,
  },
];

// Image slides
type Project = {
  image: string;
  number: string;
  title: string;
  description: string;
  tech: string;
  live_link: string;
  github: string;
};

export const projects: Project[] = [
  {
    image: "/images/portfolio1.jpg",
    number: "01",
    title: "Front-End Project",
    description: "A landing page built with HTML, CSS, and vanilla JavaScript.",
    tech: "HTML5, CSS3, JavaScript",
    live_link: "http://localhost:3000/",
    github: "https://github.com",
  },
  {
    image: "/images/portfolio2.jpg",
    number: "02",
    title: "React Dashboard",
    description: "A modern dashboard made with React and Tailwind CSS.",
    tech: "React.js, Tailwind CSS",
    live_link: "http://localhost:3000/",
    github: "https://github.com",
  },
  {
    image: "/images/portfolio3.jpg",
    number: "03",
    title: "E-commerce App",
    description: "An e-commerce frontend with full responsive layout.",
    tech: "Next.js, TypeScript, Stripe",
    live_link: "http://localhost:3000/",
    github: "https://github.com",
  },
  {
    image: "/images/portfolio4.jpg",
    number: "04",
    title: "Front-End Project",
    description: "A landing page built with HTML, CSS, and vanilla JavaScript.",
    tech: "HTML5, CSS3, JavaScript",
    live_link: "http://localhost:3000/",
    github: "https://github.com",
  },
  {
    image: "/images/portfolio5.jpg",
    number: "05",
    title: "React Dashboard",
    description: "A modern dashboard made with React and Tailwind CSS.",
    tech: "React.js, Tailwind CSS",
    live_link: "http://localhost:3000/",
    github: "https://github.com",
  },
  {
    image: "/images/portfolio6.jpg",
    number: "06",
    title: "E-commerce App",
    description: "An e-commerce frontend with full responsive layout.",
    tech: "Next.js, TypeScript, Stripe",
    live_link: "http://localhost:3000/",
    github: "https://github.com",
  },
];
