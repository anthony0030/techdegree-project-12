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
      <Heading title="" subtitle="My awesome UX portfolio" />
      Portfolio Page
      <ul>
        <li>A photo to represent each case study. (T-shirt website, Grocery App, & WhooshMail Flow)</li>
        <li>Each case study links to it's own page where it is detailed.</li>
      </ul>

      Case Studies
      <ul>
        <li>Overview</li>
        <li>Problem</li>
        <li>Audience</li>
        <li>Solution</li>
        <li>Learnings</li>
        <li>Photos</li>
      </ul>

      <div className="row">
        {/* {
          PROJECTS.map((project, index) =>
            <Project
              project={project}
              key={index}
              projectIndex={index}
              match={match}
            />
          )
        } */}
      </div>
    </React.Fragment>
  );
}

UX.propTypes = {
  match: PropTypes.object.isRequired
};


export default UX;
