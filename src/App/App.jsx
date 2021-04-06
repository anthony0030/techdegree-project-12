import React from "react";
import {Route, Switch} from "react-router-dom";

// Application Styles
import "./App.scss";

// Application Pages
import Projects from "../views/Projects";
import Contact from "../views/Contact";
import E404 from "../views/E404";

// Application Components
import MainNav from "../components/MainNav/MainNav";
import Footer from "../components/Footer/Footer";

function App() {
  return (
    <div className="mainContainer container App">
      <MainNav />
      <Switch>
        <Route exact path="/home/:project?" component={Projects} />
        <Route exact path="/Contact" component={Contact} />
        <Route component={E404}/>
      </Switch>
      <Footer />
    </div>
  )
}

export default App;
