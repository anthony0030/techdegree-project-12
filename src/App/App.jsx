import React from "react";
import { Route, Switch } from "react-router-dom";

// Application Styles
import "../assets/scss/index.scss";

import { Projects, Contact, E404 } from "views";
import { Footer, MainNav } from "components";

function App() {
  return (
    <div className="mainContainer container App">
      <MainNav />
      <Switch>
        <Route exact path="/FEWD/:project?" component={Projects} />
        <Route exact path="/UX/:project?" component={Projects} />
        <Route exact path="/Contact" component={Contact} />
        <Route component={E404}/>
      </Switch>
      <Footer />
    </div>
  )
}

export default App;
