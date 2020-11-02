import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "../../features/navbar/NavBar";
import Home from "../../features/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useLocation,
  Redirect,
} from "react-router-dom";
import Projects from "../../features/projects/Projects";
import About__Me from "../../features/about__me/About__Me";
import Counter from "../api/agent";
import { IPageInfo } from "../model/pageinfo";

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
