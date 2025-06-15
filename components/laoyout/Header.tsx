"use client";
import { NavItems } from "@/lib/constants";
import Link from "next/link";
import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
type HeaderProps = {
  activeSection: string | null;
  onSelect: (section: string) => void;
};
const Header = ({ activeSection, onSelect }: HeaderProps) => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <header className="bg-darkGray fixed top-0 left-0 z-10 flex w-full items-center py-8 text-white">
      <div className="container mx-auto px-5 lg:px-10">
        <div className="flex w-full items-center justify-between">
          {/* Logo */}
          <h1
            className="cursor-pointer text-4xl font-bold"
            onClick={() => onSelect("home")}
          >
            Sobhan
            <span className="text-lightGreen">.</span>
          </h1>

          {/* Navigation Desktop menu */}
          <nav className={`hidden items-center space-x-5 md:flex`}>
            {NavItems.map((item) => (
              <span
                key={item.id}
                onClick={() => onSelect(item.label)}
                className={`hover:text-lightGreen cursor-pointer text-xl font-medium capitalize transition-colors duration-300 ${
                  activeSection === item.label
                    ? "text-lightGreen"
                    : "text-white"
                }`}
              >
                {item.label}
              </span>
            ))}
          </nav>
          {/* Hamburg Button */}

          <button
            type="button"
            onClick={() => setIsMobile(!isMobile)}
            className="cursor-pointer text-4xl text-white md:hidden"
          >
            <BiMenu className="size-full" />
          </button>

          {/* Mobile Menu */}
          <nav
            className={`${isMobile ? "translate-x-0" : "-translate-x-full"} bg-darkGray absolute top-0 left-0 z-20 flex min-h-screen w-full flex-col items-center space-y-5 pt-15 shadow-2xl backdrop-blur-md transition-all duration-500 md:hidden`}
          >
            <BiX
              onClick={() => setIsMobile(!isMobile)}
              className="absolute top-2 right-4 cursor-pointer text-4xl text-white"
            />
            {NavItems.map((item) => (
              <span
                key={item.id}
                onClick={() => {
                  onSelect(item.label);
                  setIsMobile(!isMobile);
                }}
                className={`hover:text-lightGreen cursor-pointer text-xl font-medium capitalize transition-colors duration-300 ${
                  activeSection === item.label
                    ? "text-lightGreen"
                    : "text-white"
                }`}
              >
                {item.label}
              </span>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
