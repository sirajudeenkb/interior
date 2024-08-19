import React from "react";
import HeaderComponent from "../Components/HeaderComponent";
import AboutImage from "../../public/images/About.jpg"; // Ensure the image path is correct

const About: React.FC = () => {
  return (
    <div>
      <HeaderComponent
        imageSrc={AboutImage}
        title="About Us"
        description="Learn more about our mission and values."
      />
      {/* Rest of the About page content */}
    </div>
  );
};

export default About;
