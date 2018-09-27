import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css'


// Application Components
import MainNav from "./components/MainNav"
import Projects from "./components/Projects"
import Heading from "./components/Heading"
import Pagination from "./components/Pagination"
import Footer from "./components/Footer"


class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNav title="Start Bootstrap"/>

    {/*<!-- Page Content -->*/}
    <div class="container">

      {/*<!-- Page Heading -->*/}
      <Heading title="Page Heading" subtitle="Secondary Text"/>

      <Projects />

      <Pagination />

    </div> 
    {/*.container*/}

    <Footer text="Copyright &copy; Your Website 2018"/>
      </div>
      // .App
    );
  }
}

export default App;
