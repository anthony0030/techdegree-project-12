import React from "react";
import PropTypes from "prop-types";

import Heading from "./Heading"
import Project from "./Project"


function Projects(props) {
  return (
    <div>
      <Heading title="Anthony Veaudry's" subtitle="Portfolio"/>
      <div className="row">
        {
          props.data.map(
            (project, index) =>
              <Project
                title={project.title}
                photo={project.photo}
                sourcrUrl={project.sourcrUrl}
                url={project.url}
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

Projects.propTypes = {
  data: PropTypes.array.isRequired
};




export default Projects;