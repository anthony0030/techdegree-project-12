import React from "react";
import PropTypes from "prop-types";


// Application Badges
import htmlBadge from "./Badges/html.png"
import cssBadge from "./Badges/css.png"
import jsBadge from "./Badges/js.png"
import sassBadge from "./Badges/sass.png"
import jadeBadge from "./Badges/jade.png"
import reactBadge from "./Badges/react.png"
import cookieBadge from "./Badges/cookie.png"


let icon;
let alt;


function Skill(props) {

  switch(props.skill) {

    case "html":
      icon = htmlBadge;
      alt = "HTML Badge Icon";
    break;

    case "css":
      icon = cssBadge;
      alt = "CSS Badge Icon";
    break;

    case "js":
      icon = jsBadge;
      alt = "JS Badge Icon";
    break;

    case "sass":
      icon = sassBadge;
      alt = "SASS Badge Icon";
    break;

    case "jade":
      icon = jadeBadge;
      alt = "JADE Badge Icon";
    break;

    case "react":
      icon = reactBadge;
      alt = "REACT Badge Icon";
    break;

    case "cookie":
      icon = cookieBadge;
      alt = "Cookie Badge Icon";
    break;

    default:
      icon = cssBadge;
      alt = "Error with Icon";
  }

  return (
   <img src={icon} alt={alt} className="skill-badge" />
  );
}

Skill.propTypes = {
  skill: PropTypes.string.isRequired
};

export default Skill;