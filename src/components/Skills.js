import React from "react";
import PropTypes from "prop-types";

import Skill from "./Skill";


function Skills(props) {

  const skills = props.skills.map((skill, index) =>
    <Skill skill={skill} key={index}/>
  )

  return(
    <div className="skills">
      {skills}
    </div>
  );
}

Skills.propTypes = {
  skills: PropTypes.array.isRequired
};

export default Skills;