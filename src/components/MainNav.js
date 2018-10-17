import React from "react";

import logo from "./logo.svg";
import ScrollBar from "./ScrollBar";
import MainNavItem from "./MainNavItem";

const title = "Anthony Veaudry";

function MainNav(props) {
  let rootPath;

  props.root ? rootPath= "/" + props.root + "/" : rootPath= "/";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <ScrollBar />
      <div className="container">
        <img src={logo} alt="logo" className="main-logo" />
        <a className="navbar-brand" href="/home">{title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <MainNavItem text="Home" link={`${rootPath}home`} /> 
            {/* <MainNavItem text="About" link="/about"/> */}
            {/* <MainNavItem text="Services" link="/services"/> */}
            <MainNavItem text="Contact" link={`${rootPath}contact`}/> 
          </ul>
        </div>
      </div>
    </nav>
  );
}


export default MainNav;