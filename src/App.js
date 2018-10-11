import React, { Component } from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";


//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


//Aplication Styles
import "./App.css";


//Aplication Pages
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AppPhoto12 from "./components/AppPhotos/12b.png";
import E404 from "./components/E404";





class App extends Component {

  componentDidMount() {
    window.$ = window.jQuery = require("jquery");
    window.$("[data-toggle='tooltip']").tooltip();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          
          <div className="mainContainer container">
            <Switch>
              <Redirect exact from="/:root?/index.html" to="/"/>
              <Redirect exact from="/:root?/index.php" to="/"/>
              <Redirect exact from="/" to="/home"/>
              <Redirect exact from="/techdegree-project-12" to="/techdegree-project-12/home"/>
              <Route exact path="/:root?/home" component={Projects} />
              <Route exact path="/:root?/Contact" component={Contact} />
              <Route exact path="/:root?/projectThumbnail" render={ () => <img src={AppPhoto12} alt="Project Screenshot" className="project-12-thumbnail"/> } />
              <Route exact component={E404}/>
            </Switch>
          </div>
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
