import React from "react";
import About from "../about/About"; // Assuming About, Projects, Contact components are in the same directory
import Contact from "../contact/Contact";
import Experience from "../experience/Experience";
import Education from "../education/Education";

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
