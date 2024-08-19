import React from "react";
import HeaderComponent from "../Components/HeaderComponent";
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
    </div>
  );
};

export default Services;
