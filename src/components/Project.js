import React from "react";
import PropTypes from "prop-types";

function Project(props) {
  return (
    <div class="col-lg-4 col-sm-6 portfolio-item">
      <div class="card h-100">
        <a href="#"><img class="card-img-top" src={props.photo} alt="" /></a>
        <div class="card-body">
          <h4 class="card-title">
            <a href="#">{props.title}</a>
          </h4>
          <p class="card-text">{props.description}</p>
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