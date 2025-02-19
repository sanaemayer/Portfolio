import React from "react";
import "./about.scss";
import aboutJson from "./about.json";
import { isMobile } from "../utils/utils";

const About: React.FC = () => {
  return (
    <section className="about">
      <h1>About Me</h1>
      <div className="image-grid">
        {aboutJson.images.map((image, index) => (
          <div key={index} className="image-item">
            <img src={process.env.PUBLIC_URL + image} alt={`image-${index}`} />
          </div>
        ))}
      </div>
      {(isMobile() ? [aboutJson.about[0]] : aboutJson.about).map(
        (text, index) => {
          console.log(text);
          return <p key={index}>{text}</p>;
        }
      )}
    </section>
  );
};

export default About;
