import React from "react";
import Footer from "../footer/Footer";
import { PageBody, Heading, Para, Section } from "./StyledPage";

const PortfolioPage = () => {
  return (
    <PageBody>
      <Heading>About the project</Heading>
      <Para>
        This project started off as an response to complete and test my skills
        in accordance with the{" "}
        <a href="https://forrestbrazeal.com/2020/04/23/the-cloud-resume-challenge/">
          Cloud Resume Challenge By Forrest Brazeal
        </a>{" "}
        but overtime I though it'd be best to evolve this into a website where I
        can show off my projects and thoughts 😉, plus I also needed to
        learn/practice React Transitions and React Styled Components. This
        project provied me with the perfect opportunity to do so 🐱‍👤
      </Para>
      <Heading>My Learnings</Heading>
      <Para>
        Starting out with learning React, this little project was able to cover
        a lot of important bases for me like: React Hooks, React Functional
        Components, routing with React Router DOM and how to use React Context
        API for state management(still learning more about this 😋). I also
        realised the tremendous amount of effort and consideration that goes
        into creating a rich user experience even a simple change of a css
        property like a margin on a button can change the look and feel of the
        experience 🤩.
      </Para>

      <Section>
        <Heading>Tech Stack</Heading>
        <p>FrontEnd</p>
        <ol>
          <li>React</li>
          <li>React Router</li>
          <li>React </li>
          <li>Fluent UI</li>
          <li>React Transition Group</li>
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
      <Footer />
    </PageBody>
  );
};

export default PortfolioPage;
