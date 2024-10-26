import "../Styles/Hero.css";
import React, { useState, useEffect } from "react";
// Import your image
// import profileImage from "portfolio-website/public/head-shot.png"; // Update this path

// Custom hook for typing animation
function useTypingEffect(text, typingSpeed = 150) {
  const [displayText, setDisplayText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [text, typingSpeed]);

  return { displayText, isTypingComplete };
}

export default function Hero() {
  const { displayText, isTypingComplete } = useTypingEffect(
    "Hello, I'm Andrew Gonzales"
  );

  return (
    <div className="hero-container">
      <div className="typing-text-container">
        <h1
          className={`typing-text ${isTypingComplete ? "typing-complete" : ""}`}
        >
          {displayText}
        </h1>
      </div>
      <div className="hero-content">
        <div className="hero-content-image">
          <img
            src="/head-shot.png"
            alt="Andrew Gonzales"
            className="profile-image"
          />
        </div>
        <div className="hero-content-text">
          <p className="hero-content-text-p">
            I am a passionate and driven software engineer with a Bachelor’s
            degree in Computer Science from the University of Southern
            California. With hands-on experience in both hardware and software
            development, I have worked on projects spanning mobile applications,
            robotics, real-time data systems, and data science. My expertise
            includes programming in C++, Java, JavaScript, Python, and Swift,
            alongside frameworks like React and SwiftUI for both frontend and
            backend development. In addition to software engineering, I have
            experience in data science, including data visualization and
            creating insightful plots to represent complex datasets. Currently,
            I develop and maintain C# .NET WinForms applications at SMAC, where
            I work on cutting-edge actuator technology. I implement serial
            communication between controllers and computing systems and conduct
            rigorous testing on linear and rotary actuators. With a strong
            foundation in problem-solving, data analysis, and a collaborative
            mindset, I am actively seeking opportunities to leverage my
            technical skills in innovative, real-world applications. Feel free
            to connect with me, to know more.
          </p>
        </div>
      </div>
    </div>
  );
}
