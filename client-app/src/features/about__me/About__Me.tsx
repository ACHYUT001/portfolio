import React from "react";
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
          <div className="aboutme__contact">
            <div>(701) 702-3379</div>
            <div>
              <a className="u-link" href="mailto:achyutpdh249@gmail.com">
                achyutpdh249@gmail.com
              </a>
            </div>
          </div>
        </div>

        <section className="l-Section">
          <h2 className="l-Section-title h3 u-hidden@sm-down">Profile</h2>
          <div className="l-Section-content">
            <p>
              Spent over 13 years developing the skills to increase velocity,
              reliability, and quality with a high focus on security, system and
              application availability, and fault tolerance. Experienced with
              AWS, CI/CD, and automation, helping organizations instill DevOps
              for the modern age.
            </p>
          </div>
        </section>

        <section className="l-Section">
          <h2 className="l-Section-title h3">Skills</h2>
          <div className="l-Section-content">
            <ul>
              <li>
                Automation
                <strong className="Tag">Ansible</strong>,
                <strong className="Tag">CloudFormation</strong>,
                <strong className="Tag">SaltStack</strong>,
                <strong className="Tag">Terraform</strong>
              </li>
              <li>
                Cloud Services/Containerization
                <strong className="Tag">AWS</strong>,
                <strong className="Tag">Docker</strong>,
                <strong className="Tag">Kubernetes</strong>
              </li>
              <li>
                CI/CD
                <strong className="Tag">CodePipeline</strong>,
                <strong className="Tag">Git</strong>,
                <strong className="Tag">GitLab</strong>
                <strong className="Tag">Jenkins</strong>,
                <strong className="Tag">Nexus</strong>
              </li>
              <li>
                Programming/Scripting Languages
                <strong className="Tag">Bash</strong>,
                <strong className="Tag">JavaScript</strong>,
                <strong className="Tag">PowerShell</strong>,
                <strong className="Tag">Python</strong>
              </li>
              <li>
                Databases
                <strong className="Tag">DynamoDB</strong>,
                <strong className="Tag">MongoDB</strong>,
                <strong className="Tag">MySQL</strong>,
                <strong className="Tag">PostgreSQL</strong>,
                <strong className="Tag">RDS</strong>
              </li>
            </ul>
          </div>
        </section>

        <section className="l-Section">
          <h2 className="l-Section-title h3">Experience</h2>
          <div className="l-Section-content">
            <div className="l-Section-group">
              <h3>Senior Professional Services Consultant</h3>
              <a>BlackBerry Corp., Greater St. Louis Area</a> (MO)
              <br /> January 2018 - Present
              <ul>
                <li>
                  Engineered the server infrastructure (RHEL/Windows) for a
                  Mobile Content Management application that is built on Python,
                  MySQL, Apache Solr, Nginx, Apache, Java, Redis, and Memcached
                  and scales out to over 30,000 users.
                </li>
                <li>
                  Used SaltStack for configuration management of 38 servers
                  across three environments.
                </li>
                <li>
                  Created and used Bash, Python, and PowerShell scripts to
                  automate server hardening, server health checks, and updating
                  of servers.
                </li>
                <li>
                  Created Terraform configuration files to deploy VMware vSphere
                  virtual machines in Dev environment.
                </li>
                <li>
                  Performed work to containerize services used by a Mobile
                  Content Management application using Docker, Kubernetes, and
                  Helm.
                </li>
              </ul>
            </div>

            <div className="l-Section-group">
              <h3>Deputy Systems Admin</h3>
              <a>Paragon Technologies, Greater St. Louis Area</a> (MO)
              <br /> April 2017 - January 2018
              <ul>
                <li>
                  Implemented and maintained a 24-server software stack
                  (RHEL/Windows) that runs 10 web applications deployed in three
                  environments.
                </li>
                <li>
                  Utilized SaltStack for user and server configuration
                  management.
                </li>
                <li>
                  Implemented a Nexus repository to improve the CI/CD pipeline.
                </li>
                <li>
                  Performed integration tests on web applications built on
                  WebLogic, JavaEE, Apache, and Microsoft SQL.
                </li>
                <li>
                  Used Jenkins and GitLab for build tests and source code
                  management.
                </li>
              </ul>
            </div>

            <div className="l-Section-group">
              <h3>Senior Systems Administrator</h3>
              <a>General Dynamics, Greater St. Louis Area</a> (MO)
              <br /> May 2016 - April 2017
              <ul>
                <li>
                  Engineered software package/binary deployment (XenAPP,
                  ThinApp, AppV, and SCCM) for VDI Desktops.
                </li>
                <li>Provided customer support to over 2,000 users.</li>
                <li>
                  Maintained a 98% customer satisfaction rating for trouble
                  ticket resolution.
                </li>
                <li>
                  Delivered front-end work for various external and internal
                  projects to the backend team.
                </li>
                <li>
                  Created policies related to the use of computing resources.
                </li>
              </ul>
            </div>

            <div className="l-Section-group">
              <h3>Systems Admin Specialist</h3>
              <a>NJVC, Greater St. Louis Area</a> (MO)
              <br /> August 2015 - May 2016
              <ul>
                <li>
                  WProvided technical support to 40 full motion video analysts.
                </li>
                <li>
                  Lead a tech refresh of 40 workstations, two tape drive storage
                  units and replaced over 300 feet of fiber optic cable, which
                  improved network connectivity and video processing.
                </li>
                <li>
                  Performed COTS/GOTS software upgrades, software and security
                  patch installs, firmware upgrades and tests for functionality.
                </li>
                <li>
                  Performed critical system data file backups with archive
                  backup libr/ary tape devices using HP iLO, HP ProLiant, and
                  Symantec Backup Exec.
                </li>
              </ul>
            </div>

            <div className="l-Section-group">
              <h3>US Navy</h3>
              <a>Enlisted Salior, Various Locations</a>
              <br /> September 1995 - September 2015
              <ul>
                <li>
                  Served in a variety of job roles (Fire Controlman, Systems
                  Administrator, Recruiter, Senior Job classNameifier, Equal
                  Opportunity Program Manager) during peacetime and wartime
                  efforts.
                </li>
                <li>
                  Led and mentored over 300 sailors during career in areas of
                  job training, job advancement, and project management.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="l-Section">
          <h2 className="l-Section-title h3">Education</h2>
          <div className="l-Section-content">
            <h3>Bachelor of Sciences, Computer Networks and Security</h3>
            <a>University of Maryland Global Campus</a> (MD)
            <br /> 2012 -2015
            <p>Final GPA: 3.75</p>
          </div>
        </section>

        <section className="l-Section">
          <h2 className="l-Section-title h3">Certifications</h2>
          <div className="l-Section-content">
            <ul>
              <li>
                <a href="https://www.youracclaim.com/badges/5cd5fd33-b843-4a38-aaf7-f9cfd1299194/public_url">
                  AWS Devops Professional Engineer
                </a>
              </li>
              <li>
                <a href="https://www.youracclaim.com/badges/21debee7-88a5-42c3-8f2a-27c62d5a4490/public_url">
                  CISSP
                </a>
              </li>
              <li>
                <a href=" https://aspen.eccouncil.org/VerifyBadge?type=certification&a=9R+DgoW3eTOeXYrgRDpChSxYUbyGQRb4XWKcUPU4q48=">
                  Certified Ethical Hacker
                </a>
              </li>
              <li>
                <a href="https://www.youracclaim.com/badges/627b6ced-b56d-441f-bb2e-456a8c133f02/public_url">
                  CompTIA Security+
                </a>
              </li>
              <li>
                <a href="https://www.youracclaim.com/badges/c1e58470-3eec-4bae-8d73-bbe3e051280a/public_url">
                  CompTIA A+
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="l-Section">
          <h2 className="l-Section-title h3">Trivia</h2>
          <div className="l-Section-content">
            <p>
              This resume website was built during the{" "}
              <a href="https://dev.to/forrestbr/azeal/the-cloud-resume-challenge-503g">
                #CloudResumeChallenge
              </a>
              .
            </p>
            <p>
              Here is a{" "}
              <a href="https://dev.to/dariusjennings/how-to-power-your-resume-using-aws-17j1">
                blog post
              </a>{" "}
              about it.
            </p>
            <p>
              You are visitor number <a id="count"></a>.
            </p>
          </div>
        </section>
      </article>
    </div>
  );
};

export default About__Me;
