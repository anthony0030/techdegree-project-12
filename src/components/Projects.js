import React from "react";
import PropTypes from "prop-types";



import Project from "./Project"


function Projects(props) {
  return (
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
  );
}

Projects.propTypes = {
  data: PropTypes.array.isRequired
};




export default Projects;