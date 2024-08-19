"use client";
import React from "react";
import Image from "next/image";
import HeaderComponent from "../Components/HeaderComponent";
import MiniCard from "../Components/MiniCard";
import ServicesImage from "../../public/images/Services.jpg";
import interior from "../../public/images/interior-2.jpg";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const Services: React.FC = () => {
  const { ref: section_oneRef, inView: section_oneInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: section_twoRef, inView: section_twoInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: section_threeRef, inView: section_threeInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: section_fourRef, inView: section_fourInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div>
      <HeaderComponent
        imageSrc={ServicesImage}
        title="Our Services"
        description="Discover the range of services we offer to meet your needs."
      />
      {/* Rest of the Services page content */}

      {/* 1st section */}
      <div className="container mx-auto px-8 md:px-12 lg:px-16 pt-8 md:pt-12 lg:pt-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Left flex box with contents */}
          <div
            ref={section_oneRef}
            className={`w-full lg:w-1/2 flex flex-col justify-start overflow-hidden transition-opacity duration-[2500ms] ${
              section_oneInView
                ? "animate-slide-right opacity-100"
                : "opacity-0"
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
              Narasimha Interior Decorators is your go-to choice for top and
              Budget interior design services in Madipakkam & All over Chennai
              Established in 2016. Specializing in home and office
              transformations, we excel in crafting unique designs for bedrooms,
              kitchens, and more. Our commitment to affordability ensures
              quality without compromise. Experience the perfect blend of
              comfort and aesthetics with us.
              <br />
              <br />
            </p>

            <div className="flex justify-center lg:justify-start">
              <div className="flex space-x-4">
                <div className="flex flex-col items-center">
                  <Image
                    src={interior}
                    alt="Home Interior"
                    width={125}
                    height={100}
                    className="rounded-lg"
                  />
                  <p className="text-center mt-2 text-sm sm:text-base md:text-lg text-[#1F1F1F]">
                    Home Interior
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    src={interior}
                    alt="Office Interior"
                    width={125}
                    height={100}
                    className="rounded-lg"
                  />
                  <p className="text-center mt-2 text-sm sm:text-base md:text-lg text-[#1F1F1F]">
                   Office Interior
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    src={interior}
                    alt="Modular Kitchen"
                    width={125}
                    height={100}
                    className="rounded-lg"
                  />
                  <p className="text-center mt-2 text-sm sm:text-base md:text-lg text-[#1F1F1F]">
                    Modular Kitchen
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right flex box with image */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-10">
            <div
              ref={section_oneRef}
              className={`relative w-full pb-[75%] rounded-lg overflow-hidden transition-opacity duration-[2500ms] ${
                section_oneInView
                  ? "animate-slide-left opacity-100"
                  : "opacity-0"
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
        </div>
      </div>

      {/* 2nd section */}
      <div className="px-8 md:px-12 lg:px-16 pt-8 md:pt-12 lg:pt-16  flex flex-col items-center gap-y-5">
        <div ref={section_twoRef}>
          {/* Headers */}
          <div
            className={`transition-opacity duration-[3500ms] mb-5 ${
              section_twoInView ? "opacity-100" : "opacity-0"
            }`}
          >
            <h3 className="text-[#545454] font-medium text-base md:text-lg lg:text-xl text-center">
              Discover Our Services
            </h3>
            <h2 className="text-[#1F1F1F] font-semibold text-2xl md:text-3xl lg:text-4xl text-center">
              Personalized Designs - Elegant Spaces.
            </h2>
          </div>
        </div>
        {/* Cards  */}
        <div ref={section_twoRef}>
          <div
            className={`flex flex-wrap justify-center mt-2 ${
              section_twoInView ? "animate-slide-up" : "opacity-0"
            } transition-opacity duration-500 `}
          >
            <MiniCard
              imageUrl="/images/contact.jpg"
              title="TV Unit"
              description="Elevate your living room with Narasimha Interior Decorators' sleek TV units. Designed for both style and functionality, our modern units enhance your entertainment space effortlessly. Discover our range today and transform your home entertainment experience."
            />
            <MiniCard
              imageUrl="/images/contact.jpg"
              title="Loft Designer"
              description="Elevate your living room with Narasimha Interior Decorators' sleek TV units. Designed for both style and functionality, our modern units enhance your entertainment space effortlessly. Discover our range today and transform your home entertainment experience."
            />
            <MiniCard
              imageUrl="/images/contact.jpg"
              title="Wardrobe"
              description="Elevate your living room with Narasimha Interior Decorators' sleek TV units. Designed for both style and functionality, our modern units enhance your entertainment space effortlessly. Discover our range today and transform your home entertainment experience."
            />
            <MiniCard
              imageUrl="/images/contact.jpg"
              title="False Ceiling"
              description="Elevate your living room with Narasimha Interior Decorators' sleek TV units. Designed for both style and functionality, our modern units enhance your entertainment space effortlessly. Discover our range today and transform your home entertainment experience."
            />
          </div>
        </div>
        {/* Button */}
        <button
          className={`bg-[#1F1F1F] text-white text-sm font-semibold py-3 px-6 rounded hover:bg-[#444444] mt-4 ${
            section_twoInView ? "animate-slide-up" : "opacity-0"
          } transition-opacity duration-500`}
        >
          <Link href="/contact">Contact Us</Link>
        </button>
      </div>

      {/* 3rd section */}
      <div className="container mx-auto px-8 md:px-12 lg:px-16 pt-8 md:pt-12 lg:pt-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          {/* Left flex box with image */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-10">
            <div
              ref={section_threeRef}
              className={`relative w-full pb-[75%] rounded-lg overflow-hidden transition-opacity duration-[2500ms] ${
                section_threeInView
                  ? "animate-slide-right opacity-100"
                  : "opacity-0"
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

          {/* Right flex box with contents */}
          <div
            ref={section_threeRef}
            className={`w-full lg:w-1/2 flex flex-col justify-start overflow-hidden transition-opacity duration-[2500ms] ${
              section_threeInView
                ? "animate-slide-left opacity-100"
                : "opacity-0"
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

      {/* 4th section */}
      <div className="container mx-auto p-8 md:p-12 lg:p-16 ">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Left flex box with contents */}
          <div
            ref={section_fourRef}
            className={`w-full lg:w-1/2 flex flex-col justify-start overflow-hidden transition-opacity duration-[2500ms] ${
              section_fourInView
                ? "animate-slide-right opacity-100"
                : "opacity-0"
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

          {/* Right flex box with image */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-10">
            <div
              ref={section_fourRef}
              className={`relative w-full pb-[75%] rounded-lg overflow-hidden transition-opacity duration-[2500ms] ${
                section_fourInView
                  ? "animate-slide-left opacity-100"
                  : "opacity-0"
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
        </div>
      </div>
    </div>
  );
};

export default Services;
