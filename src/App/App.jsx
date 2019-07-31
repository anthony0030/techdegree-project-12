import React, { Component } from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";


// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.css";


// Application Styles
import "./App.sass";

// Application Pages
import Projects from "../views/Projects";
import Contact from "../views/Contact";
import E404 from "../views/E404";

// Application Components
import MainNav from "../components/MainNav/MainNav";
import Footer from "../components/Footer/Footer";


class App extends Component {

  render() {
    const baseName = process.env.REACT_APP_BASE_NAME || "";

    return (
      <BrowserRouter basename={`/${baseName}`}>
        <div className="mainContainer container App">
          <MainNav />
          <Switch>
            <Redirect exact from="/" to="/home"/>
            <Route exact path="/home/:project?" component={Projects} />
            <Route exact path="/Contact" component={Contact} />
            <Route component={E404}/>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
