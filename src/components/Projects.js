import React from "react";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import MiniProjects from "./MiniProjects";

export default function Projects() {
  return (
    <div className="section-projects" id="projects">
      <div className="projects-container">
        <div className="project-title">
          <h2>Projects</h2>
          <span>
            Below you can see my projects, check out the live demos and code on
            GitHub
          </span>
        </div>
        <Project1 />
        <Project2 />
        <Project3 />
        <div className="project-title mini">
          <h3>Mini projects</h3>
          <span>
            This section includes projects from the beginning of my programming
            education and technologies in which I am just beginning to learn
          </span>
        </div>

        <MiniProjects />
      </div>
    </div>
  );
}
