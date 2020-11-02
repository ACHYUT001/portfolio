import React from "react";

import "./App.css";
import NavBar from "../../features/navbar/NavBar";
import Home from "../../features/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projects from "../../features/projects/Projects";
import About__Me from "../../features/about__me/About__Me";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/aboutme">
            <About__Me />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          {/* <Route path="/">
            <Redirect to="/home" />
            
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
