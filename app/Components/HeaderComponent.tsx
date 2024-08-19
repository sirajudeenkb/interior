"use client"
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";

interface HeaderComponentProps {
  imageSrc: StaticImageData;
  title: string;
  description: string;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  imageSrc,
  title,
  description,
}) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="relative w-full h-[400px]">
      <Image
        src={imageSrc}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-50 ">
        <div className=" animate-slide-up">
          <h1
            className={`text-4xl font-bold `}
          >
            {title}
          </h1>
          <p className={`text-lg mt-2`}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
