import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Degree from "./Components/Degree";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <section id="home">
          <Hero />
          <Degree />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="login">{/* Login component */}</section>
      </div>
    </div>
  );
}

export default App;
