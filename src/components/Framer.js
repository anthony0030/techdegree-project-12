import React from "react";

import Heading from "./Heading";


import MainNav from "./MainNav";
import Footer from "./Footer";


function Projects(props) {
  return (
    <div>
    <MainNav root={props.match.params.root} />
      <Heading title="Anthony Veaudry's" subtitle="Portfolio"/>
      <div className="row">

      </div>
      <Footer text="Copyright &copy; veaudry.pro 2018" href="https://veaudry.pro"/>
    </div>
  );
}

export default Projects;