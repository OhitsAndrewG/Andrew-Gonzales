import React from "react";
import "../Styles/Projects.css";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      name: "Plant Pants",
      description:
        "Hardware and Software project using c language for hardware and swift for software. Robot(pot) that tracks and moves your plants based off its current conditions. The application provides updates to keep the owner informed and allows other users (friends) to monitor your plant if needed.",
      imageUrl: "/plant.png", // Replace with actual image path
    },
    {
      name: "Visualizing MFI Per Diluton Data",
      description:
        "Previous studies in the field of medical transplantations have shown that the reliance on mean fluroescence intensity(MFI) produced by multiplex flow cyometric single bead assays are only semi-quantatative and do not give an accurate evaluation doner specific antibody concentration." +
        " This then creates implications in the clincial enviroment for assesing treatment for pre imposed transplant recipients. (Plotted MFI per dilution for each sample)",
      imageUrl: "/mfi_image.png", // Replace with actual image path
    },

    // Add more projects as needed
  ];

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          name={project.name}
          description={project.description}
          imageUrl={project.imageUrl}
        />
      ))}
    </div>
  );
}
