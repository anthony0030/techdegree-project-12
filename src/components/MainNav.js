import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
  } from 'reactstrap';

import {NavLink} from "react-router-dom";

import logo from "./logo.svg";
import ScrollBar from "./ScrollBar";




class MainNav extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }


  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  render() {
    const title = "Anthony Veaudry";
    let rootPath = "/";
    if( this.props.match.params.root === "techdegree-project-12" ){
      rootPath = "/techdegree-project-12/";
    }
    return (
      <Navbar color="light" light expand="md" className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <ScrollBar />
          <NavbarBrand href={`${rootPath}home`}>
            <img src={logo} alt="logo" className="main-logo" />{title}
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
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
}

export default MainNav;