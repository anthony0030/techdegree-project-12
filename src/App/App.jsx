import React from "react";
import { Route, Switch } from "react-router-dom";

// Application Styles
import "../assets/scss/index.scss";

import { FEWD, UX, Contact, Home, E404, About } from "views";
import { Footer, MainNav } from "components";

function App() {
  return (
    <div className="mainContainer container App">
      <MainNav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/fewd/:project?" component={FEWD} />
        <Route exact path="/ux/:project?" component={UX} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route component={E404}/>
      </Switch>
      <Footer />
    </div>
  )
}

export default App;
