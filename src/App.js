import React, { Component } from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";


// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.css";


// Application Styles
import "./App.css";


// Application Pages
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import E404 from "./components/pages/E404";

// Application Components
import MainNav from "./components/MainNav";
import Footer from "./components/Footer";


class App extends Component {


  constructor(props) {
    super(props);
    // this.toggle = this.toggle.bind(this);
    this.state = {
      navIsOpen: false
    };
  }


  toggleNav =(event) => {
    this.setState({
      navIsOpen: !this.state.navIsOpen
    });
  }

  componentDidMount() {
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
        <div className="mainContainer container App">
          <Route path="/:root?" render={props => (
            <MainNav match={props.match} toggleNav={this.toggleNav} isOpen={this.state.navIsOpen}/>
            )}/>
          <Switch>

            <Route exact path="/:root?/home" component={Projects} />
            <Route exact path="/:root?/Contact" component={Contact} />

            <Redirect exact from="/:root?/index.html" to="/"/>
            <Redirect exact from="/:root?/index.php" to="/"/>
            <Redirect exact from="/" to="/home"/>
            <Redirect exact from="/techdegree-project-12" to="/techdegree-project-12/home"/>

            <Route component={E404}/>

          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
