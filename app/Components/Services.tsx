"use client"

import { useInView } from "react-intersection-observer";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Services = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="px-6 md:px-12 lg:px-24 lg:pt-24 pt-8 md:pt-16" ref={ref}>
      <div
        className={`flex items-center ${inView ? "animate-slide-right" : ""}`}
      >
        <div className="w-10 md:w-12 lg:w-16 lg:border-t-4 md:border-t-2 border-t border-[#1F1F1F] mr-5"></div>
        <h1 className="text-xl text-[#1F1F1F] lg:text-5xl md:text-3xl font-semibold ">
          Services
        </h1>
      </div>
      <div className="flex flex-col md:flex-row mt-8">
        <div className="flex-1">
          <Image
            src="/images/interior-1.jpg" // Ensure the path to the image is correct
            alt="Interior Design"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>
        <div className="flex-1 mt-8 md:mt-0 md:ml-8">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Living Room Interior Design</AccordionTrigger>
              <AccordionContent>
                Details about living room interior design...
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Commercial Office Room Interior Design
              </AccordionTrigger>
              <AccordionContent>
                Details about commercial office room interior design...
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <button className="mt-4 px-4 py-2 bg-black text-white rounded">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;

