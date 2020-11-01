import { Spinner } from "@fluentui/react";
import { count } from "console";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Counter, { sleep } from "../../app/api/agent";
import { IPageInfo } from "../../app/model/pageinfo";
import Ticker from "../ticker/Ticker";

import "./Home.css";

const Home = () => {
  const [pageInfo, setPageInfo] = useState<IPageInfo>({
    id: "1",
    page: "home",
  });

  const [counter, setCounter] = useState<string>("");

  const delay = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  useEffect(() => {
    getPageInfo("home", "1");
  }, []);

  const getPageInfo = async (page: string, id: string) => {
    await Counter.get(id, page).then((val) => setCounter(val));
  };

  const updatePageInfo = async (num: string) => {
    console.log("from update");
    console.log(counter);
    await Counter.update("1", "home", num).then((val) =>
      setCounter(val.counter!)
    );

    // let info: IPageInfo = await Counter.update(
    //   pageInfo!.id,
    //   pageInfo!.page,
    //   pageInfo!.counter
    // );
  };
  console.log(`the counter is ${counter}`);

  return (
    <div className="home__container">
      <div className="left__panel">
        <img src="assets/mf-avatar.svg" alt="" className="home__avatar" />
      </div>

      <div className="right__panel">
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
    </div>
  );
};

export default Home;
