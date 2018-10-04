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



//Application Images
import AppPhoto01 from "./AppPhotos/01.png"
import AppPhoto02 from "./AppPhotos/02.png"
import AppPhoto03 from "./AppPhotos/03.png"
import AppPhoto04 from "./AppPhotos/04.png"
import AppPhoto05 from "./AppPhotos/05.png"
import AppPhoto06 from "./AppPhotos/06.png"
import AppPhoto07 from "./AppPhotos/07.png"
import AppPhoto08 from "./AppPhotos/08.png"
import AppPhoto09 from "./AppPhotos/09.png"
import AppPhoto10 from "./AppPhotos/10.png"
import AppPhoto11 from "./AppPhotos/11.png"
import AppPhoto12 from "./AppPhotos/12.png"

const PROJECTS = [
  {
    title: "Personal Profile",
    photo: AppPhoto01,
    sourcrUrl: "https://github.com/anthony0030/techdegree-project-01",
    url: "https://anthony0030.github.io/techdegree-project-01",
    skills: ["html", "css", "js" ,"jade", "sass" , "jquery", "bower"],
    codacyBadgeLink: "https://www.codacy.com/app/anthony0030/techdegree-project-01",
    codacyBadgeIcon: "https://api.codacy.com/project/badge/Grade/5ca7a91d6de340abbe125cae4961e50c",
    description: "In this project, I was given a template to fill my details into. I converted the template into a JADE and the styling to SASS. I then proceeded to add a photo a custom photo gallery. I used the built-in bower functionality of CodeKit to manage the dependencies."
  },
  {
    title: "Responsive Site",
    photo: AppPhoto02,
    sourcrUrl: "https://github.com/anthony0030/techdegree-project-02",
    url: "https://anthony0030.github.io/techdegree-project-02",
    skills: ["html", "css", "jade", "sass"],
    codacyBadgeLink: "https://www.codacy.com/app/anthony0030/techdegree-project-02",
    codacyBadgeIcon: "https://api.codacy.com/project/badge/Grade/f4cb99b5c0ee48ab8ca4adceb8f5aa51",
    description: "In this project, I was given a mock-up for a responsive website. I made the website using JADE and SASS."
  },
  {
    title: "Registration Form",
    photo: AppPhoto03,
    sourcrUrl: "https://github.com/anthony0030/techdegree-project-03",
    url: "https://anthony0030.github.io/techdegree-project-03",
    skills: ["html", "css", "js" ,"jade", "sass", "jquery", "bower"],
    codacyBadgeLink: "https://www.codacy.com/app/anthony0030/techdegree-project-03",
    codacyBadgeIcon: "https://api.codacy.com/project/badge/Grade/f9c69f0b12f840709f96a1b8e7beba07",
    description: "In this project, I was challenged to build a responsive, mobile-first registration form using a variety of HTML form elements. I built it using JADE and SASS. I also added a bunch of plug-ins for form validation."
  },
  {
    title: "Photo Gallery",
    photo: AppPhoto04,
    sourcrUrl: "https://github.com/anthony0030/techdegree-project-04",
    url: "https://anthony0030.github.io/techdegree-project-04",
    skills: ["html", "css", "js" ,"jade", "sass", "jquery", "bower"],
    codacyBadgeLink: "https://www.codacy.com/app/anthony0030/techdegree-project-04",
    codacyBadgeIcon: "https://api.codacy.com/project/badge/Grade/0b84447f14204f728afd550ad62f1a96",
    description: "In this project, I was excited to build a searchable photo gallery. I used JADE and SASS. It also uses a mobile-first design."
  },
  { 
    title: "Web Style Guide",
    photo: AppPhoto05,
    sourcrUrl: "https://github.com/anthony0030/techdegree-project-05",
    url: "https://anthony0030.github.io/techdegree-project-05",
    skills: ["css" , "sass", "bower"],
    codacyBadgeLink: "https://www.codacy.com/app/anthony0030/techdegree-project-05",
    codacyBadgeIcon: "https://api.codacy.com/project/badge/Grade/19a44b27eef448da9443ab3664cf64ab",
    description: "In this project, I was challenged to build a framework like bootstrap from scratch using SASS. It was great splitting the styling into multiple files that compile into one tiny CSS file."
  },
  {
    title: "Video Player",
    photo: AppPhoto06,
    sourcrUrl: "https://github.com/anthony0030/techdegree-project-06",
    url: "https://anthony0030.github.io/techdegree-project-06",
    skills: ["html", "css", "js" ,"jade", "sass", "jquery", "bower"],
    codacyBadgeLink: "https://www.codacy.com/app/anthony0030/techdegree-project-06",
    codacyBadgeIcon: "https://api.codacy.com/project/badge/Grade/d658f87a7c084292b2ec59adfd35c5f8",
    description: "In this project, I Built a video player with closed captions beneath it. The captions are interactive so they highlight when the video is playing and you can click on the text to take you to that part of the video."
  },
  {
    title: "Game Show App",
    photo: AppPhoto07,
    sourcrUrl: "https://github.com/anthony0030/techdegree-project-07",
    url: "https://anthony0030.github.io/techdegree-project-07",
    skills: ["html", "css", "js" ,"jade", "sass", "jquery", "bower"],
    codacyBadgeLink: "https://www.codacy.com/app/anthony0030/techdegree-project-07",
    codacyBadgeIcon: "https://api.codacy.com/project/badge/Grade/8ed9891faa9e4170a6d7694fabe70aec",
    description: "In this project, I created a browser version of “Wheel of Success”, a word guessing game. I used Javascript to come up with a random phrase that players try to guess by entering different letters into the program."
  },
  {
    title: "SVG Animations",
    photo: AppPhoto08,
    sourcrUrl: "https://github.com/anthony0030/techdegree-project-08",
    url: "https://anthony0030.github.io/techdegree-project-08",
    skills: ["html", "css", "js" ,"jade", "sass", "svg"],
    codacyBadgeLink: "https://www.codacy.com/app/anthony0030/techdegree-project-08",
    codacyBadgeIcon: "https://api.codacy.com/project/badge/Grade/cb18dfce7f394a33ac8851cb8f4899ba",
    description: "In this project, I master Scaleable Vector Graphics. I modernized the user interface of a web page by adding, styling, optimizing and animating SVG graphics."
  },
  {
    title: "Web Dashboard",
    photo: AppPhoto09,
    sourcrUrl: "https://github.com/anthony0030/techdegree-project-09",
    url: "https://anthony0030.github.io/techdegree-project-09",
    skills: ["html", "css", "js" ,"jade", "sass", "svg", "bower"],
    codacyBadgeLink: "https://www.codacy.com/app/anthony0030/techdegree-project-09",
    codacyBadgeIcon: "https://api.codacy.com/project/badge/Grade/c21087afd9644182b32ae612d47f5240",
    description: "In this project, I built an interactive dashboard for a web application using advanced web techniques including SVG graphics and JavaScript programming. The project involved creating tables, charts, graphics and other user interface components in a manner that promotes interactivity and usability. I utilized my knowledge of SCSS and JADE to build this project faster"
  },
  {
    title: "Using APIs",
    photo: AppPhoto10,
    sourcrUrl: "https://github.com/anthony0030/techdegree-project-10",
    url: "https://anthony0030.github.io/techdegree-project-10",
    skills: ["html", "css", "js" ,"jade", "sass", "svg", "api", "bower"],
    codacyBadgeLink: "https://www.codacy.com/app/anthony0030/techdegree-project-10",
    codacyBadgeIcon: "https://api.codacy.com/project/badge/Grade/d55409a80c6543f8bb7b9659afd19852",
    description: "In this project, I tapped into an API to render a page with random user data to make an 'employee directory' that populates with random user data."
  },
  {
    title: "React Gallery",
    photo: AppPhoto11,
    sourcrUrl: "https://github.com/anthony0030/techdegree-project-11",
    url: "https://anthony0030.github.io/techdegree-project-11",
    skills: ["html", "css", "js", "api", "react"],
    codacyBadgeLink: "https://www.codacy.com/app/anthony0030/techdegree-project-11",
    codacyBadgeIcon: "https://api.codacy.com/project/badge/Grade/630d8b9691f349d5bd6f37c534a23498",
    description: "In this project, I created an image gallery using React and the Flickr API. I build the gallery components, added the supplied CSS and set up routing."
  },
  {
    title: "Online Portfolio",
    photo: AppPhoto12,
    sourcrUrl: "https://github.com/anthony0030/techdegree-project-12",
    url: "https://anthony0030.github.io/techdegree-project-12",
    skills: ["html", "css", "js", "bootstrap", "react", "jquery", "svg"],
    codacyBadgeLink: "https://www.codacy.com/app/anthony0030/techdegree-project-12",
    codacyBadgeIcon: "https://api.codacy.com/project/badge/Grade/933fdff7981d4d92894f2ffafb2f00b9",
    description: "In this project, I am Show off my skill and expertise in the tools and techniques I have learned in the Treehouse Techdegree by building a professional portfolio to showcase my work."
  }
]






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
