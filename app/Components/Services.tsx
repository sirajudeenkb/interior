"use client"

import React from "react";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  return (
    <div
      className="px-6 md:px-12 lg:px-24 lg:pt-24 pt-8 md:pt-16 overflow-x-hidden"
      ref={ref}
    >
      <div
        className={`flex items-center ${inView ? "animate-slide-right" : ""}`}
      >
        <div className="w-10 md:w-12 lg:w-16 lg:border-t-4 md:border-t-2 border-t border-[#1F1F1F] mr-5"></div>
        <h1 className="text-xl text-[#1F1F1F] lg:text-5xl md:text-3xl font-semibold ">
          Services
        </h1>
      </div>
    </div>
  );
};

export default Services;
