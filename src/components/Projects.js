import React from "react";
import PropTypes from "prop-types";



import Project from "./Project"


function Projects(props) {
  return (
    <div class="row">

      <Project
        title="Project One"
        photo="http://placehold.it/700x400"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!"
      />

      <Project
        title="Project Two"
        photo="http://placehold.it/700x400"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."
      />

      <Project
        title="Project Three"
        photo="http://placehold.it/700x400"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quisquam, error quod sed cumque, odio distinctio velit nostrum temporibus necessitatibus et facere atque iure perspiciatis mollitia recusandae vero vel quam!"
      />

      <Project
        title="Project Four"
        photo="http://placehold.it/700x400"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."
      />

      <Project 
        title="Project Five"
        photo="http://placehold.it/700x400"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."
      />

      <Project
        title="Project Six"
        photo="http://placehold.it/700x400"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque earum nostrum suscipit ducimus nihil provident, perferendis rem illo, voluptate atque, sit eius in voluptates, nemo repellat fugiat excepturi! Nemo, esse."
      />

    </div>
  );
}

Projects.propTypes = {
  // title: PropTypes.string.isRequired,
  // subtitle: PropTypes.string,
};




export default Projects;