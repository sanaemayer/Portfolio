import React from "react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "1. Finovo",
      description:
        "This product helps employees manage their financial wellness by providing personalized recommendations based on a questionnaire, offering resources like financial tools and articles.",
      gitLink: "https://github.com/sanaemayer/Finovo",
      videoLink: "https://youtu.be/IQ3Ra_55THM",
    },
    {
      title: "2. MoodSoup",
      description:
        "A platform where users can share their moods as emoticons with added details, follow friends, and display their geolocation and maps to show where their latest moods were sent from.",
      gitLink: "https://github.com/sanaemayer/MoodSoup",
      videoLink: "https://youtu.be/piEWOG5oRGI",
    },
    {
      title: "3. BudgetEats",
      description:
        "A hackathon project designed to compare and add grocery items across different grocery stores, built using React for the frontend and Django for the backend.",
      gitLink: "https://github.com/sanaemayer/BudgetEats",
      videoLink: "https://youtu.be/Bdz9XZumsmM",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a
                  href={project.gitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
                <a
                  href={project.videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Video
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
