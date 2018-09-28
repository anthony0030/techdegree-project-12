import React from "react";
import PropTypes from "prop-types";

function codayBadge(props) {
  return (
  <a href={props.codayBadgeLink}>
    <img src={props.codayBadgeIcon} alt="codayBadgeIcon" className="codacy-badge"/>
  </a>
  );
}

codayBadge.propTypes = {
  codayBadgeLink: PropTypes.string.isRequired,
  codayBadgeIcon: PropTypes.string.isRequired,
};




export default codayBadge;