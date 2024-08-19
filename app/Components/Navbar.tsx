"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "../../public/assets/Logo.svg";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Our Projects", path: "/projects" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
          <span className="lg:block md:block hidden text-xl text-[#1F1F1F] font-semibold">
            Br Interior
          </span>
          <span className="lg:hidden md:hidden sm:block">Br Interior</span>
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
      {isMenuOpen && (
        <div className="lg:hidden md:hidden fixed top-[60px] left-0 w-full bg-white z-40 shadow-md">
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
      )}
    </>
  );
};

export default Navbar;