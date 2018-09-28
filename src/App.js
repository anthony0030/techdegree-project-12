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



const PROJECTS = [
  {
    title: "Project One",
    photo: "http://placehold.it/700x400",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!"
  },
  {
    title: "Project Two",
    photo: "http://placehold.it/700x400",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.",
  },
  {
    title: "Project Three",
    photo: "http://placehold.it/700x400",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quisquam, error quod sed cumque, odio distinctio velit nostrum temporibus necessitatibus et facere atque iure perspiciatis mollitia recusandae vero vel quam!"
  },
  {
    title: "Project Four",
    photo: "http://placehold.it/700x400",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."
  },
  { 
    title: "Project Five",
    photo: "http://placehold.it/700x400",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."
  },
  {
    title: "Project Six",
    photo: "http://placehold.it/700x400",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque earum nostrum suscipit ducimus nihil provident, perferendis rem illo, voluptate atque, sit eius in voluptates, nemo repellat fugiat excepturi! Nemo, esse."
  }
]






class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <MainNav title="Start Bootstrap"/>
          <div className="container">
            <Heading title="Page Heading" subtitle="Secondary Text"/>
            <Switch>
              <Redirect exact from="/" to="/home"/>
              <Route exact path="/home" render={ () => <Projects data={PROJECTS} /> } />
              <Route exact path="/about" component={E404} />
              <Route exact path="/Services" component={E404} />
              <Route exact path="/Contact" component={E404} />
              <Route exact component={E404}/>
            </Switch>
          </div>
          <Footer text="Copyright &copy; Your Website 2018"/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
