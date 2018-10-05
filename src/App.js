import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import logo from './logo.svg';
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


// Application Components
import MainNav from "./components/MainNav"
import Footer from "./components/Footer"

//Aplication Pages
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import E404 from "./components/E404";





import PROJECTS from "./components/ProjectsData";




class App extends Component {

  componentDidMount() {
    window.$ = window.jQuery = require('jquery');
    window.$('[data-toggle="tooltip"]').tooltip();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <MainNav logo={logo} title="Anthony's portfolio"/>
          <div className="mainContainer container">
            <Switch>
              <Redirect exact from="/index.html" to="/"/>
              <Redirect exact from="/index.php" to="/"/>
              <Redirect exact from="/" to="/home"/>
              <Route exact path="/home" render={ () => <Projects data={PROJECTS} /> } />
              <Route exact path="/about" component={E404} />
              <Route exact path="/Services" component={E404} />
              <Route exact path="/Contact" component={Contact} />
              <Route exact component={E404}/>
            </Switch>
          </div>
          <Footer text="Copyright &copy; veaudry.pro 2018" href="https://veaudry.pro"/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
