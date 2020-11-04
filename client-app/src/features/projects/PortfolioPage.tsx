import React from "react";
import Footer from "../footer/Footer";
import { PageBody, Heading, Para, Section } from "./StyledPage";

const PortfolioPage = () => {
  return (
    <>
      <PageBody>
        <Heading>About the project</Heading>
        <Para>
          This project started off as an response to complete and test my skills
          in accordance with the{" "}
          <a href="https://forrestbrazeal.com/2020/04/23/the-cloud-resume-challenge/">
            Cloud Resume Challenge By Forrest Brazeal
          </a>{" "}
          but overtime I though it'd be best to evolve this into a website where
          I can share my projects and thoughts 😉, plus I had also planned to
          explore and practice using transitions and React Styled Components.
          This project provied me with the perfect opportunity to do so 🐱‍👤.
        </Para>
        <Heading>My Learnings</Heading>
        <Para>
          The key learnings that I'm proud of is the cool corousel I implemented
          from scratch to provide a fluid way to switch between pages.This
          project is hosted as a Azure Static Website supported by Azure
          Function, which is responsible to get and update the counter values
          (stored in a Azure Cosmos DB collection) to keep a count on number of
          visitors for each page, displayed using a retro counter ⌛ down below
          in the footer 👇👇. All-in-all I believe a portfolio website is like
          an ever-evolving project which will grow as I learn and grow 🐱‍🏍.
          <br /> I have a few upgrades in mind like:
          <ol>
            <li>Dark Mode/Light Mode toggle</li>
            <li>Using React Spring to make beautiful animations</li>
            <li>
              Adding a blog section 📝to the site to share my journey and
              learnings ✍ 🎭
            </li>
          </ol>
        </Para>

        <Section>
          <Heading>Tech Stack</Heading>
          <p>FrontEnd</p>
          <ol>
            <li>React</li>
            <li>React Router</li>
            <li>React </li>
            <li>Fluent UI</li>
            <li>React Styled Components</li>
            <li>HTML5</li>
            <li>CSS3</li>
          </ol>
          <p>Azure</p>
          <ol>
            <li>Azure Static WebApp</li>
            <li>Azure Funtions</li>
            <li>Cosmos DB</li>
          </ol>
        </Section>
      </PageBody>
      <Footer id="5" page="projects/portfolio" />
    </>
  );
};

export default PortfolioPage;
