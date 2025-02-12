import React, { useEffect, useRef, useState } from "react";
import experienceJson from "./data/Experiences.json";

const Experience: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const expRef = useRef<HTMLDivElement | null>(null);

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

    if (expRef.current) observer.observe(expRef.current);

    return () => {
      if (expRef.current) observer.unobserve(expRef.current);
    };
  }, []);

  return (
    <section className="experience-section" ref={expRef}>
      <h1>Experience</h1>
      {experienceJson.map((experience, index) => (
        <div
          className="experience-container"
          id="experience"
          key={"experience-" + index}
        >
          <div className={`experience-text ${isVisible ? "slide-in" : ""}`}>
            <h2>{experience.name}</h2>
            <h4>{experience.location}</h4>

            {experience.titles.map((title, index) => (
              <div key={experience.name + "-title-" + index}>
                <h3>{title.title}</h3>
                <h4>{title.date}</h4>
              </div>
            ))}

            <div className="experience-logo-row">
              {experience.tools.map((tool, index) => (
                <div
                  className="experience-logo-container"
                  key={experience.name + "-tool-" + index}
                >
                  <img
                    src={process.env.PUBLIC_URL + tool.source}
                    className="experience-logo"
                  />
                  <div className="experience-logo-text-container">
                    <div className="experience-logo-text">{tool.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <img
            className={`experience-image ${isVisible ? "slide-in" : ""}`}
            src={process.env.PUBLIC_URL + experience.image}
          />

          <div
            className={`experience-detail-container ${
              isVisible ? "slide-in" : ""
            }`}
          >
            {experience.descriptions.map((description, index) => (
              <div
                className="experience-detail-text"
                key={experience.name + "-description-" + index}
              >
                <h4>{description.title}</h4>
                {description.texts.map((text, index) => (
                  <p
                    key={experience.name + "-description-text-" + index}
                    // Load HTML from the json file
                    dangerouslySetInnerHTML={{ __html: text }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
