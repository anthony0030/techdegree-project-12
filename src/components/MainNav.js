import React from "react";
import { NavLink } from "react-router-dom";
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

// Application Components
import logo from "./logo.svg";
import ScrollBar from "./ScrollBar";

function MainNav(props) {

  const title = "Anthony Veaudry";
  let rootPath = "/";

  if( props.match.params.root === "techdegree-project-12" ){
    rootPath = "/techdegree-project-12/";
  }

  return (
    <Navbar color="light" light expand="md" className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <ScrollBar />
        <NavbarBrand href={`${rootPath}home`}>
          <img src={logo} alt="logo" className="main-logo" />{title}
        </NavbarBrand>
        <NavbarToggler aria-label="Toggle Navigation Menu" onClick={props.toggleNav} />
        <Collapse isOpen={props.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to={`${rootPath}home`}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to={`${rootPath}contact`}>Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
}

export default MainNav;