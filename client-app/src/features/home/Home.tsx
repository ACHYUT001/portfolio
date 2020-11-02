import { DefaultButton, Spinner } from "@fluentui/react";
import { count } from "console";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Counter, { sleep } from "../../app/api/agent";
import { IPageInfo } from "../../app/model/pageinfo";
import {
  Com,
  HorizontalLine,
  Para,
  VerticalLine,
} from "../projects/StyledPage";
import Ticker from "../ticker/Ticker";
import Typing from "react-typing-animation";

import "./Home.css";
import styled from "styled-components";
import PageNavButton from "../3d__button/PageNavButton";

const Line3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  width:80%
  max-width: 90rem;
  margin-left: auto;
  margin-right: auto;
  margin-top:2ch;
  margin-bottom:-4ch;
  font-size: 1.2em;
  font-family: itc-avant-garde-gothic-pro;
  font-weight: 500;
  font-style:normal;

`;
const LineContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-family: itc-avant-garde-gothic-pro;
`;
const Line1 = styled.h1``;
const Line2 = styled.h1``;

const Home = () => {
  return (
    <div className="home__container">
      <div className="home__text">
        <Typing>
          <Typing.Delay ms={20} />
          <LineContainer>
            <Line1>
              Hi, I'm Achyut.
              <Typing.Delay ms={200} />
              <Typing.Backspace count={1} />
              <Typing.Delay ms={300} />;
            </Line1>
            <Line2>
              <Com>{`{/*`}</Com>
              Nice to meet you!
              <Com>{`*/}`}</Com>
            </Line2>
          </LineContainer>
        </Typing>
        <Line3>
          This is a home for things I'm learning, things I’ve made & how I’ve
          made them. ᓚᘏᗢ
          <HorizontalLine />
        </Line3>

        {/* My goal is to learn and develop solutions to democratize
              technology ⚒😁. */}
      </div>

      <img src="assets/mf-avatar.svg" alt="" className="home__avatar" />

      <div className="home__buttons">
        {/* Add spring button */}

        <PageNavButton target="/projects/letschat" name="Projects" />

        <PageNavButton target="/about_me" name="About Me" />
      </div>
    </div>
  );
};

export default Home;
