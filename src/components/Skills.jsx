import React from "react";
import PropTypes from "prop-types";
import Skill from "./Skill";

function Skills(props) {
  const { projectIndex, skills } = props;

  return (
    <div className="d-flex justify-content-around flex-wrap px-0 py-4">
      {skills.map((skill, index) => (
        <Skill
          skill={skill}
          key={index}
          index={index}
          projectIndex={projectIndex}
          skillIndex={index}
        />
      ))}
    </div>
  );
}

Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  projectIndex: PropTypes.number.isRequired,
};

export default Skills;
