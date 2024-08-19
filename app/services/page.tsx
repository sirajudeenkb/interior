"use client"
import React from "react";
import HeaderComponent from "../Components/HeaderComponent";
import MiniCard from "../Components/MiniCard";
import ServicesImage from "../../public/images/Services.jpg"; // Ensure the image path is correct
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Link from "next/link";


const Services: React.FC = () => {
  return (
    <div>
      <HeaderComponent
        imageSrc={ServicesImage}
        title="Our Services"
        description="Discover the range of services we offer to meet your needs."
      />
      {/* Rest of the Services page content */}
      <div className="p-4 md:p-6 lg:p-8 flex flex-col items-center">
        <h3 className="text-[#545454] font-medium text-base md:text-lg lg:text-xl text-center">
          Discover Our Services
        </h3>
        <h2 className="text-[#1F1F1F] font-semibold text-2xl md:text-3xl lg:text-4xl text-center">
          Personalized Designs, Elegant Spaces.
        </h2>
        <div className="flex flex-wrap justify-center mt-2">
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
        <button className="bg-[#1F1F1F] text-white text-sm font-semibold py-3 px-6 rounded hover:bg-[#444444] mt-4">
          <Link href="/contact">Contact Us</Link>
        </button>
      </div>
    </div>
  );
};

export default Services;
