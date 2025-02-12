import React from "react";
import About from "./About"; // Assuming About, Projects, Contact components are in the same directory
import Contact from "./Contact";
import Experience from "./Experience";
import Education from "./Education";

const Home: React.FC = () => {
  return (
    <div>
      {/* Home Section with Gradient */}
      
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
        rel="stylesheet"
      ></link>

      <About />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
};

export default Home;
