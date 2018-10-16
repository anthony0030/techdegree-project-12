import React from "react";
import PropTypes from "prop-types";

import Skills from "./Skills";
import Framer from "./Framer";

function Project(props) {
  return (
    <div className="col-lg-6 col-xl-4 portfolio-item">
      <div className="card h-100" tabIndex="0">
        <Framer url={props.url} title={props.title} preTitle={props.preTitle}/>
        <img className="card-img-top" src={props.photo} alt="Project Screenshot" />

        <div className="card-body">
          <div className="card-buttons">
            <a href={props.sourcrUrl} target="_blank" rel="noreferrer" className="btn btn-dark" >View Source &lt;&#47;&gt;</a>
            <a href={props.codacyBadgeLink} target="_blank" rel="noreferrer" className="btn btn-dark" >View Quality <span className="spin">&#9881;</span></a>

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
  preTitle: PropTypes.string,
  photo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.array,
  sourcrUrl: PropTypes.string,
  url: PropTypes.string
};

export default Project;