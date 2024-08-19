"use client";
import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import interior from "../../public/images/interior-2.jpg";
import section from "../../public/images/section.jpg";
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
                src={interior}
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
            <p className="text-sm sm:text-base md:text-lg mb-6 text-[#545454]">
              Narasimha Interior Decorators is your go-to choice for top and
              Budget interior design services in Madipakkam & All over Chennai
              Established in 2016. Specializing in home and office
              transformations, we excel in crafting unique designs for bedrooms,
              kitchens, and more. Our commitment to affordability ensures
              quality without compromise. Experience the perfect blend of
              comfort and aesthetics with us.
              <br />
              <br />
              At Narasimha Interior Decorators, we take pride in transforming
              spaces into stunning living environments. As the top interior
              decorators in Madipakkam, Medavakkam, Nanganallur, Velachery,
              Keelkattalai, Pallikaranai, OMR, ECR, and Chennai, we bring your
              vision to life with creativity, precision, and expertise.
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
                  <p className="text-[#545454] text-sm sm:text-base md:text-lg">
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
                    Craft
                  </h3>
                  <p className="text-[#545454] text-sm sm:text-base md:text-lg">
                    Collaborate closely to achieve design excellence refining
                    your vision and crafting brilliance into every aspect of
                    your space.
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
                  <p className="text-[#545454] text-sm sm:text-base md:text-lg">
                    Witness your vision becoming a reality as we execute the
                    design plan with precision. Celebrate the joy of your newly
                    transformed space.
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
                src={section}
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