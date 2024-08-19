"use client"
import Image from 'next/image';
import interior from '../../public/images/home_interior_hero.png'
import React, { useState, useEffect, SetStateAction, Dispatch } from 'react';
import Link from 'next/link';

const Hero = () => {

  const [projectCount, setProjectCount] = useState(1);
  const [customerCount, setCustomerCount] = useState(1);
  const [styleCount, setStyleCount] = useState(1);

  useEffect(() => {
    animateValue(setProjectCount, 75, 2000);
    animateValue(setCustomerCount, 100, 2000);
    animateValue(setStyleCount, 50, 2000);
  }, []);

  const animateValue = (
  setter: Dispatch<SetStateAction<number>>,
  end: number,
  duration: number
) => {
  let start = 1;
  let range = end - start;
  let current = start;
  let increment = end > start ? 1 : -1;
  let stepTime = Math.abs(Math.floor(duration / range));
  let timer = setInterval(() => {
    current += increment;
    setter(current);
    if (current === end) {
      clearInterval(timer);
    }
  }, stepTime);
};

  return (
    <div className="px-6 md:px-12 lg:px-24 lg:pt-24 pt-6 md:pt-12 flex flex-col-reverse md:flex-row overflow-hidden">
      <div className="flex-1 flex flex-col items-start space-y-6 md:space-y-8 lg:space-y-10 md:mr-8 mt-6 md:mt-0 animate-slide-right">
        <h1 className="font-medium text-2xl md:text-4xl lg:text-6xl text-[#1F1F1F]">
          Transform Your Space with Expert Interior Design
        </h1>
        <p className="text-[#545454] text-base md:text-lg lg:text-xl">
          Discover the perfect blend of timeless elegance and contemporary
          innovation at Br Interior. We craft luxurious, sophisticated living
          spaces that reflect your unique style. Let our designers turn your
          home into a stunning masterpiece you'll love for years to come.
        </p>
        <Link href="/contact">
          <button className="w-full md:w-auto bg-[#1F1F1F] text-white text-sm md:text-base font-medium py-3 md:py-4 px-8 md:px-12 rounded hover:bg-[#444444]">
            Start project
          </button>
        </Link>
        <div className="w-full">
          <div className="flex flex-wrap justify-between gap-5">
            <div className="flex-1 min-w-[120px]">
              <p className="text-3xl md:text-4xl font-bold text-[#1F1F1F]">
                {projectCount}+
              </p>
              <p className="text-lg md:text-xl font-medium">
                Projects Completed
              </p>
            </div>
            <div className="flex-1 min-w-[120px]">
              <p className="text-3xl md:text-4xl font-bold text-[#1F1F1F] ">
                {customerCount}+
              </p>
              <p className="text-lg md:text-xl font-medium">Happy Customers</p>
            </div>
            <div className="flex-1 min-w-[120px]">
              <p className="text-3xl md:text-4xl font-bold text-[#1F1F1F]">
                {styleCount}+
              </p>
              <p className="text-lg md:text-xl font-medium">Design Styles</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-shrink-0 w-full md:w-auto animate-slide-left">
        <Image
          className="w-full md:w-auto h-64 md:h-80 lg:h-96 object-cover"
          src={interior}
          alt="Interior Design"
        />
      </div>
    </div>
  );
}

export default Hero