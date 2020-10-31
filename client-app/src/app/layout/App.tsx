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
  // const match = useRouteMatch();
  // const loc = useLocation();
  // const [pageInfo, setPageInfo] = useState<IPageInfo | undefined>(undefined);

  // const map = new Map([
  //   ["home", "1"],
  //   ["about_me", "2"],
  //   ["projects/letschat", "3"],
  //   ["projects/amazon_clone", "4"],
  //   ["projects/portfolio", "5"],
  // ]);

  // useEffect(() => {
  //   getPageInfo(
  //     match.path === "/projects"
  //       ? `projects/{loc.pathname.split("/").pop()!.toString()}`
  //       : match.path.replace("/", "")
  //   );
  //   updatePageInfo();
  // }, [loc.pathname, match.path]);

  // const getPageInfo = async (page: string) => {
  //   setPageInfo(await Counter.get(map.get(page)!, page));
  // };

  // const updatePageInfo = async () => {
  //   setPageInfo(
  //     await Counter.update(pageInfo!.id, pageInfo!.page, pageInfo!.counter)
  //   );
  // };

  // console.log(pageInfo);
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route
            path="/projects"
            // {[
            //   "/projects",
            //   "/projects/letschat",
            //   "/projects/amazonclone",
            //   "/projects/portfolio",
            // ]}
          >
            <Projects />
          </Route>
          <Route path="/aboutme">
            <About__Me />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Redirect to="/home" />
            {/* <Home /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
