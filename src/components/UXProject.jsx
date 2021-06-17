import React from "react";
import PropTypes from "prop-types";

import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

function UXProject(props) {
  const { project } = props;

  const { overview, photo, title, id } = project;

  return (
    <div className="col-lg-6 col-xl-4 portfolio-item">
      <Link to={`/ux/${id}`} className="link-unstyled">
        <Card className="h-100 cursor-pointer">
          <CardImg top width="100%" src={photo} alt="Project Screenshot" />
          <CardBody>
            <div className="card-buttons ml-2"></div>
            <CardTitle>{parse(title)}</CardTitle>
            <CardText>{parse(overview)}</CardText>
          </CardBody>
        </Card>
      </Link>
    </div>
  );
}

UXProject.propTypes = {
  projectIndex: PropTypes.number.isRequired,
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      project: PropTypes.string,
    }),
  }),
};

export default UXProject;
