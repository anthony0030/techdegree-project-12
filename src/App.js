import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css'


// Application Components
import MainNav from "./components/MainNav"
import Project from "./components/Project"
import Footer from "./components/Footer"


class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNav />

    {/*<!-- Page Content -->*/}
    <div class="container">

      {/*<!-- Page Heading -->*/}
      <h1 class="my-4">Page Heading
        <small> Secondary Text</small>
      </h1>

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
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">1</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">2</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">3</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>

    </div>
    {/*<!-- /.container -->*/}

    {/*<!-- Footer -->*/}
    <Footer />
      </div>
    );
  }
}

export default App;
