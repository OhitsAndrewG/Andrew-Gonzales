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
      name: "Plotting DNA",
      description:
        "This is another project I worked on. It demonstrates my skills in.asdfasfasdfsafdfsadfasdfasdfasdfasdf..",
      imageUrl: "/path/to/another-image.jpg", // Replace with actual image path
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
