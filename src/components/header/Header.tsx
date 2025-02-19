import React from "react";
import "./header.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>My Portfolio</h1>
        <div className="logos">
          <a
            href="https://github.com/sanaemayer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="logo"
              src={process.env.PUBLIC_URL + "/images/github.png"}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/sanae-mayer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="logo"
              src={process.env.PUBLIC_URL + "/images/linkedin.png"}
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
