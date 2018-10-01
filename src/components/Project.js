import React from "react";
import PropTypes from "prop-types";
import CodacyBadge from "./CodacyBadge";

function Project(props) {
  return (
    <div className="col-lg-4 col-sm-6 portfolio-item">
      <div className="card h-100">
        <a href={props.url} target="_blank" className="d-md-none d-xl-none"><img className="card-img-top" src={props.photo} alt="" /></a>
        <iframe height="450" className="card-img-top d-none d-md-block" title={props.title} src={props.url} />
        <div className="card-body">
          <h4 className="card-title">
            <a href={props.url} target="_blank">{props.title}</a>
            &nbsp;
            <div className="SuperCode">
              <a href={props.sourcrUrl} target="_blank" >&lt;/&gt;</a>
            </div>
          </h4>
          <CodacyBadge codacyBadgeLink={props.codacyBadgeLink} codacyBadgeIcon={props.codacyBadgeIcon}/>
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