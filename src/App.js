import React, { Component } from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";


// Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";


// Application Styles
import "./App.css";


// Application Pages
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import E404 from "./components/pages/E404";

// Application Components
import Footer from "./components/Footer";


class App extends Component {

  componentDidMount() {
    window.$ = window.jQuery = require("jquery");
    window.$("[data-toggle='tooltip']").tooltip();

    window.onscroll = function() {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("myHorizontalBar").style.width = scrolled + "%";
    }
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
              <Route exact component={E404}/>

            </Switch>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
