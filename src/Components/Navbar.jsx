import React, { useState } from "react";
import "../Styles/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close the menu after clicking
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        {/* BURGER */}
        <button
          className={`navbar-burger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        {/* FULL NAVBAR */}
        <ul className={`navbar-list ${isOpen ? "open" : ""}`}>
          <li className="navbar-list-item">
            <button
              className="navbar-anchor"
              onClick={() => scrollToSection("home")}
            >
              Home
            </button>
          </li>
          <li className="navbar-list-item">
            <button
              className="navbar-anchor"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </button>
          </li>
          <li className="navbar-list-item">
            <button
              className="navbar-anchor"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
