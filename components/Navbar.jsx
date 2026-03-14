"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";

const navLinks = [
  { name: "À propos", href: "#about" },
  { name: "Services", href: "#explore" },
  { name: "Tarifs", href: "#pricing" },
  { name: "Équipe", href: "#team" },
  { name: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`${styles.xPaddings} py-8 fixed w-full top-0 z-50 bg-primary-bg/80 backdrop-blur-md transition-all`}>
      <div
        className="absolute w-[50%] inset-0 gradient-01 opacity-50"
      />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 80, delay: 0.5 }}
        className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8`}
      >
        <a href="#" className="font-extrabold text-[24px] leading-[30px] text-primary-text uppercase">
          MALTOS DEV
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-[16px] text-secondary-text hover:text-primary-text transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="py-2 px-6 bg-accent-blue rounded-[32px] font-bold text-[14px] text-white hover:bg-opacity-80 transition-all duration-300"
          >
            Contact
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden flex flex-col gap-[5px] cursor-pointer z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`w-[24px] h-[2px] bg-primary-text transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`w-[24px] h-[2px] bg-primary-text transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`w-[24px] h-[2px] bg-primary-text transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </motion.div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-primary-bg border-t border-[#d1d5db] p-6 flex flex-col gap-4 z-50"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-medium text-[18px] text-secondary-text hover:text-primary-text transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="py-3 px-6 bg-accent-blue rounded-[32px] font-bold text-[16px] text-white text-center hover:bg-opacity-80 transition-all duration-300"
          >
            Contact
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
