import React from "react";
import PropTypes from "prop-types";

//Project Data
import FEWDProjectsData from "../db/FEWDProjectsData";

// Application Components
import { FEWDProject, Heading } from "components";

function FEWD(props) {
  const { match } = props;
  return (
    <React.Fragment>
      <Heading title="My awesome FEWD portfolio" subtitle="" />
      <div className="row">
        {FEWDProjectsData.map((project, index) => (
          <FEWDProject
            project={project}
            key={index}
            projectIndex={index}
            match={match}
          />
        ))}
      </div>
    </React.Fragment>
  );
}

FEWD.propTypes = {
  match: PropTypes.object.isRequired,
};

export default FEWD;
