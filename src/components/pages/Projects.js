import React from "react";

import Heading from "../Heading";
import Project from "../Project";

import MainNav from "../MainNav";
import PROJECTS from "../ProjectsData";

function Projects(props) {
  return(
    <div>
      <MainNav root={props.match.params.root} />
      <Heading title="" subtitle="My awesome portfolio" />
      <div className="row">
        {
          PROJECTS.map((project, index) =>
            <Project
              preTitle="Anthony's"
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