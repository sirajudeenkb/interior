"use client"
import React from "react";
import HeaderComponent from "../Components/HeaderComponent";
import AboutImage from "../../public/images/About.jpg"; // Ensure the image path is correct
import about from "../../public/images/about-us.jpg";
import mission from "../../public/images/mission.jpg";
import vision from "../../public/images/vision.jpg";
import Image from "next/image";
import { useInView } from "react-intersection-observer";


const About: React.FC = () => {

   const { ref: aboutRef, inView: aboutInView } = useInView({
     triggerOnce: true,
     threshold: 0.2,
   });
   
  return (
    <div>
      <HeaderComponent
        imageSrc={AboutImage}
        title="About Us"
        description="Learn more about our mission and values."
      />
      {/* Rest of the About page content */}
      <div className=" p-8 md:p-12 lg:p-16 ">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-10">
            <div
              ref={aboutRef}
              className={`relative w-full pb-[75%] rounded-lg overflow-hidden transition-opacity duration-[2500ms] ${
                aboutInView ? "animate-slide-right opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={about}
                alt="About Us"
                layout="fill"
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          <div
            ref={aboutRef}
            className={`w-full lg:w-1/2 flex flex-col justify-between overflow-hidden transition-opacity duration-[2500ms] ${
              aboutInView ? "animate-slide-left opacity-100" : "opacity-0"
            }`}
          >
            <div className="text-center lg:text-left mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-2 text-left text-[#1F1F1F]">
                Br Interior Decorators
              </h2>
            </div>
            <p className="text-sm sm:text-base md:text-lg mb-6 text-[#545454]">
              Narasimha about Decorators is your go-to choice for top and Budget
              about design services in Madipakkam & All over Chennai Established
              in 2016. Specializing in home and office transformations, we excel
              in crafting unique designs for bedrooms, kitchens, and more. Our
              commitment to affordability ensures quality without compromise.
              Experience the perfect blend of comfort and aesthetics with us.
              <br />
              <br />
              At Narasimha about Decorators, we take pride in transforming
              spaces into stunning living environments. As the top about
              decorators in Madipakkam, Medavakkam, Nanganallur, Velachery,
              Keelkattalai, Pallikaranai, OMR, ECR, and Chennai, we bring your
              vision to life with creativity, precision, and expertise.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center gap-x-16 max-w-full pb-12">
        <div className="flex flex-col items-center lg:w-2/5 px-8 mb-12 lg:mb-0">
          <Image
            src={mission}
            width={450}
            height={450}
            alt="Our Mission"
            className="mb-7"
          />
          <h2 className="font-semibold text-3xl mb-4 text-[#1F1F1F]">
            Our Mission
          </h2>
          <p className="text-justify max-w-md text-[#545454]">
            Driven by a passion for creativity and customer satisfaction, our
            mission is to surpass expectations by delivering exceptional
            interior design services tailored to the unique needs and
            preferences of each client, ensuring their spaces reflect timeless
            elegance and functional brilliance.
          </p>
        </div>

        <div className="flex flex-col items-center lg:w-2/5 px-8">
          <Image
            src={vision}
            width={450}
            height={450}
            alt="Our Vision"
            className="mb-7"
          />
          <h2 className="font-semibold text-3xl mb-4 text-[#1F1F1F]">Our Vision</h2>
          <p className="text-justify max-w-md text-[#545454]">
            Our vision at Narasimha Interior Decorators is to become the premier
            destination for innovative and sustainable interior design solutions
            in Madipakkam, Chennai, and the surrounding areas, setting new
            standards of excellence in the industry. Narasimha – The Top
            Interior Decorators
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
