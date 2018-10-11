import React from "react";
import PropTypes from "prop-types";



import Skill from "./Skill";



function Skills(props) {

  return (
    <div className="skils">
    {
      props.skills.map(
        (skill, index) =>
          <Skill skill={skill} key={index}/>
        )
      }
    </div>
  );
}

Skills.propTypes = {
  skills: PropTypes.array.isRequired
};

export default Skills;