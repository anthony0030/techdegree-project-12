import React from "react";
import PropTypes from "prop-types";

import Skills from "./Skills";
import Icon from "./Icon";

function Project(props) {
  return (
    <div className="col-lg-4 col-sm-6 portfolio-item">
      <div className="card h-100">
        <a href={props.url} target="_blank" className="enlarge-icon">
          <div>
          <Icon i="enlarge"/>
          </div>
        </a>
        <img className="card-img-top" src={props.photo} alt="Project Screenshot" />

        <div className="card-body">
          <div className="card-buttons">
            <a href={props.sourcrUrl} target="_blank" className="btn btn-dark" >View Source &lt;&#47;&gt;</a>
            <a href={props.codacyBadgeLink} target="_blank" className="btn btn-dark" >View Quality &#9881;</a>

          </div>
          <h4 className="card-title project-title">{props.title}</h4>
          <p className="card-text">{props.description}</p>
        </div>
        <Skills skills={props.skills}/>
      </div>
    </div>
  );
}


Project.propTypes = {
  title: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.array,
  sourcrUrl: PropTypes.string,
  url: PropTypes.string
};

export default Project;