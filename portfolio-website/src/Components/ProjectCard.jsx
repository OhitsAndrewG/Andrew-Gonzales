import React from "react";
import "../Styles/ProjectCard.css";

export default function ProjectCard({ name, description, imageUrl }) {
  return (
    <div className="project-card">
      <h2 className="project-name">{name}</h2>
      <div className="project-image-container">
        {imageUrl && <img src={imageUrl} alt={name} className="project-image" />}
      </div>
      <p className="project-discription">{description}</p>
    </div>
  );
}
