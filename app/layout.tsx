import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Abdus Sobhan | Front-End Developer Portfolio",
  description:
    "Hi, I'm Abdus Sobhan, a passionate Front-End Developer specializing in React.js, Next.js, TypeScript, and Tailwind CSS. Explore my portfolio and projects.",
  keywords: [
    "Abdus Sobhan",
    "Front-End Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Tailwind CSS Developer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Abdus Sobhan" }],
  openGraph: {
    title: "Abdus Sobhan | Front-End Developer Portfolio",
    description:
      "Explore the professional portfolio of Abdus Sobhan, showcasing expertise in React.js, Next.js, TypeScript, and Tailwind CSS.",
    url: "https://sobhan-dev.vercel.app",
    siteName: "Abdus Sobhan Portfolio",
    images: [
      {
        url: "https://github.com/sobhankst/sobhan-portfolio/blob/main/public/preview.png",
        width: 1200,
        height: 630,
        alt: "Abdus Sobhan Portfolio Preview",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://sobhan-dev.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-darkGray text-base text-white antialiased`}
      >
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}
