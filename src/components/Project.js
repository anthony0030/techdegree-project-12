import React from "react";
import PropTypes from "prop-types";
import CodayBadge from "./CodayBadge";

function Project(props) {
  return (
    <div className="col-lg-4 col-sm-6 portfolio-item">
      <div className="card h-100">
{/*        <a href={props.url}><img className="card-img-top" src={props.photo} alt="" /></a>*/}
<iframe height="450" className="card-img-top" title={props.title} src={props.url}></iframe>

        <div className="card-body">
          <h4 className="card-title">
            <a href={props.url}>{props.title}</a>
          </h4>
          <CodayBadge codayBadgeLink={props.codayBadgeLink} codayBadgeIcon={props.codayBadgeIcon}/>
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