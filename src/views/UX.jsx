import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import _ from "lodash";

//Project Data
import PROJECTS from "../db/UXProjectsData";

// Application Components
import { Heading, UXProject } from "components";
import parse from "html-react-parser";
import Gallery from "react-grid-gallery";

function UX(props) {
  const { project } = useParams();
  const activeProject = _.find(PROJECTS, { id: project });
  console.log(activeProject);

  return (
    <React.Fragment>
      <Heading
        title={project ? activeProject.title : "My awesome UX portfolio"}
        subtitle={project ? "Case Study" : ""}
      />

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
        {!project &&
          PROJECTS.map((project, index) => (
            <UXProject project={project} key={index} projectIndex={index} />
          ))}
      </div>

      {project && (
        <div>
          <section className="mb-4">
            <img src={activeProject.photo} alt="overview" className="w-100" />
          </section>
          <section className="mb-4">
            <h3>Overview</h3>
            {parse(activeProject.overview)}
          </section>
          <section className="mb-4">
            <h3>Problem</h3>
            {parse(activeProject.problem)}
          </section>
          <section className="mb-4">
            <h3>Target audience</h3>
            {parse(activeProject.audience)}
          </section>
          <section className="mb-4">
            <h3>Solution</h3>
            {parse(activeProject.solution)}
          </section>
          <section className="mb-4">
            <h3>Learnings</h3>
            {parse(activeProject.learnings)}
          </section>
          <section className="mb-4">
            <h3>Photos</h3>
            {activeProject.galleries.map((gallery, key) => {
              const { images, title } = gallery;
              return (
                <div key={key} className="clearfix mb-4">
                  <h4>{title}</h4>
                  <Gallery images={images} />
                </div>
              );
            })}
          </section>
        </div>
      )}
    </React.Fragment>
  );
}

export default UX;
