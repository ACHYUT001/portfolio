import React from "react";
import Footer from "../footer/Footer";
import { PageBody, Heading, Para, Section } from "./StyledPage";

const AmazonClonePage = () => {
  return (
    <>
      <PageBody>
        <Heading>About the project</Heading>
        <Para>
          Like the name suggests this is a simple clone of Amazon. I took up
          this project as a means of learning and practicing front-end
          development with React 🐱‍👓
        </Para>
        <Heading>My Learnings</Heading>
        <Para>
          Starting out with learning React, this little project was able to
          cover a lot of important bases for me like: React Hooks, React
          Functional Components, routing with React Router DOM and how to use
          React Context API for state management(still learning more about this
          😋). I also realised the tremendous amount of effort and consideration
          that goes into creating a rich user experience even a simple change of
          a css property like a margin on a button can change the look and feel
          of the experience 🤩.
        </Para>

        <Section>
          <Heading>Tech Stack</Heading>
          <p>FrontEnd</p>
          <ol>
            <li>React</li>
            <li>React Router</li>
            <li>React </li>
            <li>Material UI</li>
            <li>HTML5</li>
            <li>CSS3</li>
          </ol>
          <p>Firebase</p>
          <ol>
            <li>Hosting</li>
            <li>Authentication</li>
          </ol>
        </Section>
      </PageBody>
      <Footer id="4" page="projects/amazon_clone" />
    </>
  );
};

export default AmazonClonePage;
