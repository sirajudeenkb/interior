"use client";

import React, { useState } from "react";
import Image from "next/image";
import interior from "../../public/images/interior-2.jpg";
import { useInView } from "react-intersection-observer";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button
        className="flex justify-between w-full px-4 py-4 text-left font-semibold text-black hover:bg-gray-100 focus:outline-none transition-colors duration-200"
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
        <div className="px-4 pt-4 pb-2 text-sm text-[#545454] animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  );
};

const Services: React.FC = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      className="px-6 md:px-12 lg:px-24 py-16 lg:py-24 overflow-x-hidden"
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
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
          <div
            className={`w-full lg:w-1/2 transition-opacity duration-[2500ms] ${
              contentInView ? "animate-slide-right opacity-100" : "opacity-0"
            }`}
            ref={contentRef}
          >
            <div className="relative w-full pb-[75%] rounded-lg overflow-hidden">
              <Image
                src={interior}
                alt="Interior Design Services"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          <div
            className={`w-full lg:w-1/2 flex flex-col justify-between gap-y-6 transition-opacity duration-[2500ms] ${
              contentInView ? "animate-slide-left opacity-100" : "opacity-0"
            }`}
            ref={contentRef}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1F1F1F] text-center lg:text-left">
              Designing Your Dream with Brilliance
            </h2>

            <p className="text-base md:text-lg text-[#545454]">
              At Narasimha Interior Decorators, we take pride in transforming
              spaces into stunning living environments. As the top interior
              decorators we bring your vision to life with creativity,
              precision, and expertise.
            </p>

            <div className="w-full space-y-2">
              <AccordionItem title="Living Room Interior">
                We specialize in creating warm and inviting living spaces that
                reflect your personal style and maximize comfort.
              </AccordionItem>
              <AccordionItem title="Commercial Office Room Interior">
                Our team designs functional and inspiring work environments that
                boost productivity and impress clients.
              </AccordionItem>
              <AccordionItem title="Professional Painting Services">
                We offer expert painting services to transform your space with a
                fresh, vibrant look using high-quality paints and techniques.
              </AccordionItem>
            </div>

            <button className="px-6 py-3 bg-[#1F1F1F] text-white rounded-md hover:bg-[#444444] transition-colors duration-200 text-base md:text-lg w-fit mx-auto lg:mx-0">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
