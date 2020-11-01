import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

import "./About__Me.css";
const About__Me = () => {
  return (
    <div>
      <article className="aboutme__container">
        <div className="aboutme__titleContainer">
          <div className="aboutme__name">
            <h1 className="aboutme__title">
              <span className="u-shadow">
                Achyut
                <br />
                Upadhyay
              </span>
              <span className="aboutme__titleSub">
                React | .Net | Azure | Engineer
              </span>
            </h1>
          </div>
          <p></p>
          <div className="aboutme__contact">
            <div>(701) 702-3379</div>
            <div>
              <a className="u-link" href="mailto:achyutpdh249@gmail.com">
                achyutpdh249@gmail.com
              </a>
            </div>
          </div>
        </div>

        <section className="aboutme__section">
          <h2 className="l-Section-title h3 u-hidden@sm-down">Profile</h2>
          <div className="aboutme__sectionContent">
            <p>
              Sports enthusiast, podcast appreciator, avid reader and a waffle
              fiend. I enjoy working closely on opportunities to create products
              that make life simpler each day and practice behavior to deliver
              experiences to help understand technology. I’m super self driven,
              a pragmatic thinker, I want to design and contribute to important
              and significant tech-experiences in the world.
            </p>
          </div>
        </section>

        <section className="aboutme__section">
          <h2 className="l-Section-title h3">Skills</h2>
          <div className="aboutme__sectionContent">
            <ul>
              <li>
                Cloud Services
                <strong className="Tag">Azure(PaaS)</strong>,
                <strong className="Tag">OCI</strong>
              </li>
              <li>
                Languages
                <strong className="Tag">C#</strong>,
                <strong className="Tag">TypeScript</strong>,
                <strong className="Tag">JavaScript</strong>,
                <strong className="Tag">Java</strong>,
                <strong className="Tag">Python</strong>
              </li>
              <li>
                Framework/Libraries
                <strong className="Tag">.Net Core</strong>,
                <strong className="Tag">React</strong>,
                <strong className="Tag">React Router</strong>
                <strong className="Tag">Fluent UI</strong>,
                <strong className="Tag">Entity Framework</strong>
                <strong className="Tag">MSAL</strong>
              </li>
              <li>
                Databases
                <strong className="Tag">Azure SQL DB</strong>,
                <strong className="Tag">Cosmos DB</strong>,
                <strong className="Tag">MySQL</strong>,
              </li>
              <li>
                CI/CD
                <strong className="Tag">Git</strong>,
                <strong className="Tag">Azure DevOps</strong>,
              </li>
            </ul>
          </div>
        </section>

        <section className="aboutme__section">
          <h2 className="l-Section-title h3">Experience</h2>
          <div className="aboutme__sectionContent">
            <div className="aboutme__sectionGroup">
              <h3>Partner Technical Consultant</h3>
              <a>Microsoft</a>
              <br /> August 2019 - Present
              <ul>
                <li>
                  Responsible for helping the partner design their application
                  based on Azure PaaS Services
                </li>
                <li>
                  Led technical engagements, including: Technical Briefings,
                  Proof of Concepts, Architectural Design Sessions with the goal
                  of empowering the partners to develop and deliver new
                  solutions to market
                </li>
                <li>
                  Helped improve various partners’ success in implementing Azure
                  solutions and development
                </li>
                <li>
                  Delivered and contributed to delivery of global workshops,
                  bootcamps, trainings necessary to build the technical skills
                  and expertise of partners.
                </li>
                <li>
                  Built internal project coined "TPD Voice" to help share ideas
                  and provide technical and professional assistance within the
                  WW PTC community.
                </li>
              </ul>
            </div>

            <div className="aboutme__sectionGroup">
              <h3>Intern</h3>
              <a>Microsoft</a>
              <br /> April 2019 - July 2019
              <ul>
                <li>
                  Studied and implemented core concepts of Windows OS,
                  networking and Azure Core throughtout the 3 month internship.
                </li>
              </ul>
            </div>

            <div className="aboutme__sectionGroup">
              <h3>Intern</h3>
              <a>TicTok Games Pvt. Ltd.</a>
              <br /> June 2017 - July 2017
              <ul>
                <li>
                  Worked with the core team to build a product from scratch from
                  design phase to implementation.
                </li>
                <li>
                  Built a client-server application for the content team to
                  manage work and to reduce redundancy.
                </li>
                <li>
                  {" "}
                  Worked with the content writing team to build a rich experince
                  for the user.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="aboutme__section">
          <h2 className="l-Section-title h3">Certifications</h2>
          <div className="aboutme__sectionContent">
            <ul>
              <li>
                <a href="https://www.youracclaim.com/badges/ac12993b-d7fe-47d2-88e8-8b583489f9e0/public_url">
                  Exam 483: Programming in C#
                </a>
              </li>
              <li>
                <a href="https://www.youracclaim.com/badges/6929af21-4f6d-4163-91a5-c75906f71a82/public_url">
                  Azure Developer Associate
                </a>
              </li>
              <li>
                <a href="https://www.youracclaim.com/badges/51d73cac-fa73-4b22-a5c0-e153bd225371/public_url">
                  Azure Fundamentals
                </a>
              </li>
              <li>
                <a href=" https://www.youracclaim.com/badges/0e14007f-61a2-4176-9d8f-bcb33121d379/public_url">
                  Oracle Cloud Infrastructure Foundations Associate
                </a>
              </li>
              <li>
                <a href="https://www.youracclaim.com/badges/a9d73cb1-f063-4b6f-9a99-ece232b1c52f/public_url">
                  Microsoft Global Challenger
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="aboutme__section">
          <h2 className="l-Section-title h3">Education</h2>
          <div className="aboutme__sectionContent">
            <div className="aboutme__sectionGroup">
              <h3>Bachelor of technology, Computer Science and Enginnering</h3>
              <a>GLA University</a>
              <br /> 2015 -2019
              <p>Final GPA: 8.0</p>
            </div>

            <div className="aboutme__sectionGroup">
              <h3>Intermediate</h3>
              <a>Milton Public School</a>
              <br /> 2014 -2015
              <p>Final Percentage: 82.2%</p>
            </div>

            <div className="aboutme__sectionGroup">
              <h3>High School</h3>
              <a>Navy Children School</a>
              <br /> 2011 -2011
              <p>Final CGPA: 8.6</p>
            </div>
          </div>
        </section>
      </article>

      <Footer id="2" page="about_me" />

      {/* <div className="aboutme__container u-keyline">
        <div className="l-Footer">
          <div className="l-Footer-col">
            <strong className="Tag">Achyut Upadhyay</strong>
          </div>
          <div className="l-Footer-col Contact">
            <Link to="/">achyutupadhyay.com</Link>
            <a href="mailto:achyutpdh249@gmail.com">achyutpdh249@gmail.com</a>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default About__Me;
