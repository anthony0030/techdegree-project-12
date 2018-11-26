import React from "react";
import PropTypes from "prop-types";

import { Card, CardImg, CardText, CardBody, CardFooter, CardTitle } from 'reactstrap';

// Application Components
import Skills from "./Skills";
import Framer from "./Framer";



function Project(props) {

  const {
    project,
    projectIndex,
    match
  } = props;

  const {
    codacyBadgeLink,
    description,
    photo,
    preTitle,
    skills,
    sourcrUrl,
    title,
    url
  } = project;

  const openProject = match.params.project || "";
  const modalOpen = (title.replace(" ", "-") === openProject.replace(" ", "-"));

  return (
    <div className="col-lg-6 col-xl-4 portfolio-item">
      <Card className="h-100">
        <Framer url={url} title={title} preTitle={preTitle} className="project_modal" modalOpen={modalOpen} projectIndex={projectIndex}/>
        <CardImg top width="100%" src={photo} alt="Project Screenshot" />
        <CardBody>
          <div className="card-buttons">
            <a className="btn btn-dark" target="_blank" rel="noreferrer" href={sourcrUrl} >View Source &lt;&#47;&gt;</a>
            <a className="btn btn-dark" target="_blank" rel="noreferrer" href={codacyBadgeLink} >View Quality <span className="spin">&#9881;</span></a>
            <a className="btn btn-dark" target="_blank" rel="noreferrer" href={url} >Open In New Tab <span role="img" aria-label="view symbol">👁️</span></a>
          </div>
          <CardTitle>{title}</CardTitle>
          <CardText>{description}</CardText>
        </CardBody>
        <CardFooter>
          <Skills skills={skills} projectIndex={projectIndex}/>
        </CardFooter>
      </Card>
    </div>
  );
}

Project.propTypes = {
  projectIndex: PropTypes.number.isRequired,
  project: PropTypes.shape({
    preTitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    sourcrUrl: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string.isRequired),
    codacyBadgeLink: PropTypes.string.isRequired,
    codacyBadgeIcon: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })
};

export default Project;