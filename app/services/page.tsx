"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import MiniCard from "../Components/MiniCard";
import HeaderComponent from "../Components/HeaderComponent";
import ServicesImage from "../../public/images/Services.jpg";
import home_office_service from "../../public/images/home_offfice.png";
import home_interior from "../../public/images/home_interior.png";
import office_interior from "../../public/images/Office_interior.png";
import modular_kitchen from "../../public/images/modular_kitchen.png";
import modular_kitchen_services from "../../public/images/modular_kitchen_services.png";
import painting_services from "../../public/images/painting.png";
import painting from "../../public/images/painting_services.png";



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
      <div className="relative p-6 md:p-12 lg:p-24">
        <div className="absolute inset-0 z-0 opacity-10">
          <svg
            id="visual"
            viewBox="0 0 1577 620"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <rect x="0" y="0" width="1577" height="620" fill="#ffffff"></rect>
            <g transform="translate(10.620645511858868 -100.73077222131315)">
              <path
                d="M359 -453.4C468.7 -335.9 563.3 -225.9 654.9 -62.7C746.6 100.5 835.3 317 795.3 527.6C755.2 738.1 586.4 942.7 405.9 926.7C225.4 910.6 33.2 673.8 -215.4 585.9C-464 498 -768.9 559 -818.7 472.7C-868.6 386.4 -663.3 152.8 -567.8 -50.1C-472.4 -253 -486.9 -425.3 -410.6 -548.6C-334.2 -672 -167.1 -746.5 -21.2 -721.2C124.7 -695.9 249.4 -570.9 359 -453.4"
                fill="#ffa48f"
              ></path>
            </g>
          </svg>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-8">
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
              comfort and aesthetics with us. Our commitment to affordability
              ensures quality without compromise. Experience the perfect blend
              of comfort and aesthetics with us.
              <br />
              <br />
            </p>

            <div className="flex justify-center lg:justify-start">
              <div className="flex space-x-4">
                <div className="flex flex-col items-center">
                  <Image
                    src={home_interior}
                    alt="home_interior"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                  <p className="text-center mt-2 text-sm sm:text-base md:text-lg text-[#1F1F1F]">
                    Home Interior
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    src={office_interior}
                    alt="office_interior"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                  <p className="text-center mt-2 text-sm sm:text-base md:text-lg text-[#1F1F1F]">
                    Office Interior
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    src={modular_kitchen}
                    alt="modular_kitchen"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                  <p className="text-center mt-2 text-sm sm:text-base md:text-lg text-[#1F1F1F]">
                    Modular Kitchen
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    src={painting}
                    alt="painting_services"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                  <p className="text-center mt-2 text-sm sm:text-base md:text-lg text-[#1F1F1F]">
                    Painting Services
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right flex box with image */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pl-10">
            <div
              ref={section_oneRef}
              className={`relative w-full rounded-lg overflow-hidden transition-opacity duration-[2500ms] ${
                section_oneInView
                  ? "animate-slide-left opacity-100"
                  : "opacity-0"
              }`}
            >
              <Image
                src={home_office_service}
                alt="home_office_service"
                layout="fit"
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2nd section */}
      <div className=" relative p-6 md:p-12 lg:p-16 flex flex-col items-center gap-y-5">
        <div className="absolute inset-0 z-0 opacity-10">
          <svg
            id="visual"
            viewBox="0 0 1577 620"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <rect x="0" y="0" width="1577" height="620" fill="#ffffff"></rect>
            <g transform="translate(1572.1682739191738 484.46670565966974)">
              <path
                d="M380.4 -441.8C511.7 -343.2 649.8 -241 692.1 -106.4C734.5 28.2 681.2 195.4 602.4 362.8C523.6 530.2 419.3 697.8 248.4 819.5C77.5 941.1 -160.1 1016.7 -308.3 927.8C-456.5 838.8 -515.3 585.1 -575.6 380.8C-635.9 176.4 -697.6 21.2 -697.4 -147.9C-697.3 -317 -635.3 -500.2 -508.8 -599.7C-382.2 -699.2 -191.1 -715.1 -33.3 -675.4C124.5 -635.8 249.1 -540.5 380.4 -441.8"
                fill="#ffa48f"
              ></path>
            </g>
          </svg>
        </div>

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
            } transition-opacity duration-500 relative`}
          >
            <MiniCard
              imageUrl="/images/tv_unit.png"
              title="TV Unit"
              description="Elevate your living room with Narasimha Interior Decorators' sleek TV units. Designed for both style and functionality, our modern units enhance your entertainment space effortlessly. Discover our range today and transform your home entertainment experience."
            />
            <MiniCard
              imageUrl="/images/loft_design.png"
              title="Loft Designer"
              description="Elevate your living room with Narasimha Interior Decorators' sleek TV units. Designed for both style and functionality, our modern units enhance your entertainment space effortlessly. Discover our range today and transform your home entertainment experience."
            />
            <MiniCard
              imageUrl="/images/wardrobe.png"
              title="Wardrobe"
              description="Elevate your living room with Narasimha Interior Decorators' sleek TV units. Designed for both style and functionality, our modern units enhance your entertainment space effortlessly. Discover our range today and transform your home entertainment experience."
            />
            <MiniCard
              imageUrl="/images/false_ceiling.png"
              title="False Ceiling"
              description="Elevate your living room with Narasimha Interior Decorators' sleek TV units. Designed for both style and functionality, our modern units enhance your entertainment space effortlessly. Discover our range today and transform your home entertainment experience."
            />
          </div>
        </div>
        {/* Button */}
        <button
          className={`bg-[#1F1F1F] text-white text-sm font-semibold py-3 px-6 rounded hover:bg-[#444444] mt-4 ${
            section_twoInView ? "animate-slide-up" : "opacity-0"
          } transition-opacity duration-500 relative `}
        >
          <Link href="/contact">Contact Us</Link>
        </button>
      </div>

      {/* 3rd section */}
      <div className=" relative p-6 md:p-12 lg:p-24 ">
        <div className="absolute inset-0 z-0 opacity-10">
          <svg
            id="visual"
            viewBox="0 0 1577 620"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <rect x="0" y="0" width="1577" height="620" fill="#ffffff"></rect>
            <g transform="translate(10.620645511858868 -100.73077222131315)">
              <path
                d="M359 -453.4C468.7 -335.9 563.3 -225.9 654.9 -62.7C746.6 100.5 835.3 317 795.3 527.6C755.2 738.1 586.4 942.7 405.9 926.7C225.4 910.6 33.2 673.8 -215.4 585.9C-464 498 -768.9 559 -818.7 472.7C-868.6 386.4 -663.3 152.8 -567.8 -50.1C-472.4 -253 -486.9 -425.3 -410.6 -548.6C-334.2 -672 -167.1 -746.5 -21.2 -721.2C124.7 -695.9 249.4 -570.9 359 -453.4"
                fill="#ffa48f"
              ></path>
            </g>
          </svg>
        </div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-8">
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
                src={modular_kitchen_services}
                alt="modular_kitchen_services"
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
      <div className=" relative p-6 md:p-12 lg:p-24 ">
        <div className="absolute inset-0 z-0 opacity-10">
          <svg
            id="visual"
            viewBox="0 0 1577 620"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <rect x="0" y="0" width="1577" height="620" fill="#ffffff"></rect>
            <g transform="translate(1572.1682739191738 484.46670565966974)">
              <path
                d="M380.4 -441.8C511.7 -343.2 649.8 -241 692.1 -106.4C734.5 28.2 681.2 195.4 602.4 362.8C523.6 530.2 419.3 697.8 248.4 819.5C77.5 941.1 -160.1 1016.7 -308.3 927.8C-456.5 838.8 -515.3 585.1 -575.6 380.8C-635.9 176.4 -697.6 21.2 -697.4 -147.9C-697.3 -317 -635.3 -500.2 -508.8 -599.7C-382.2 -699.2 -191.1 -715.1 -33.3 -675.4C124.5 -635.8 249.1 -540.5 380.4 -441.8"
                fill="#ffa48f"
              ></path>
            </g>
          </svg>
        </div>
        <div className=" relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-8">
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
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pl-10">
            <div
              ref={section_fourRef}
              className={`relative w-full pb-[75%] rounded-lg overflow-hidden transition-opacity duration-[2500ms] ${
                section_fourInView
                  ? "animate-slide-left opacity-100"
                  : "opacity-0"
              }`}
            >
              <Image
                src={painting_services}
                alt="painting_services"
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
