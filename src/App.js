import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import logo from './logo.svg';
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


// Application Components
import MainNav from "./components/MainNav"
import Projects from "./components/Projects"
import Heading from "./components/Heading"
import Footer from "./components/Footer"

import E404 from "./components/E404";



const PROJECTS = [
  {
    title: "Project One",
    photo: "https://placehold.it/700x400",
    sourcrUrl: "https://github.com/anthony0030/techdegree-project-01",
    url: " https://anthony0030.github.io/techdegree-project-01",
    codayBadgeLink: "https://www.codacy.com/app/anthony0030/techdegree-project-01",
    codayBadgeIcon: "https://api.codacy.com/project/badge/Grade/5ca7a91d6de340abbe125cae4961e50c",
    description: "PROJECT DESCRIPTION HERE!!!!"
  },
  {
    title: "Project Two",
    photo: "https://placehold.it/700x400",
    sourcrUrl: "https://github.com/anthony0030/techdegree-project-02",
    url: " https://anthony0030.github.io/techdegree-project-02",
    codayBadgeLink: "https://www.codacy.com/app/anthony0030/techdegree-project-02",
    codayBadgeIcon: "https://api.codacy.com/project/badge/Grade/f4cb99b5c0ee48ab8ca4adceb8f5aa51",
    description: "PROJECT DESCRIPTION HERE!!!!"
  },
  {
    title: "Project Three",
    photo: "https://placehold.it/700x400",
    sourcrUrl: "https://github.com/anthony0030/techdegree-project-03",
    url: " https://anthony0030.github.io/techdegree-project-03",
    codayBadgeLink: "https://www.codacy.com/app/anthony0030/techdegree-project-03",
    codayBadgeIcon: "https://api.codacy.com/project/badge/Grade/f9c69f0b12f840709f96a1b8e7beba07",
    description: "PROJECT DESCRIPTION HERE!!!!"
  },
  {
    title: "Project Four",
    photo: "https://placehold.it/700x400",
    sourcrUrl: "https://github.com/anthony0030/techdegree-project-04",
    url: " https://anthony0030.github.io/techdegree-project-04",
    codayBadgeLink: "https://www.codacy.com/app/anthony0030/techdegree-project-04",
    codayBadgeIcon: "https://api.codacy.com/project/badge/Grade/0b84447f14204f728afd550ad62f1a96",
    description: "PROJECT DESCRIPTION HERE!!!!"
  },
  { 
    title: "Project Five",
    photo: "https://placehold.it/700x400",
    sourcrUrl: "https://github.com/anthony0030/techdegree-project-05",
    url: " https://anthony0030.github.io/techdegree-project-05",
    codayBadgeLink: "https://www.codacy.com/app/anthony0030/techdegree-project-05",
    codayBadgeIcon: "https://api.codacy.com/project/badge/Grade/19a44b27eef448da9443ab3664cf64ab",
    description: "PROJECT DESCRIPTION HERE!!!!"
  },
  {
    title: "Project Six",
    photo: "https://placehold.it/700x400",
    sourcrUrl: "https://github.com/anthony0030/techdegree-project-06",
    url: " https://anthony0030.github.io/techdegree-project-06",
    codayBadgeLink: "https://www.codacy.com/app/anthony0030/techdegree-project-06",
    codayBadgeIcon: "https://api.codacy.com/project/badge/Grade/d658f87a7c084292b2ec59adfd35c5f8",
    description: "PROJECT DESCRIPTION HERE!!!!"
  },
  {
    title: "Project Seven",
    photo: "https://placehold.it/700x400",
    sourcrUrl: "https://github.com/anthony0030/techdegree-project-07",
    url: " https://anthony0030.github.io/techdegree-project-07",
    codayBadgeLink: "https://www.codacy.com/app/anthony0030/techdegree-project-07",
    codayBadgeIcon: "https://api.codacy.com/project/badge/Grade/8ed9891faa9e4170a6d7694fabe70aec",
    description: "PROJECT DESCRIPTION HERE!!!!"
  },
  {
    title: "Project Eight",
    photo: "https://placehold.it/700x400",
    sourcrUrl: "https://github.com/anthony0030/techdegree-project-08",
    url: " https://anthony0030.github.io/techdegree-project-08",
    codayBadgeLink: "https://www.codacy.com/app/anthony0030/techdegree-project-08",
    codayBadgeIcon: "https://api.codacy.com/project/badge/Grade/cb18dfce7f394a33ac8851cb8f4899ba",
    description: "PROJECT DESCRIPTION HERE!!!!"
  },
  {
    title: "Project Nine",
    photo: "https://placehold.it/700x400",
    sourcrUrl: "https://github.com/anthony0030/techdegree-project-09",
    url: " https://anthony0030.github.io/techdegree-project-09",
    codayBadgeLink: "https://www.codacy.com/app/anthony0030/techdegree-project-09",
    codayBadgeIcon: "https://api.codacy.com/project/badge/Grade/c21087afd9644182b32ae612d47f5240",
    description: "PROJECT DESCRIPTION HERE!!!!"
  },
  {
    title: "Project Ten",
    photo: "https://placehold.it/700x400",
    sourcrUrl: "https://github.com/anthony0030/techdegree-project-10",
    url: " https://anthony0030.github.io/techdegree-project-10",
    codayBadgeLink: "https://www.codacy.com/app/anthony0030/techdegree-project-10",
    codayBadgeIcon: "https://api.codacy.com/project/badge/Grade/d55409a80c6543f8bb7b9659afd19852",
    description: "PROJECT DESCRIPTION HERE!!!!"
  },
  {
    title: "Project Eleven",
    photo: "https://placehold.it/700x400",
    sourcrUrl: "https://github.com/anthony0030/techdegree-project-11",
    url: " https://anthony0030.github.io/techdegree-project-11",
    codayBadgeLink: "https://www.codacy.com/app/anthony0030/techdegree-project-11",
    codayBadgeIcon: "https://api.codacy.com/project/badge/Grade/630d8b9691f349d5bd6f37c534a23498",
    description: "PROJECT DESCRIPTION HERE!!!!"
  },
  {
    title: "Project twelve",
    photo: "https://placehold.it/700x400",
    sourcrUrl: "https://github.com/anthony0030/techdegree-project-12",
    url: " https://anthony0030.github.io/techdegree-project-12",
    codayBadgeLink: "https://www.codacy.com/app/anthony0030/techdegree-project-12",
    codayBadgeIcon: "https://api.codacy.com/project/badge/Grade/933fdff7981d4d92894f2ffafb2f00b9",
    description: "PROJECT DESCRIPTION HERE!!!!"
  }
]






class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <MainNav logo={logo} title="Start Bootstrap"/>
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
