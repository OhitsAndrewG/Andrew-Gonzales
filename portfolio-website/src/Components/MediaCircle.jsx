import React from "react";
import "../Styles/MediaCircle.css";

export default function MediaCircle({ name, link }) {
  return (
    <a href={link} className="media-circle-container" target="_blank" rel="noopener noreferrer">
      <h2>{name}</h2>
    </a>
  );
}
