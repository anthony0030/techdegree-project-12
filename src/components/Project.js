import React from "react";
import PropTypes from "prop-types";

function Project(props) {
  return (
    <div className="col-lg-4 col-sm-6 portfolio-item">
      <div className="card h-100">
        <a href="#"><img className="card-img-top" src={props.photo} alt="" /></a>
        <div className="card-body">
          <h4 className="card-title">
            <a href="#">{props.title}</a>
          </h4>
          <p className="card-text">{props.description}</p>
        </div>
      </div>
    </div>
  );
}


Project.propTypes = {
  title: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Project;