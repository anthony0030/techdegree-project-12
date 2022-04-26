import React from "react";

import { NavLink } from "react-router-dom";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from "reactstrap";

import { ScrollBar } from "components";

import logo from "../assets/images/logo.svg";

function MainNav() {
  return (
    <Navbar color="dark" expand="lg" fixed="top" container={true} dark={true}>
      <ScrollBar />
      <NavbarBrand href="/">
        <img
          src={logo}
          alt="logo"
          className="me-2"
          height="40px"
          width="40px"
        />
        Anthony Veaudry
      </NavbarBrand>

      <NavbarToggler onClick={function noRefCheck() {}} />
      <Collapse navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/fewd">
              FEWD Portfolio
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/ux">
              UX Portfolio
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default MainNav;
