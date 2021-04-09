import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import _ from "lodash";

//Project Data
import PROJECTS from "../db/UXProjectsData";

// Application Components
import { UXProject, Heading } from "components";

function UX(props) {
  const { project } = useParams();
  const activeProject = _.find(PROJECTS, {id: project});
  console.log(activeProject)

  return(
    <React.Fragment>
      <Heading title={project ? activeProject.title : "My awesome UX portfolio"} subtitle={project ? "Case Study" : ""} />

      {/* Case Studies
      <ul>
        <li>Overview</li>
        <li>Problem</li>
        <li>Audience</li>
        <li>Solution</li>
        <li>Learnings</li>
        <li>Photos</li>
      </ul> */}

      <div className="row">
        {
          !project && PROJECTS.map((project, index) =>
            <UXProject
              project={project}
              key={index}
              projectIndex={index}
            />
          )
        }
      </div>

        {project && <div>

          <br />
          {activeProject.description}
          <br />
          {activeProject.id}
          <br />
          {activeProject.photo}
          <br />
          {activeProject.title}
          <br />
          <br />
          <br />


        <h3>Overview</h3>
        <h3>Problem</h3>
        <h3>Audience</h3>
        <h3>Solution</h3>
        <h3>Learnings</h3>
        <h3>Photos</h3>

       </div>}

    </React.Fragment>
  );
}

export default UX;
