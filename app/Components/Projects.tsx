"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [isClosing, setIsClosing] = useState(false);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setModalIsOpen(true);
    setIsClosing(false);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setModalIsOpen(false);
      setSelectedImage("");
      setIsClosing(false);
    }, 300); // Match this with the duration of the modalClose animation
  };

  const projectImages = [
    "/images/home_interior.png",
    "/images/office_interior.png",
    "/images/modular_kitchen.png",
    "/images/painting_services.png",
  ];

  return (
    <div
      className="px-6 md:px-12 lg:px-24 lg:pt-24 pt-8 md:pt-16"
      ref={sectionRef}
    >
      <div
        className={`flex items-center mb-12 lg:mb-15 ${
          sectionInView ? "animate-slide-right" : "opacity-0"
        } transition-opacity duration-500`}
      >
        <div className="w-10 md:w-12 lg:w-16 lg:border-t-4 md:border-t-2 border-t border-[#1F1F1F] mr-5"></div>
        <h1 className="text-xl text-[#1F1F1F] lg:text-5xl md:text-3xl font-semibold">
          Projects
        </h1>
      </div>
      <div
        className={`mt-8 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-opacity duration-[3500ms] mb-5 ${
          sectionInView ? "opacity-100" : "opacity-0"
        }`}
      >
        {projectImages.map((imageSrc, index) => (
          <div
            key={index}
            className="bg-gray-200 h-64 relative flex items-center justify-center text-center cursor-pointer transform transition-transform duration-300 hover:scale-105"
            onClick={() => openModal(imageSrc)}
          >
            <Image
              src={imageSrc}
              alt={`Project ${index + 1}`}
              fill
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div
        className={`flex justify-center lg:justify-start ${
          sectionInView ? "animate-slide-right" : "opacity-0"
        } transition-opacity duration-500`}
      >
        <Link href="/projects">
          <button className="px-6 py-3 bg-[#1F1F1F] text-white rounded-md hover:bg-[#444444] transition-colors duration-200 text-base md:text-lg w-fit mx-auto lg:mx-0">
            Explore More
          </button>
        </Link>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        bodyOpenClassName="modal-open"
        className={`flex items-center justify-center ${
          isClosing ? "modal-close" : "modal-content"
        }`}
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[9999]"
        contentLabel="Project Image"
        style={{
          overlay: {
            zIndex: 9999,
          },
          content: {
            zIndex: 10000,
          },
        }}
      >
        <div className="relative">
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-white bg-black rounded-full p-2"
          >
            <FaTimes size={20} />
          </button>
          <Image
            src={selectedImage}
            alt="Selected Project"
            width={1000}
            height={1000}
            className="max-h-screen max-w-screen"
            objectFit="contain"
          />
        </div>
      </Modal>
    </div>
  );
};

export default Projects;
