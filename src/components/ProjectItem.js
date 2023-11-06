import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologies.map((technology, index) => (
          <span key={index} className="technology">
            <span className="technology-name">{technology.name}</span>
            <span className="technology-about">{technology.about}</span>
            <span className="technology-technologies">{technology.technologies}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
