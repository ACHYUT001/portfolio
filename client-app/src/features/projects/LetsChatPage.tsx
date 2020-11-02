import React from "react";
import Footer from "../footer/Footer";
import { Heading, PageBody, Para, Section } from "./StyledPage";

const LetsChatPage = () => {
  return (
    <PageBody>
      <Heading>About the project</Heading>
      <Para>
        LetsChat is a social media web application that provides a unique
        platform where people can host activities/events, join activities to
        connect & have fun with like minded people.
      </Para>
      <Para>
        I took up this project to polish my skills on web development with .Net
        Core, React and Azure. //sparkle this 😊
      </Para>
      <Heading>Design Pattern</Heading>
      <Para>
        I learned alot during working on this project and the first key learning
        was the importance of a robust design architecture for the project. The
        design pattern I followed for this project is the Command Query Request
        Segregation (CQRS) Pattern. I tried to adopt Uncle Bob's Clean
        Architecture principles and this diagram explains
      </Para>

      <Section>
        <Heading>Tech Stack</Heading>
        <p>Backend</p>
        <ol>
          <li>.Net Core (Web API)</li>
          <li>.Net Core Identity</li>
          <li>MediatR</li>
          <li>Entity Framework Core</li>
          <li>Azure SDK</li>
        </ol>
        <p>FrontEnd</p>
        <ol>
          <li>React</li>
          <li>Axios</li>
          <li>React Router</li>
          <li>MobX</li>
          <li>Semantic UI</li>
          <li>HTML5</li>
          <li>CSS3</li>
        </ol>
        <p>Azure</p>
        <ol>
          <li>Azure App Service</li>
          <li>Azure SQL DB</li>
          <li>Azure Blob Storage</li>
        </ol>
      </Section>
      <Footer id="6" page="letschat" />
    </PageBody>
  );
};

export default LetsChatPage;
