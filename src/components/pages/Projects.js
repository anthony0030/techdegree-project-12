import React from "react";
import PropTypes from "prop-types";

//Project Data
import PROJECTS from "../ProjectsData";

// Application Components
import Heading from "../Heading";
import Project from "../Project";

function Projects(props) {
  const {match} = props;
  return(
    <React.Fragment>
      <Heading title="" subtitle="My awesome portfolio" />
      <div className="row">
        {
          PROJECTS.map((project, index) =>
            <Project
              project={project}
              key={index}
              projectIndex={index}
              match={match}
            />
          )
        }
      </div>
    </React.Fragment>
  );
}

Projects.propTypes = {
  match: PropTypes.object.isRequired
};


export default Projects;
