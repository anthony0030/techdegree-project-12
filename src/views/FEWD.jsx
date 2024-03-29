import React from "react";
// import PropTypes from "prop-types";

//Project Data
import PROJECTS from "../db/FEWDProjectsData";

// Application Components
import { FEWDProject, Heading } from "components";

function FEWD(/*props*/) {
  return (
    <React.Fragment>
      <Heading title="My awesome FEWD portfolio" subtitle="" />
      <div className="row">
        {PROJECTS.map((project, index) => (
          <FEWDProject project={project} key={index} projectIndex={index} />
        ))}
      </div>
    </React.Fragment>
  );
}

// FEWD.propTypes = {
//   match: PropTypes.object.isRequired,
// };

export default FEWD;
