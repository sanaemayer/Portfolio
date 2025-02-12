import React, { useEffect, useRef, useState } from "react";
import Projects from "./Projects";

const Education: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const imageRef = useRef<HTMLImageElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },

      {
        threshold: 0.2, // Trigger when 50% of the element is in view
      }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <section id="education" className="education-section">
      <h1>Education</h1>
      {/* UofA */}
      <div ref={imageRef} className="education-container" id="education">
        <img
          className={`education-image ${isVisible ? "slide-in" : ""}`}
          src={process.env.PUBLIC_URL + "/images/UniversityOfAlberta.png"}
          alt="University of Alberta Campus"
        />
        <div
          ref={textRef}
          className={`education-text ${isVisible ? "slide-in" : ""}`}
        >
          <Projects />
        </div>
      </div>
    </section>
  );
};

export default Education;
