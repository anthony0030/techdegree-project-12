import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import logo from './logo.svg';
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css'


// Application Components
import MainNav from "./components/MainNav"
import Projects from "./components/Projects"
import Heading from "./components/Heading"
import Footer from "./components/Footer"

import E404 from "./components/E404";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div class="App">
          <MainNav title="Start Bootstrap"/>
          <div class="container">
            <Heading title="Page Heading" subtitle="Secondary Text"/>
            <Switch>
              <Route path="/home" component={Projects} />
              <Route path="/about" component={E404} />
              <Route path="/Services" component={E404} />
              <Route path="/Contact" component={E404} />
              <Route component={E404}/>
            </Switch>
          </div>
          <Footer text="Copyright &copy; Your Website 2018"/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
