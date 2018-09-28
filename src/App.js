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
    codacyBadgeLink: "https://www.codacy.com/app/anthony0030/techdegree-project-01",
    codacyBadgeIcon: "https://api.codacy.com/project/badge/Grade/5ca7a91d6de340abbe125cae4961e50c",
    description: "Customize a personal online profile by adding graphics, customizing text, and improving the look of a web page using Cascading Style Sheets, the formatting language of the web. Share your finished project on GitHub, a website used by teams of programmers to share and work on programming code."
  },
  {
    title: "Project Two",
    photo: "https://placehold.it/700x400",
    sourcrUrl: "https://github.com/anthony0030/techdegree-project-02",
    url: " https://anthony0030.github.io/techdegree-project-02",
    codacyBadgeLink: "https://www.codacy.com/app/anthony0030/techdegree-project-02",
    codacyBadgeIcon: "https://api.codacy.com/project/badge/Grade/f4cb99b5c0ee48ab8ca4adceb8f5aa51",
    description: "Designing web pages that look and function well on multiple screen sizes is an essential skill for a web developer. Using HTML, CSS, and responsive design, you'll create a mobile-first web page with a layout that adjusts to fit mobile phones, tablets and desktop displays."
  },
  {
    title: "Project Three",
    photo: "https://placehold.it/700x400",
    sourcrUrl: "https://github.com/anthony0030/techdegree-project-03",
    url: " https://anthony0030.github.io/techdegree-project-03",
    codacyBadgeLink: "https://www.codacy.com/app/anthony0030/techdegree-project-03",
    codacyBadgeIcon: "https://api.codacy.com/project/badge/Grade/f9c69f0b12f840709f96a1b8e7beba07",
    description: "Web forms appear everywhere online: forms allow users to order books, sign up for web sites, and post to Facebook. This project challenges you to build a responsive, mobile-first registration form using a variety of HTML form elements."
  },
  {
    title: "Project Four",
    photo: "https://placehold.it/700x400",
    sourcrUrl: "https://github.com/anthony0030/techdegree-project-04",
    url: " https://anthony0030.github.io/techdegree-project-04",
    codacyBadgeLink: "https://www.codacy.com/app/anthony0030/techdegree-project-04",
    codacyBadgeIcon: "https://api.codacy.com/project/badge/Grade/0b84447f14204f728afd550ad62f1a96",
    description: "Interactive image galleries are a common feature of many websites, from photo sites to e-commerce applications. Use HTML, CSS and the popular programming language JavaScript to create an interactive, searchable gallery of photos."
  },
  { 
    title: "Project Five",
    photo: "https://placehold.it/700x400",
    sourcrUrl: "https://github.com/anthony0030/techdegree-project-05",
    url: " https://anthony0030.github.io/techdegree-project-05",
    codacyBadgeLink: "https://www.codacy.com/app/anthony0030/techdegree-project-05",
    codacyBadgeIcon: "https://api.codacy.com/project/badge/Grade/19a44b27eef448da9443ab3664cf64ab",
    description: "Sass is an important tool in a modern Front End Web Developer’s toolbox. It's used by many developers to make styling web pages with CSS easier and faster. Create a style guide that can act as your own personal and custom Bootstrap that you can drop into any of your projects to speed up styling, layout and development in general."
  },
  {
    title: "Project Six",
    photo: "https://placehold.it/700x400",
    sourcrUrl: "https://github.com/anthony0030/techdegree-project-06",
    url: " https://anthony0030.github.io/techdegree-project-06",
    codacyBadgeLink: "https://www.codacy.com/app/anthony0030/techdegree-project-06",
    codacyBadgeIcon: "https://api.codacy.com/project/badge/Grade/d658f87a7c084292b2ec59adfd35c5f8",
    description: "Build an HTML5 video player using JavaScript and the HTML5 Video API. Video, and the interface used to control the video, is increasingly important for many different kinds of web applications, including web site landing pages, blogs, podcasts, product marketing and training."
  },
  {
    title: "Project Seven",
    photo: "https://placehold.it/700x400",
    sourcrUrl: "https://github.com/anthony0030/techdegree-project-07",
    url: " https://anthony0030.github.io/techdegree-project-07",
    codacyBadgeLink: "https://www.codacy.com/app/anthony0030/techdegree-project-07",
    codacyBadgeIcon: "https://api.codacy.com/project/badge/Grade/8ed9891faa9e4170a6d7694fabe70aec",
    description: "In this project, you'll create a browser version of “Wheel of Success”, a word guessing game. You’ll use Javascript to come up with a random phrase that players will try to guess by entering different letters into the program."
  },
  {
    title: "Project Eight",
    photo: "https://placehold.it/700x400",
    sourcrUrl: "https://github.com/anthony0030/techdegree-project-08",
    url: " https://anthony0030.github.io/techdegree-project-08",
    codacyBadgeLink: "https://www.codacy.com/app/anthony0030/techdegree-project-08",
    codacyBadgeIcon: "https://api.codacy.com/project/badge/Grade/cb18dfce7f394a33ac8851cb8f4899ba",
    description: "Master Scaleable Vector Graphics. SVG graphics are quickly becoming one of the most widely used graphic formats on the web. Modernize the user interface of a web page by adding, styling and optimizing SVG graphics."
  },
  {
    title: "Project Nine",
    photo: "https://placehold.it/700x400",
    sourcrUrl: "https://github.com/anthony0030/techdegree-project-09",
    url: " https://anthony0030.github.io/techdegree-project-09",
    codacyBadgeLink: "https://www.codacy.com/app/anthony0030/techdegree-project-09",
    codacyBadgeIcon: "https://api.codacy.com/project/badge/Grade/c21087afd9644182b32ae612d47f5240",
    description: "Build an interactive dashboard for a web application using advanced web techniques including SVG graphics and JavaScript programming. The project involves creating tables, charts, graphics and other user interface components in a manner that promotes interactivity and usability."
  },
  {
    title: "Project Ten",
    photo: "https://placehold.it/700x400",
    sourcrUrl: "https://github.com/anthony0030/techdegree-project-10",
    url: " https://anthony0030.github.io/techdegree-project-10",
    codacyBadgeLink: "https://www.codacy.com/app/anthony0030/techdegree-project-10",
    codacyBadgeIcon: "https://api.codacy.com/project/badge/Grade/d55409a80c6543f8bb7b9659afd19852",
    description: "Many sites — Twitter, Facebook, IMDB, and Wikipedia to name a few — offer a vast sea of data that you can access and display on your own web pages. Using JavaScript, you’ll create an employee directory by communicating with a third-party API (Application Programming Interface)."
  },
  {
    title: "Project Eleven",
    photo: "https://placehold.it/700x400",
    sourcrUrl: "https://github.com/anthony0030/techdegree-project-11",
    url: " https://anthony0030.github.io/techdegree-project-11",
    codacyBadgeLink: "https://www.codacy.com/app/anthony0030/techdegree-project-11",
    codacyBadgeIcon: "https://api.codacy.com/project/badge/Grade/630d8b9691f349d5bd6f37c534a23498",
    description: "Create an image gallery using React and the Flickr API. You will build the gallery components, add to the supplied CSS and set up routing."
  },
  {
    title: "Project twelve",
    photo: "https://placehold.it/700x400",
    sourcrUrl: "https://github.com/anthony0030/techdegree-project-12",
    url: " https://anthony0030.github.io/techdegree-project-12",
    codacyBadgeLink: "https://www.codacy.com/app/anthony0030/techdegree-project-12",
    codacyBadgeIcon: "https://api.codacy.com/project/badge/Grade/933fdff7981d4d92894f2ffafb2f00b9",
    description: "The final capstone project for the Front End Web Development Techdegree Program. Show off your skill and expertise in the tools and techniques you've learned in the Techdegree by building a professional portfolio to showcase your work."
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
