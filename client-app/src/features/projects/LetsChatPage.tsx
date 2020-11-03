import React from "react";
import Footer from "../footer/Footer";
import { Heading, Image, PageBody, Para, Section } from "./StyledPage";

const LetsChatPage = () => {
  return (
    <>
      <PageBody>
        <Heading>About the project</Heading>
        <Para>
          LetsChat is a social media web application that provides a unique
          platform where people can host activities/events, join activities to
          connect & have fun with like minded people.
        </Para>
        <Para>
          I took up this project to polish my skills on web development with
          .Net Core, React and Azure. //sparkle this 😊
        </Para>
        <Heading>My Learnings</Heading>
        <Para>
          <h4>Design</h4>
          I learned alot during working on this project and the first key
          learning was the importance of a robust design architecture for the
          project.I tried to adopt Uncle Bob's Clean Architecture principles :
          <Image src="/assets/clean_architecture.jpg" />
          <br />
          Following the diagram the design pattern I followed for this project
          is the Command Query Request Segregation (CQRS) Pattern(Single DB).
          Using MediatR to make use of Command/Query Handler Logic and have
          setup my projects as follows:
          <br />
          <Image src="/assets/LetsChat.png" />
          <br />
          <h4>Features</h4>
          The features that I had fun implementing in this project are:
          <ol>
            <li>
              Utilizing SignalR to provide Chat feature on the Activiy Page
            </li>
            <li>
              Ability to upload Profile Image from client and storing it in
              Azure Blob
            </li>
            <li>Pagination</li>
            <li>Mainting a global store for managing application store</li>
            <li>
              And my favourite of all serving notifications with React Toasts!
              😍😍
            </li>
          </ol>
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
      </PageBody>
      <Footer id="3" page="projects/letschat" />
    </>
  );
};

export default LetsChatPage;
