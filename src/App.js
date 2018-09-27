import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css'


// Application Components
import MainNav from "./components/MainNav"
import Project from "./components/Project"
import Heading from "./components/Heading"
import Pagination from "./components/Pagination"
import Footer from "./components/Footer"


class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNav />

    {/*<!-- Page Content -->*/}
    <div class="container">

      {/*<!-- Page Heading -->*/}
      <Heading title="Page Heading" subtitle="Secondary Text"/>

      <div class="row">


        <Project
          title="Project One"
          photo="http://placehold.it/700x400"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!"
        />


        <Project
          title="Project Two"
          photo="http://placehold.it/700x400"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!"
        />


        <Project
          title="Project Three"
          photo="http://placehold.it/700x400"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!"
        />


        <Project
          title="Project Four"
          photo="http://placehold.it/700x400"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!"
        />


        <Project 
          title="Project Five"
          photo="http://placehold.it/700x400"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!"
        />


        <Project
          title="Project Six"
          photo="http://placehold.it/700x400"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!"
        />



      </div>
      {/*<!-- /.row -->*/}

      {/*<!-- Pagination -->*/}
      <Pagination />

    </div>
    {/*<!-- /.container -->*/}

    {/*<!-- Footer -->*/}
    <Footer />
      </div>
    );
  }
}

export default App;
