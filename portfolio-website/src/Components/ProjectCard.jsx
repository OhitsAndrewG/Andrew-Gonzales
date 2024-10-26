import React from "react";
import "../Styles/ProjectCard.css";

export default function ProjectCard({ name, description, imageUrl, imageFocus }) {
  return (
    <div className="project-card">
      <h2 className="project-name">{name}</h2>
      <div className="project-image-container">
        {imageUrl && (
          <img 
            src={imageUrl} 
            alt={name} 
            className="project-image" 
            style={{ objectPosition: imageFocus || 'center' }}
          />
        )}
      </div>
      <div className="project-description-container">
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
}
