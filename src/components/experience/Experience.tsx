import React, { useEffect, useRef, useState } from "react";
import "./experience.scss";
import experienceJson from "./data/Experiences.json";
import ExperienceTabs from "./ExperienceTabs";
import { isMobile } from "../utils/utils";

type experience = {
  name: string;
  location: string;
  image: string;
  icons: string[];
  about: string[];
  descriptions: { label: string; title: string; texts: string[] }[];
  titles: { title: string; date: string }[];
  tools: { source: string; name: string }[];
};

const Experience: React.FC = () => {
  // Show experience when on screen
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
        threshold: 0.1, // Trigger when 50% of the element is in view
      }
    );

    if (expRef.current) observer.observe(expRef.current);

    return () => {
      if (expRef.current) observer.unobserve(expRef.current);
    };
  }, []);

  return (
    <section className="experience" ref={expRef}>
      <h1>Experience</h1>
      {experienceJson.map((experience: experience, index) => (
        <div className="container" id="experience" key={"" + index}>
          <div className={`text ${isVisible ? "slide-in" : ""}`}>
            <h2>{experience.name}</h2>
            <h4>{experience.location}</h4>

            {experience.titles.map((title, index) => (
              <div key={experience.name + "-title-" + index}>
                <h3>{title.title}</h3>
                <h4>{title.date}</h4>
              </div>
            ))}

            <div className="logo-row">
              {experience.tools.map((tool, index) => (
                <div
                  className="logo-container"
                  key={experience.name + "-tool-" + index}
                >
                  <img
                    src={process.env.PUBLIC_URL + tool.source}
                    className="logo"
                  />
                  <div className="logo-text-container">
                    <div className="logo-text">{tool.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <img
            className={`image ${isVisible ? "slide-in" : ""}`}
            src={process.env.PUBLIC_URL + experience.image}
          />

          <div className={`detail-container ${isVisible ? "slide-in" : ""}`}>
            <div className="detail-line-ver" />
            <div>
              {experience.about.length > 0 && (
                <div>
                  {!isMobile() && (
                    <div className="detail-icons">
                      {experience.icons?.map((icon, index) => (
                        <img
                          key={"detail-icon-" + index}
                          src={process.env.PUBLIC_URL + icon}
                          className="detail-icon"
                        />
                      ))}
                    </div>
                  )}
                  {experience.about.map((text, index) => (
                    <p
                      key={"detail-about-" + index}
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  ))}{" "}
                  <div className="detail-line-hor" />
                </div>
              )}

              <ExperienceTabs experience={experience} />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
export type { experience };
