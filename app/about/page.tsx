"use client"
import React from "react";
import HeaderComponent from "../Components/HeaderComponent";
import AboutImage from "../../public/images/About.jpg"; // Ensure the image path is correct
import about from "../../public/images/about-us.jpg";
import mission from "../../public/images/mission.jpg";
import vision from "../../public/images/vision.jpg";
import section from "../../public/images/Why-us.jpg";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Link from "next/link";


const About: React.FC = () => {

   const { ref: aboutRef, inView: aboutInView } = useInView({
     triggerOnce: true,
     threshold: 0.2,
   });

   const { ref: missionRef, inView: missionInView } = useInView({
     triggerOnce: true,
     threshold: 0.2,
   });

   const { ref: visionRef, inView: visionInView } = useInView({
     triggerOnce: true,
     threshold: 0.2,
   });

   const { ref: stepsRef, inView: stepsInView } = useInView({
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
      <div className="relative p-8 md:p-12 lg:p-24">
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

        <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-8">
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
            <p className="text-sm sm:text-base md:text-lg mb-6 text-[#545454] text-justify">
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
            <button className="px-6 py-3 bg-[#1F1F1F] text-white rounded hover:bg-[#444444] text-sm sm:text-base md:text-lg w-fit mx-auto lg:mx-0">
              <Link href="/contact">Contact Us</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden">
        {/* SVG Blob Background */}
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

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row justify-center gap-8 md:gap-12 lg:gap-16 max-w-full sm:p-8 md:p-12 lg:p-16">
          <div
            ref={missionRef}
            className={`flex flex-col items-center w-full md:w-1/2 lg:w-2/5 mb-12 md:mb-0 transition-opacity duration-[2500ms] ${
              missionInView ? "animate-slide-right opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={mission}
              width={450}
              height={450}
              alt="Our Mission"
              className="mb-7 w-full max-w-[450px] h-auto transition-transform duration-300 hover:scale-105"
            />
            <h2 className="font-semibold text-3xl mb-4 text-[#1F1F1F]">
              Our Mission
            </h2>
            <p className="text-justify max-w-md mx-auto text-[#545454] ">
              Driven by a passion for creativity and customer satisfaction, our
              mission is to surpass expectations by delivering exceptional
              interior design services tailored to the unique needs and
              preferences of each client, ensuring their spaces reflect timeless
              elegance and functional brilliance.
            </p>
          </div>

          <div
            ref={visionRef}
            className={`flex flex-col items-center w-full md:w-1/2 lg:w-2/5 transition-opacity duration-[2500ms] ${
              visionInView ? "animate-slide-left opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={vision}
              width={450}
              height={450}
              alt="Our Vision"
              className="mb-7 w-full max-w-[450px] h-auto transition-transform duration-300 hover:scale-105"
            />
            <h2 className="font-semibold text-3xl mb-4 text-[#1F1F1F]">
              Our Vision
            </h2>
            <p className="text-justify max-w-md mx-auto text-[#545454]">
              Our vision at Narasimha Interior Decorators is to become the
              premier destination for innovative and sustainable interior design
              solutions in Madipakkam, Chennai, and the surrounding areas,
              setting new standards of excellence in the industry. Narasimha –
              The Top Interior Decorators
            </p>
          </div>
        </div>
      </div>

      <div className="relative p-8 md:p-12 lg:p-24">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <svg
            id="visual"
            viewBox="0 0 1577 620"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            className="w-full h-full object-cover"
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
        <div className="relative z-10 container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div
              ref={stepsRef}
              className={`w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8 flex flex-col justify-between  transition-opacity duration-[2500ms] ${
                stepsInView ? "animate-slide-right opacity-100" : "opacity-0"
              }`}
            >
              <div className="space-y-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 text-[#1F1F1F]">
                  Why Choose Us?
                </h2>
                <p className="text-lg md:text-xl text-left text-[#1F1F1F] mb-8">
                  Discover the Top 5 Reasons to Partner with Us!
                </p>
                <ul className="list-decimal ml-4 space-y-4 text-[#1F1F1F] text-justify">
                  <li>
                    <span className="font-bold">Expertise:</span>
                    <span className="text-[#545454]">
                      {" "}
                      Benefit from our seasoned professionals with years of
                      industry experience, ensuring top-notch design solutions
                      tailored to your needs.
                    </span>
                  </li>
                  <li>
                    <span className="font-bold">Affordability:</span>
                    <span className="text-[#545454]">
                      {" "}
                      Enjoy our budget-friendly options without compromising on
                      quality or style, making exceptional design accessible to
                      all.
                    </span>
                  </li>
                  <li>
                    <span className="font-bold">Personalization:</span>
                    <span className="text-[#545454]">
                      {" "}
                      Experience our great personalized attention and customized
                      designs that reflect your unique preferences and
                      lifestyle.
                    </span>
                  </li>
                  <li>
                    <span className="font-bold">Timely Delivery:</span>
                    <span className="text-[#545454]">
                      {" "}
                      It counts on us for efficient project management and
                      timely completion, ensuring your vision becomes reality
                      right on schedule.
                    </span>
                  </li>
                  <li>
                    <span className="font-bold">Customer Satisfaction:</span>
                    <span className="text-[#545454]">
                      {" "}
                      Our responsible commitment to your satisfaction means
                      transparent communication, attention to detail, and a
                      seamless, stress-free design journey from start to finish.
                    </span>
                  </li>
                </ul>
                <div className="text-center lg:text-left mt-8">
                  <p className="text-xl text-[#1F1F1F] font-semibold mb-4">
                    Still Waiting?
                  </p>
                  <button className="px-6 py-3 bg-[#1F1F1F] text-white rounded hover:bg-[#444444] text-sm sm:text-base md:text-lg w-fit mx-auto lg:mx-0">
                    <Link href="/contact">Contact Us</Link>
                  </button>
                </div>
              </div>
            </div>
            <div
              ref={stepsRef}
              className={`w-full lg:w-1/2 flex justify-center lg:justify-start transition-opacity duration-[2500ms] ${
                stepsInView ? "animate-slide-left opacity-100" : "opacity-0"
              }`}
            >
              <div className="relative w-full rounded-lg overflow-hidden">
                <Image
                  src={section}
                  alt="About Us"
                  layout="fit"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
