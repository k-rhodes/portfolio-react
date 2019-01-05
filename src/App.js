import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Resume from "./Resume";
import Contact from "./Contact";
import Nav from "./Nav";
import Projects from "./Projects";

class App extends Component {
  render() {
    return (
      <div>
        hello
        <Router>
          <div>
            <Nav />
            <Route exact path="/" component={Home} />
            <Route path="/resume" component={Resume} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
