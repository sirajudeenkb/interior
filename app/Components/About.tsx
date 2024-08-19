import React from "react";
import Image from "next/image";
import interior from "../../public/images/interior-2.jpg";

const About = () => {
  return (
    <div className="px-6 md:px-12 lg:px-24 lg:pt-24 pt-8 md:pt-16">
      <div className="flex items-center animate-slide-right">
        <div className="w-10 md:w-12 lg:w-16 lg:border-t-4 md:border-t-2 border-t border-[#1F1F1F] mr-5"></div>
        <h1 className="text-xl text-[#1F1F1F] lg:text-5xl md:text-3xl font-semibold ">
          About Us
        </h1>
      </div>
      <div className="container mx-auto py-8 md:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          {/* Left container for the image */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8 animate-slide-right">
            <div className="relative w-full pb-[75%]">
              {" "}
              {/* 4:3 aspect ratio */}
              <Image
                src={interior}
                alt="About Us"
                layout="fill"
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Right container for text content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-start animate-slide-left">
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
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
