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
let toolTip;


function Skill(props) {

  switch(props.skill) {

    case "html":
      icon = htmlBadge;
      toolTip= "HTML knowledge was used for this project";
      alt = "HTML Badge Icon";
    break;

    case "css":
      icon = cssBadge;
      toolTip= "CSS knowledge was used for this project";
      alt = "CSS Badge Icon";
    break;

    case "js":
      icon = jsBadge;
      toolTip= "JavaScript knowledge was used for this project";
      alt = "JS Badge Icon";
    break;

    case "sass":
      icon = sassBadge;
      toolTip= "SASS knowledge was used for this project";
      alt = "SASS Badge Icon";
    break;

    case "jade":
      icon = jadeBadge;
      toolTip= "JADE knowledge was used for this project";
      alt = "JADE Badge Icon";
    break;

    case "react":
      icon = reactBadge;
      toolTip= "REACT knowledge was used for this project";
      alt = "REACT Badge Icon";
    break;

    case "cookie":
      icon = cookieBadge;
      toolTip= "This project makes use of cookies";
      alt = "Cookie Badge Icon";
    break;

    default:
      icon = cssBadge;
      alt = "Error with Icon";
  }

  return (
   <img src={icon} alt={alt} className="skill-badge" data-toggle="tooltip" data-placement="top" title={toolTip}/>
  );
}

Skill.propTypes = {
  skill: PropTypes.string.isRequired
};

export default Skill;