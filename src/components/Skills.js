import React from "react";
import PropTypes from "prop-types";

// Application Components
import Skill from "./Skill";


function Skills(props) {

  const {projectIndex} = props;
  const skills = props.skills.map((skill, index) =>
    <Skill skill={skill} key={index} index={index} projectIndex={projectIndex} skillIndex={index}/>
  )

  return(
    <div className="skills">
      {skills}
    </div>
  );
}

Skills.propTypes = {
  skills: PropTypes.array.isRequired,
  projectIndex: PropTypes.number.isRequired
};

export default Skills;