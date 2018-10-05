import React from "react";

import Heading from "./Heading"
import Project from "./Project"

import PROJECTS from "./ProjectsData";

function Projects(props) {
  return (
    <div>
      <Heading title="Anthony Veaudry's" subtitle="Portfolio"/>
      <div className="row">
        {
          PROJECTS.map(
            (project, index) =>
              <Project
                title={project.title}
                photo={project.photo}
                sourcrUrl={project.sourcrUrl}
                url={project.url}
                skills={project.skills}
                codacyBadgeLink={project.codacyBadgeLink}
                codacyBadgeIcon={project.codacyBadgeIcon}
                description={project.description}
                key={index}
              />
            )
          }
      </div>
    </div>
  );
}

export default Projects;