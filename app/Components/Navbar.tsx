"use client";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

interface NavLink {
  name: string;
  path: string;
}

const navLinks: NavLink[] = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Our Projects", path: "/projects" },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        className={`sticky top-0 flex w-full items-center justify-between px-[20px] py-[15px] bg-white lg:mx-auto lg:px-20 z-50 transition-shadow duration-300 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div>
          <Link href="/">
            <span className="lg:block md:block hidden text-xl text-[#1F1F1F] font-semibold cursor-pointer">
              Br Interior
            </span>
            <span className="lg:hidden md:hidden sm:block text-[#1F1F1F] font-medium cursor-pointer">
              Br Interior
            </span>
          </Link>
        </div>

        <div className="hidden lg:flex md:flex gap-x-[50px]">
          {navLinks.map((item, index) => (
            <Link href={item.path} key={index} legacyBehavior>
              <a className="text-[#1F1F1F] font-medium">{item.name}</a>
            </Link>
          ))}
        </div>
        <Link href="/contact">
          <button className="bg-[#1F1F1F] text-white text-sm font-semibold py-3 px-6 rounded hover:bg-[#444444] hidden lg:block md:block">
            Contact Us
          </button>
        </Link>
        <button onClick={toggleMenu} className="lg:hidden md:hidden block">
          {isMenuOpen ? (
            <IoMdClose size={24} color="#1F1F1F" />
          ) : (
            <FiMenu size={24} color="#1F1F1F" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`lg:hidden md:hidden fixed left-0 w-full bg-white z-40 transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {navLinks.map((item, index) => (
          <Link href={item.path} key={index} legacyBehavior>
            <a
              className="block py-4 px-6 text-[#1F1F1F] font-medium hover:bg-gray-100 border-b border-gray-200"
              onClick={toggleMenu}
            >
              {item.name}
            </a>
          </Link>
        ))}
        <Link href="/contact">
          <button
            className="w-full bg-[#1F1F1F] text-white text-sm font-semibold py-4 px-6 hover:bg-[#444444]"
            onClick={toggleMenu}
          >
            Contact Us
          </button>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
