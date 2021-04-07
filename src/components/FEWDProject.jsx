import React from "react";
import PropTypes from "prop-types";
import dig from 'object-dig';

import { Card, CardImg, CardText, CardBody, CardFooter, CardTitle } from 'reactstrap';
import { Framer, Skills } from "components";

function FEWDProject(props) {

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
    sourceUrl,
    title,
    url
  } = project;

  const openProject = dig(match, 'params', 'project') || "";
  const modalOpen = (title.replace(" ", "-") === openProject.replace(" ", "-"));

  return (
    <div className="col-lg-6 col-xl-4 portfolio-item">
      <Card className="h-100">
        <Framer url={url} title={title} preTitle={preTitle} className="project_modal" modalOpen={modalOpen} projectIndex={projectIndex}/>
        <CardImg top width="100%" src={photo} alt="Project Screenshot" />
        <CardBody>
          <div className="card-buttons ml-2">
            <a className="btn btn-dark-light" target="_blank" rel="noopener noreferrer" href={sourceUrl}>
              View Source
              <i className="fas fa-code ml-2"/>
            </a>
            <a className="btn btn-dark-light" target="_blank" rel="noopener noreferrer" href={codacyBadgeLink}>
              View Quality
              <i className="fas fa-flask ml-2"/>
            </a>
            <a className="btn btn-dark-light" target="_blank" rel="noopener noreferrer" href={url}>
              Open In New Tab
              <i className="fas fa-eye ml-2"/>
            </a>
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

FEWDProject.propTypes = {
  projectIndex: PropTypes.number.isRequired,
  project: PropTypes.shape({
    preTitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    sourceUrl: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string.isRequired),
    codacyBadgeLink: PropTypes.string.isRequired,
    codacyBadgeIcon: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  match: PropTypes.shape({
    params:PropTypes.shape({
      project: PropTypes.string
    }),
  }),
};

export default FEWDProject;
