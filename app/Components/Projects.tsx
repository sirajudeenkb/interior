import React from "react";

const Projects = () => {
  return (
    <div className="px-6 md:px-12 lg:px-24 lg:py-24 py-8 md:py-16">
      <div className="flex items-center animate-slide-right">
        <div className="w-10 md:w-12 lg:w-16 lg:border-t-4 md:border-t-2 border-t border-[#1F1F1F] mr-5"></div>
        <h1 className="text-xl text-[#1F1F1F] lg:text-5xl md:text-3xl font-semibold">
          Projects
        </h1>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-200 h-64 flex items-center justify-center text-center">
          <img
            src="/images/interior-1.jpg"
            alt="Project 1"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="bg-gray-200 h-64 flex items-center justify-center text-center">
          <img
            src="/path/to/image2.jpg"
            alt="Project 2"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="bg-gray-200 h-64 flex items-center justify-center text-center">
          <img
            src="/path/to/image3.jpg"
            alt="Project 3"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="bg-gray-200 h-64 flex items-center justify-center text-center">
          <img
            src="/path/to/image4.jpg"
            alt="Project 4"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
