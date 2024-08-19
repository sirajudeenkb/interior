"use client";
import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import recliner_design from "../../public/images/recliner_design_about.jpg";
import sofa_design from "../../public/images/sofa_design_about.jpg";
import Link from "next/link";

const About = () => {
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: stepsRef, inView: stepsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="px-6 md:px-12 lg:px-24 lg:pt-24 pt-8 md:pt-16">
      <div className="flex items-center animate-slide-right">
        <div className="w-10 md:w-12 lg:w-16 lg:border-t-4 md:border-t-2 border-t border-[#1F1F1F] mr-5"></div>
        <h1 className="text-xl text-[#1F1F1F] lg:text-5xl md:text-3xl font-semibold">
          About Us
        </h1>
      </div>
      <div className="container mx-auto py-8 md:py-12 lg:py-16 ">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-10">
            <div
              ref={aboutRef}
              className={`relative w-full pb-[75%] rounded-lg overflow-hidden transition-opacity duration-[2500ms] ${
                aboutInView ? "animate-slide-right opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={recliner_design}
                alt="About Us"
                layout="fill"
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          <div
            ref={aboutRef}
            className={`w-full lg:w-1/2 flex flex-col justify-start overflow-hidden transition-opacity duration-[2500ms] ${
              aboutInView ? "animate-slide-left opacity-100" : "opacity-0"
            }`}
          >
            <div className="text-center lg:text-left mb-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-left text-[#1F1F1F]">
                Welcome to
              </h3>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-2 text-left text-[#1F1F1F]">
                Br Interior Decorators
              </h2>
            </div>
            <p className="text-sm sm:text-base md:text-lg mb-6 text-[#545454] text-justify">
              Br Interior is your premier choice for luxurious and
              budget-friendly interior design services across Chennai.
              Established in 2010. Our expertise spans elegant bedroom designs,
              state-of-the-art modular kitchens, and stunning office layouts.
              We're committed to delivering exceptional quality without
              compromising affordability, ensuring each project perfectly
              balances comfort and aesthetics.
              <br />
              <br />
              At Br Interior, we take pride in creating breathtaking living and
              working environments. As leading interior designers in Chennai, we
              serve areas including Perambur, Triplicane, Parrys, and beyond.
              Our skilled team brings your vision to life with creativity,
              precision, and unmatched expertise. We offer a full range of
              interior solutions to elevate your space.
            </p>
            <button className="px-6 py-3 bg-[#1F1F1F] text-white rounded hover:bg-[#444444] text-sm sm:text-base md:text-lg w-fit mx-auto lg:mx-0">
              <Link href="/about">Know More</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="container mx-auto pt-4 md:pt-12 lg:pt-16 ">
        <div className="flex flex-col lg:flex-row items-stretch">
          <div
            ref={stepsRef}
            className={`w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8 flex flex-col justify-between transition-opacity duration-[2500ms] ${
              stepsInView ? "animate-slide-right opacity-100" : "opacity-0"
            }`}
          >
            <div className="space-y-10">
              <h2 className="text-3xl lg:text-5xl md:text-4xl font-semibold mb-8 text-[#1F1F1F]">
                Designing Your Dream in Three Simple Steps
              </h2>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src="/assets/Step1.svg"
                    alt="Start Project Icon"
                    className="w-12 h-12"
                  />
                </div>
                <div className="flex flex-col gap-y-4">
                  <h3 className="text-xl font-semibold text-[#1F1F1F]">
                    Start Project
                  </h3>
                  <p className="text-[#545454] text-sm sm:text-base md:text-lg text-justify">
                    Embark on your design adventure by initiating your project.
                    Share your vision and set the stage for a bespoke design
                    experience.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src="/assets/Step2.svg"
                    alt="Craft Icon"
                    className="w-12 h-12"
                  />
                </div>
                <div className="flex flex-col gap-y-4">
                  <h3 className="text-xl font-semibold text-[#1F1F1F]">
                    Collaborate
                  </h3>
                  <p className="text-[#545454] text-sm sm:text-base md:text-lg text-justify">
                    Collaborate with our skilled team to refine and perfect your
                    design. We ensure every detail reflects your style and meets
                    functional needs.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src="/assets/Step3.svg"
                    alt="Execute Icon"
                    className="w-12 h-12"
                  />
                </div>
                <div className="flex flex-col gap-y-4">
                  <h3 className="text-xl font-semibold text-[#1F1F1F]">
                    Execute
                  </h3>
                  <p className="text-[#545454] text-sm sm:text-base md:text-lg text-justify">
                    Watch your vision come to life. Experience the thrill of
                    stepping into your newly transformed, luxurious living
                    space.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-start">
            <div
              ref={stepsRef}
              className={`relative w-full pb-[75%] rounded-lg overflow-hidden transition-opacity duration-[2500ms] ${
                stepsInView ? "animate-slide-left opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={sofa_design}
                alt="About Us"
                layout="fill"
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
