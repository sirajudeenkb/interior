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
                Transformative Spaces That Inspire and Impress
              </h3>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-2 text-left text-[#1F1F1F]">
                Home & Office Interiors
              </h2>
            </div>
            <p className="text-sm sm:text-base md:text-lg mb-4 text-[#545454] text-justify">
              For homes, we craft sanctuaries that reflect your personality and
              adapt to your lifestyle. Imagine walls that change color with your
              mood, furniture that morphs for entertaining or relaxing, and
              smart systems that anticipate your needs before you do.
              <br />
              <br />
              Our office designs boost productivity through biophilic elements,
              create collaborative zones that spark innovation, and incorporate
              flexible layouts that evolve with your business, ensuring every
              corner contributes to employee well-being and company culture.
              <br />
              <br />
              Whether it's a family haven or a professional powerhouse, Br
              Interior doesn't just design spaces – we craft experiences that
              elevate daily life and work to extraordinary heights.
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
              description="Elevate your living space with Br Interior's sleek TV unit designs. Our modern, functional creations seamlessly blend style and practicality, enhancing your entertainment area. We craft custom solutions that organize your electronics and showcase your personal style."
            />
            <MiniCard
              imageUrl="/images/loft_design.png"
              title="Loft Designer"
              description="Maximize your space with Br Interior's innovative loft designs. We transform underutilized areas into stylish, multifunctional spaces that add value to your home. Our expert team creates custom loft solutions, perfectly balancing aesthetics, functionality and delivery"
            />
            <MiniCard
              imageUrl="/images/wardrobe.png"
              title="Wardrobe"
              description="Experience the luxury of a perfectly organized space with Br Interior's custom wardrobe designs. We craft elegant storage solutions tailored to your needs, from walk-in closets to built-in wardrobes. Our designs combine premium materials and timeless style to elevate your room."
            />
            <MiniCard
              imageUrl="/images/false_ceiling.png"
              title="False Ceiling"
              description="Add a touch of sophistication to any room with Br Interior's stunning false ceiling designs. Our creative team crafts architectural masterpieces that transform your space, incorporating ambient lighting and unique textures. From modern minimalist to ornate classical styles."
            />
          </div>
        </div>
        {/* Button */}
        <Link href="/contact">
          <button
            className={`bg-[#1F1F1F] text-white text-sm font-semibold py-3 px-6 rounded hover:bg-[#444444] mt-4 ${
              section_twoInView ? "animate-slide-up" : "opacity-0"
            } transition-opacity duration-500 relative `}
          >
            Contact Us
          </button>
        </Link>
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
                Culinary Spaces with Style and Functionality
              </h3>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-2 text-left text-[#1F1F1F]">
                Modular Kitchen Solutions
              </h2>
            </div>
            <p className="text-sm sm:text-base md:text-lg mb-4 text-[#545454] text-justify">
              Br Interior brings culinary dreams to life with our
              state-of-the-art modular kitchen designs, a specialty we've
              perfected since 2010. We transform kitchens across Chennai, from
              Kolathur to Triplicane and beyond, into functional works of art.
              Our expert team crafts bespoke solutions that blend ergonomic
              efficiency with stunning aesthetics, tailored to your unique needs
              and style preferences.
              <br />
              <br />
              Experience the perfect balance of form and function with our
              innovative storage solutions, durable finishes, and attention to
              detail. Let Br Interior redefine your culinary space, turning it
              into the heart of your home where memories are made and culinary
              passions flourish.
            </p>
            <Link href="/modular-kitchen">
              <button className="px-6 py-3 bg-[#1F1F1F] text-white rounded hover:bg-[#444444] text-sm sm:text-base md:text-lg w-fit mx-auto lg:mx-0">
                Know More
              </button>
            </Link>
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
                Transforming Spaces with Colorful Elegance
              </h3>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-2 text-left text-[#1F1F1F]">
                Premium Painting Services
              </h2>
            </div>
            <p className="text-sm sm:text-base md:text-lg mb-6 text-[#545454] text-justify">
              At Br Interior, we elevate your living spaces with our premium
              painting services. Our expert team specializes in creating
              stunning visual transformations for homes and offices across
              Chennai, including Kolathur, Anna Nagar, Triplicane, and Parrys.
              We excel in delivering a wide range of finishes, from classic
              elegance to contemporary chic, using top-quality paints and
              innovative techniques. Our commitment to excellence ensures a
              flawless finish that enhances your interior's aesthetics and
              durability.
              <br />
              <br />
              Experience the perfect blend of color, texture, and craftsmanship
              as we bring your vision to life. Trust Br Interior to revitalize
              your space with precision, creativity, and unmatched expertise,
              making every wall a masterpiece.
            </p>
            <Link href="/premium-painting">
              <button className="px-6 py-3 bg-[#1F1F1F] text-white rounded hover:bg-[#444444] text-sm sm:text-base md:text-lg w-fit mx-auto lg:mx-0">
                Know More
              </button>
            </Link>
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
