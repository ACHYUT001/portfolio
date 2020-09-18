import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";
const Home = () => {
  return (
    <div className="home__container">
      <img src="assets/mf-avatar.svg" alt="" className="home__avatar" />
      <div className="home__intro">
        <p>
          <strong>Achyut Upadhyay</strong>
        </p>
      </div>
      <div className="home__buttons">
        <Link to="/projects">
          <button className="home__buttonsNav">Projects ---</button>
        </Link>
        <Link to="/aboutme">
          <button className="home__buttonsNav">About Me ---</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
