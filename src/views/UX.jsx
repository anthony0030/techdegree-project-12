import React from "react";
import PropTypes from "prop-types";

//Project Data
import PROJECTS from "../db/ProjectsData";

// Application Components
import { Project, Heading } from "components";

function UX(props) {
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

UX.propTypes = {
  match: PropTypes.object.isRequired
};


export default UX;
