import React from "react";
import PropTypes from "prop-types";

import Skills from "./Skills";
import Framer from "./Framer";

import { Card, CardImg, CardText, CardBody, CardFooter, CardTitle } from 'reactstrap';


function Project(props) {

  const {
    codacyBadgeLink,
    description,
    photo,
    preTitle,
    skills,
    sourcrUrl,
    title,
    url,
    projectIndex,
    match
  } = props;

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
  title: PropTypes.string.isRequired,
  preTitle: PropTypes.string,
  photo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.array,
  sourcrUrl: PropTypes.string,
  url: PropTypes.string,
  projectIndex: PropTypes.number.isRequired
};

export default Project;