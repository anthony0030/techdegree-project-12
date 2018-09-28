import React from "react";
import PropTypes from "prop-types";

function codacyBadge(props) {
  return (
  <a href={props.codacyBadgeLink}>
    <img src={props.codacyBadgeIcon} alt="codacyBadgeIcon" className="codacy-badge"/>
  </a>
  );
}

codacyBadge.propTypes = {
  codacyBadgeLink: PropTypes.string.isRequired,
  codacyBadgeIcon: PropTypes.string.isRequired,
};




export default codacyBadge;