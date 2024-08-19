import React from "react";
import HeaderComponent from "../Components/HeaderComponent";
import contactImage from "../../public/images/contact.jpg"; // Ensure the image path is correct

const Contact: React.FC = () => {
  return (
    <div>
      <HeaderComponent
        imageSrc={contactImage}
        title="Contact us"
        description="Ready to get started? Contact us today for a free consultation!"
      />
      {/* Rest of the Services page content */}
    </div>
  );
};

export default Contact;
