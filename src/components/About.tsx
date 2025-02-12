import React from "react";

const About: React.FC = () => {
  const images = [
    "/images/blossom.png",
    "/images/airplane.png",
    "/images/falls.png",
    "/images/grandcanyon.png",
  ];

  return (
    <section id="about" className="about-section">
      <h1>About Me</h1>
      <div className="about-image-grid">
        {images.map((image, index) => (
          <div key={index} className="about-image-item">
            <img src={process.env.PUBLIC_URL + image} alt={`image-${index}`} />
          </div>
        ))}
      </div>
      <div className="about-text">
        <p>
          I'm a passionate Backend Developer with a keen eye for detail and a
          love for problem-solving. My journey in development revolves around
          improving the quality of the overall experience—whether it's for
          developers, users, or support teams. I specialize in identifying and
          fixing bugs, ensuring seamless functionality, and optimizing systems
          for performance and reliability.
        </p>
        <p>
          Outside of development, I’m an avid traveler and photographer,
          constantly seeking new experiences and capturing moments through my
          lens. I’m also a food enthusiast, always on the hunt for the next
          great dish to try.
        </p>
        <p>
          Currently, I'm working on a project that focuses on enhancing the user
          experience and improving the quality of interactions between
          developers and support teams. With a strong foundation in backend
          development, I’m dedicated to delivering robust, high-quality
          solutions that make a lasting impact.
        </p>
      </div>
    </section>
  );
};

export default About;
