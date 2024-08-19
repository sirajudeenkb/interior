"use client";
import Image from "next/image";
import React, { useState, ChangeEvent, FormEvent } from "react";
import HeaderComponent from "../Components/HeaderComponent";
import contactImage from "../../public/images/contact.jpg";
import email from "../../public/images/Email.jpg";
import { useInView } from "react-intersection-observer";

interface FormData {
  name: string;
  email: string;
  mobile: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <>
      <div>
        <HeaderComponent
          imageSrc={contactImage}
          title="Contact us"
          description="Ready to get started? Contact us today for a free consultation!"
        />
      </div>
      <div className="relative lg:p-24 md:p-12 p-8">
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
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
            <div
              className={`w-full lg:w-1/2 transition-opacity duration-[2500ms] ${
                contentInView ? "animate-slide-right opacity-100" : "opacity-0"
              }`}
              ref={contentRef}
            >
              <div className="relative w-full pb-[75%] rounded-lg overflow-hidden">
                <Image
                  src={email}
                  alt="Contact Us"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            <div
              className={`w-full lg:w-1/2 flex flex-col items-center gap-y-6 transition-opacity duration-[2500ms] ${
                contentInView ? "animate-slide-left opacity-100" : "opacity-0"
              }`}
              ref={contentRef}
            >
              <form onSubmit={handleSubmit} className="w-full max-w-md">
                <h2 className=" text-[#1F1F1F] text-3xl font-semibold mb-6 lg:text-center text-left">
                  Fill out the form below !
                </h2>
                <h3 className="text-[#1F1F1F] text-base font-medium mb-6 lg:text-center text-left">
                  Our Customer Support Team will be in touch shortly !
                </h3>
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="mobile" className="block mb-2">
                    Mobile No
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    placeholder="Mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                    rows={4}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1F1F1F] text-white py-2 px-4 rounded hover:bg-[#444444] transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

