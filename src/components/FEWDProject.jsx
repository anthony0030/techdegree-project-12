import React from "react";
import PropTypes from "prop-types";

import {
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardText,
  CardTitle,
} from "reactstrap";
import { Skills } from "components";
import { useMatch } from "react-router-dom";

function FEWDProject(props) {
  const { project, projectIndex } = props;
  let match = useMatch("/fewd/:project");

  console.log(match);

  const { codacyBadgeLink, overview, photo, skills, sourceUrl, title, url } =
    project;

  return (
    <div className="col-lg-6 col-xl-4 mb-5">
      <Card className="h-100">
        <CardImg src={photo} alt="Project Screenshot" />
        <CardBody>
          <div className="mx-2 d-flex flex-column">
            <a
              className="btn btn-dark-light m-1 fs-5"
              target="_blank"
              rel="noopener noreferrer"
              href={sourceUrl}
            >
              View Source
              <i className="fa-solid fa-code ms-2" />
            </a>
            <a
              className="btn btn-dark-light m-1 fs-5"
              target="_blank"
              rel="noopener noreferrer"
              href={codacyBadgeLink}
            >
              View Quality
              <i className="fa-solid fa-flask ms-2" />
            </a>
            <a
              className="btn btn-dark-light m-1 fs-5"
              target="_blank"
              rel="noopener noreferrer"
              href={url}
            >
              Open In New Tab
              <i className="fa-solid fa-eye ms-2" />
            </a>
          </div>
          <CardTitle className="fs-3">{title}</CardTitle>
          <CardText>{overview}</CardText>
        </CardBody>
        <CardFooter className="p-0 border-0 bg-light">
          <Skills skills={skills} projectIndex={projectIndex} />
        </CardFooter>
        <i /> {/* improves look without bootstrap css mod */}
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
    overview: PropTypes.string.isRequired,
  }),
};

export default FEWDProject;
