"use client";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import Quote from "../../public/assets/Quote.svg";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    quote:
      "Working with Br Interior was easy and stress-free. They handled everything from start to finish, and the result is better than we imagined. Our home feels put-together and stylish.",
    author: "Sophie Carter",
    location: "Chennai, Tamil Nadu",
  },
  {
    quote:
      "We hired Br Interior to redo our kitchen. They came up with modular kitchen designs that worked for our family. Timely delivery and fully satisfied with their work",
    author: "Anjum Khan",
    location: "Chennai, Tamil Nadu",
  },
  {
    quote:
      "I was clueless about decorating my new apartment. Br Interior helped me pick colors and furniture that fit my style.",
    author: "Sophie Carter",
    location: "Chennai, Tamil Nadu",
  },
  {
    quote:
      "Br Interior gave me a designer look on a DIY budget. Everything they did looks great and built to last. They made it happen!",
    author: "James Bennett",
    location: "Chennai, Tamil Nadu",
  },
  // Add more testimonials as needed
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      className="px-6 md:px-12 lg:px-24 lg:py-24 py-8 md:py-16"
      ref={sectionRef}
    >
      <div
        className={`flex items-center mb-12 lg:mb-15 ${
          sectionInView ? "animate-slide-right" : "opacity-0"
        } transition-opacity duration-500`}
      >
        <div className="w-10 md:w-12 lg:w-16 lg:border-t-4 md:border-t-2 border-t border-[#1F1F1F] mr-5"></div>
        <h1 className="text-xl text-[#1F1F1F] lg:text-5xl md:text-3xl font-semibold">
          Testimonials
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-x-5  mx-auto">
        <div className="lg:w-1/3 mb-6 lg:mb-0" ref={sectionRef}>
          <div
            className={` ${
              sectionInView ? "animate-slide-right" : "opacity-0"
            } transition-opacity duration-500`}
          >
            <h2 className="text-3xl lg:text-5xl text-[#1F1F1F] font-semibold mb-6">
              What our customers say about us
            </h2>
            <p className="text-lg mb-8 text-[#545454]">
              Our clients' satisfaction is our top priority. Here's what they
              have to say about their experiences with our services.
            </p>
            <Link href="https://forms.gle/VTamnwfpdwr5UTDt7" target="_blank">
              <button className="px-6 py-3 bg-[#1F1F1F] text-white rounded-md hover:bg-[#444444] transition-colors duration-200 text-base md:text-lg w-fit mx-auto lg:mx-0">
                Share Your Experience
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:w-2/3" ref={sectionRef}>
          <div
            className={`${
              sectionInView ? "animate-slide-up" : "opacity-0"
            } transition-opacity duration-500`}
          >
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 mb-8">
              {[currentIndex, (currentIndex + 1) % testimonials.length].map(
                (index, i) => (
                  <div
                    key={i}
                    className="bg-[#1F1F1F] text-white p-8 rounded-lg shadow-lg flex flex-col justify-between h-[400px] overflow-y-auto"
                  >
                    <div>
                      <Image src={Quote} alt="Quote" className="mb-8" />
                      <p className="text-base mb-6">
                        {testimonials[index].quote}
                      </p>
                    </div>
                    <div className="flex items-center mt-auto">
                      <div className="w-12 h-12 bg-gray-700 rounded-full mr-4"></div>
                      <div>
                        <p className="font-semibold">
                          {testimonials[index].author}
                        </p>
                        <p className="text-white font-light">
                          {testimonials[index].location}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
            <div className="flex justify-between items-center">
              <button
                onClick={prevTestimonial}
                className="p-2 bg-[#1F1F1F] text-white rounded-full hover:bg-[#444444] transition-colors duration-200"
                aria-label="Previous testimonial"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 bg-[#1F1F1F] text-white rounded-full hover:bg-[#444444] transition-colors duration-200"
                aria-label="Next testimonial"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
