import React from "react";
import "../Styles/Contact.css";
import MediaCircle from "./MediaCircle";

export default function Contact() {
  return (
    <div className="contact-container">
      <MediaCircle
        name="Instagram"
        link="https://www.instagram.com/andrew__gonzales/"
      />
      <MediaCircle
        name="LinkedIn"
        link="https://www.linkedin.com/in/andrewgonzales3322/"
      />
      <MediaCircle name="GitHub" link="https://github.com/OhitsAndrewG" />
      <MediaCircle name="Email" link="Mailto:andrewg9@usc.edu" />
    </div>
  );
}
