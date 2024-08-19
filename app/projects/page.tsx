"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import HeaderComponent from "../Components/HeaderComponent";
import ProjectsImage from "../../public/images/Projects.jpg";

interface CloudinaryImage {
  public_id: string;
  secure_url: string;
}

const Projects: React.FC = () => {
  const [images, setImages] = useState<CloudinaryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/images");
        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }
        const data = await response.json();
        setImages(data.resources);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const getImageSize = (index: number) => {
    // Alternate between large and small images
    if (index % 5 === 0 || index % 5 === 3) {
      return "large";
    }
    return "small";
  };

  return (
    <div>
      <HeaderComponent
        imageSrc={ProjectsImage}
        title="Our Projects"
        description="Explore our portfolio of completed projects and see our work in action."
      />
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <div className="container mx-auto px-10 sm:px-8 md:px-12 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
            {images.map((image, index) => (
              <div
                key={image.public_id}
                className={`relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                  getImageSize(index) === "large" ? "col-span-2 row-span-2" : ""
                }`}
              >
                <Image
                  src={image.secure_url}
                  alt={image.public_id}
                  layout="responsive"
                  width={getImageSize(index) === "large" ? 400 : 200}
                  height={getImageSize(index) === "large" ? 400 : 200}
                  objectFit="cover"
                  className="transform hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
