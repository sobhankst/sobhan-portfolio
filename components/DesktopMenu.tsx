"use client";
import React from "react";
type NavItem = {
  id: number;
  label: string;
};
interface MenuProps {
  activeSection: string | null;
  onSelect: (section: string) => void;
  navItems: NavItem[];
}
const DesktopMenu = ({ activeSection, onSelect, navItems }: MenuProps) => {
  return (
    <nav className={`hidden items-center space-x-5 lg:flex`}>
      {navItems.map((item) => (
        <span
          key={item.id}
          onClick={() => onSelect(item.label)}
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

export default DesktopMenu;
