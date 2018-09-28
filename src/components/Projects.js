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
              key={index}
              title={project.title}
              url={project.url}
              photo={project.photo}
              description={project.description}
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