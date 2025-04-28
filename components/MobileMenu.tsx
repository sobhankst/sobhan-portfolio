"use client";
import React from "react";
import { BiX } from "react-icons/bi";
type NavItem = {
  id: number;
  label: string;
};
interface MenuProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  navItems: NavItem[];
  activeSection: string | null;
  onSelect: (section: string) => void;
}
const MobileMenu = ({
  isOpen,
  setIsOpen,
  navItems,
  activeSection,
  onSelect,
}: MenuProps) => {
  return (
    <nav
      className={`${isOpen ? "translate-x-0" : "-translate-x-full"} bg-darkGray absolute top-0 left-0 z-20 flex min-h-screen w-full flex-col items-center space-y-5 pt-15 shadow-2xl backdrop-blur-md transition-all duration-500 lg:hidden`}
    >
      <BiX
        onClick={() => setIsOpen(false)}
        className="absolute top-2 right-4 cursor-pointer text-4xl text-white"
      />
      {navItems.map((item) => (
        <span
          key={item.id}
          onClick={() => {
            onSelect(item.label);
            setIsOpen(false);
          }}
          className={`hover:text-lightGreen cursor-pointer text-xl font-medium capitalize transition-colors duration-300 ${
            activeSection === item.label ? "text-lightGreen" : "text-white"
          }`}
        >
          {item.label}
        </span>
      ))}
    </nav>
  );
};

export default MobileMenu;
