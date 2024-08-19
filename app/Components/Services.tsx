"use client";
import React, { useState } from "react";
import Image from "next/image";
import interior from "../../public/images/services_provided.png";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button
        className="flex justify-between w-full px-4 py-5 text-left font-semibold text-black hover:bg-gray-100 focus:outline-none transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span
          className={`transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="px-4 pt-4 pb-2 text-sm text-[#545454] text-justify animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  );
};

const Services: React.FC = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      className="px-6 md:px-12 lg:px-24 pt-16 lg:pt-24 overflow-x-hidden"
      ref={sectionRef}
    >
      <div
        className={`flex items-center ${
          sectionInView ? "animate-slide-right" : "opacity-0"
        } transition-opacity duration-500`}
      >
        <div className="w-10 md:w-12 lg:w-16 border-t border-[#1F1F1F] mr-5"></div>
        <h1 className="text-xl md:text-3xl lg:text-5xl text-[#1F1F1F] font-semibold">
          Services
        </h1>
      </div>
      <div className="container mx-auto mt-8 md:mt-12 lg:mt-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-7 lg:gap-16">
          <div
            className={`w-full lg:w-1/2 transition-opacity duration-[2500ms] ${
              contentInView ? "animate-slide-right opacity-100" : "opacity-0"
            }`}
            ref={contentRef}
          >
            <div className="relative w-full rounded-lg overflow-hidden">
              <Image
                src={interior}
                alt="Interior Design Services"
                layout="responsive"
                width={200} // adjust this to the actual width of your image
                height={200} // adjust this to the actual height of your image
                objectFit="contain"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          <div
            className={`w-full lg:w-1/2 flex flex-col justify-between gap-y-[22px] transition-opacity duration-[2500ms] ${
              contentInView ? "animate-slide-left opacity-100" : "opacity-0"
            }`}
            ref={contentRef}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1F1F1F] text-center lg:text-left">
              Crafting Luxurious Spaces with Expert Interior Design
            </h2>

            <p className="text-base md:text-lg text-[#545454] py-2 text-justify">
              At Br Interior, we excel in transforming ordinary spaces into
              extraordinary living environments. We bring visions to life with
              unparalleled creativity and precision. From elegant homes, premium
              paintings to sleek offices and cutting-edge modular kitchens, we
              craft bespoke designs that blend luxury, functionality, and your
              unique style. Experience the Br Interior difference – where
              innovation meets timeless sophistication in every project.
            </p>

            <div className="w-full">
              <AccordionItem title="Home Interior">
                We specialize in creating warm and inviting living spaces that
                reflect your personal style and maximize comfort. Our expert
                designers transform houses into luxurious homes, tailoring every
                detail to your unique tastes and lifestyle.
              </AccordionItem>
              <AccordionItem title="Office Interior">
                We design sleek, functional office spaces that boost
                productivity and impress clients. From ergonomic layouts to
                stylish decor, we create professional environments that inspire
                success and reflect your brand's identity.
              </AccordionItem>
              <AccordionItem title="Modular Kitchen Services">
                Our cutting-edge modular kitchen designs blend form and function
                seamlessly. We craft efficient, beautiful kitchens with premium
                materials and smart storage solutions, making your culinary
                space a joy to work and entertain in.
              </AccordionItem>
              <AccordionItem title="Premium Painting Services">
                We elevate your interiors with expert painting services, using
                premium paints and innovative techniques. Our skilled team
                creates stunning color palettes and finishes that transform your
                space, enhancing its ambiance and value.
              </AccordionItem>
            </div>
            <Link href="/services">
              <button className="px-6 py-3 bg-[#1F1F1F] text-white rounded-md hover:bg-[#444444] transition-colors duration-200 text-base md:text-lg w-fit mx-auto lg:mx-0">
                Explore All
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
