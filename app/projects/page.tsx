import React from "react";
import HeaderComponent from "../Components/HeaderComponent";
import ProjectsImage from "../../public/images/Projects.jpg"; // Ensure the image path is correct

const Projects: React.FC = () => {
  return (
    <div>
      <HeaderComponent
        imageSrc={ProjectsImage}
        title="Our Projects"
        description="Explore our portfolio of completed projects and see our work in action."
      />
      {/* Rest of the Projects page content */}
    </div>
  );
};

export default Projects;
