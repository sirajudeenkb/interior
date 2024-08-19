import React from "react";
import HeaderComponent from "../Components/HeaderComponent";
import MiniCard from "../Components/MiniCard";
import ServicesImage from "../../public/images/Services.jpg"; // Ensure the image path is correct


const Services: React.FC = () => {
  return (
    <div>
      <HeaderComponent
        imageSrc={ServicesImage}
        title="Our Services"
        description="Discover the range of services we offer to meet your needs."
      />
      {/* Rest of the Services page content */}
      <div className=" flex flex-wrap justify-center ">
        <MiniCard 
          imageUrl="/images/contact.jpg"
          title="TV Unit"
          description="Elevate your living room with Narasimha Interior Decorators’ sleek TV units. Designed for both style and functionality, our modern units enhance your entertainment space effortlessly. Discover our range today and transform your home entertainment experience."
        />
        <MiniCard
          imageUrl="/images/contact.jpg"
          title="TV Unit"
          description="Elevate your living room with Narasimha Interior Decorators’ sleek TV units. Designed for both style and functionality, our modern units enhance your entertainment space effortlessly. Discover our range today and transform your home entertainment experience."
        />
        <MiniCard
          imageUrl="/images/contact.jpg"
          title="TV Unit"
          description="Elevate your living room with Narasimha Interior Decorators’ sleek TV units. Designed for both style and functionality, our modern units enhance your entertainment space effortlessly. Discover our range today and transform your home entertainment experience."
        />
        <MiniCard
          imageUrl="/images/contact.jpg"
          title="TV Unit"
          description="Elevate your living room with Narasimha Interior Decorators’ sleek TV units. Designed for both style and functionality, our modern units enhance your entertainment space effortlessly. Discover our range today and transform your home entertainment experience."
        />
      </div>
    </div>
  );
};

export default Services;
