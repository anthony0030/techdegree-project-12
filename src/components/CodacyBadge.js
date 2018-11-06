import React from "react";
import PropTypes from "prop-types";

function codacyBadge(props){
  const { codacyBadgeLink, codacyBadgeIcon } = props;
  return(
    <a href={codacyBadgeLink}>
      <img src={codacyBadgeIcon} alt="codacyBadgeIcon" className="codacy-badge"/>
    </a>
  );
}

codacyBadge.propTypes = {
  codacyBadgeLink: PropTypes.string.isRequired,
  codacyBadgeIcon: PropTypes.string.isRequired
};




export default codacyBadge;