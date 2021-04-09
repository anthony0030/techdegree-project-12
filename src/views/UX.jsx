import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import _ from "lodash";

//Project Data
import PROJECTS from "../db/UXProjectsData";

// Application Components
import { UXProject, Heading } from "components";
import parse from "html-react-parser";
import SimpleImageSlider from "react-simple-image-slider";

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
          <img src={activeProject.photo} alt="overview" className="w-100"/>
          <h3>Overview</h3>
          {parse(activeProject.description)}
          <h3>Problem</h3>
          {parse(activeProject.problem)}
          <h3>Target audience</h3>
          {parse(activeProject.audience)}
          <h3>Solution</h3>
          {parse(activeProject.solution)}
          <h3>Learnings</h3>
          {parse(activeProject.learnings)}
          <h3>Photos</h3>
          {parse(activeProject.photos)}
       </div>}

    </React.Fragment>
  );
}

export default UX;
