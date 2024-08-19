"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "../../public/assets/Logo.svg";
import Menu from "../../public/assets/Menu.svg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Our Projects", path: "/projects" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 flex w-full items-center justify-between px-[20px] py-[15px] bg-white lg:mx-auto lg:px-20 z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div>
        <span className="lg:block md:block hidden text-xl text-[#1F1F1F] font-semibold">
          Br Interior
        </span>
        <Image className="lg:hidden md:hidden sm:block" src={Logo} alt="Logo" />
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
      <Image className="lg:hidden md:hidden block" src={Menu} alt="Menu" />
    </nav>
  );
};

export default Navbar;
