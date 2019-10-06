import React from 'react';

const About = function () {
    return (
    <section id="about" class="about-area pt-125 pb-130">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="section-title text-center">
              <h2 class="title">About Me</h2>
              <h4 class="about-title">Hi There! I'm Krishna Verma</h4>
              <p>
                I am a competent & techno-savvy professional, offering more than 3 years of experience in Software Product 
                Development with a demonstrated history of working in the software industry. I am currently spearheading efforts 
                with Talentica Software as Software Engineer-2 with experience in developing
                back-end, front-end infrastructure and database designs for web applications. I am an achievement-driven,
                problem solving professional with positive attitude targetting assignments in software development with
                organisations. I work well under pressure and consistently meet deadlines and targets while delivering
                high quality work.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="about-content mt-50">
            <h5 class="about-title">Skills</h5>
              
                <p>
                * Strong Programming Skills and Back End Development experience in Java8, J2EE, NodeJS, ExpressJS along with various frameworks such as Struts2.x, Spring MVC, Spring Boot, Spring Data JPA, Hibernate.<br />
                * Have Front End Development exposure on HTML, CSS, JavaScript and its related libraries and frameworks like React JS, Angular JS, Redux with experience in GraphQL.<br />
                * Well experienced in working with databases of RDBMS such as MySQL, Oracle Database, PostgreSQL and NoSQL DBs such as MongoDB and Amazon DynamoDB.<br />
                * Well experienced in REST APIs and SOAP WebServices.<br /> 
                * Have indexing exposure on Solr and caching on Redis.<br />
                * Experience in working with AWS Services like Batch, SQS, SNS, EC2, DynamoDB.<br />
                * Deployment Automation Scripting experience with Ansible.<br />
                * Containerization and Orchestration experience with Docker and Kubernetes.<br />
                * Experience in Object Oriented Design and Design Patterns.<br />
                * Expertise in Data Structures, Problem Solving, Optimizations and Algorithms.<br />
                * Strong debugging and analytical skills.<br />
                * Well versed with Agile and Waterfall software development methodologies<br />
                * Worked on different OS like Windows, Linux, Ubuntu, MacOSX.<br/>
                </p>
              <ul class="clearfix">
                <li>
                  <div class="single-info d-flex align-items-center">
                    <div class="info-icon">
                      <i class="lni-calendar"></i>
                    </div>
                    <div class="info-text">
                      <p><span>Date of birth:</span> 13 July 1994</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="single-info d-flex align-items-center">
                    <div class="info-icon">
                      <i class="lni-envelope"></i>
                    </div>
                    <div class="info-text">
                      <p><span>Email:</span> krisv.nit16@gmail.com</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="single-info d-flex align-items-center">
                    <div class="info-icon">
                      <i class="lni-phone-handset"></i>
                    </div>
                    <div class="info-text">
                      <p><span>Phone:</span> +91-7349782793</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="single-info d-flex align-items-center">
                    <div class="info-icon">
                      <i class="lni-map-marker"></i>
                    </div>
                    <div class="info-text">
                      <p><span>Location:</span> Pune, Maharashtra, India</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-5 offset-xl-1 col-lg-6">
            <div class="about-skills pt-25">
              <div class="skill-item mt-25">
                <div class="skill-header">
                  <h6 class="skill-title">Java</h6>
                  <div class="skill-percentage">
                    <div class="count-box counted">
                      <span class="counter">90</span>
                    </div>
                    %
                  </div>
                </div>
                <div class="skill-bar">
                  <div class="bar-inner">
                    <div class="bar progress-line" data-width="80"></div>
                  </div>
                </div>
              </div>
              <div class="skill-item mt-25">
                <div class="skill-header">
                  <h6 class="skill-title">Spring Boot, MVC, JPA</h6>
                  <div class="skill-percentage">
                    <div class="count-box counted">
                      <span class="counter">80</span>
                    </div>
                    %
                  </div>
                </div>
                <div class="skill-bar">
                  <div class="bar-inner">
                    <div class="bar progress-line" data-width="60"></div>
                  </div>
                </div>
              </div>
              <div class="skill-item mt-25">
                <div class="skill-header">
                  <h6 class="skill-title">HTML, CSS, SASS</h6>
                  <div class="skill-percentage">
                    <div class="count-box counted">
                      <span class="counter">50</span>
                    </div>
                    %
                  </div>
                </div>
                <div class="skill-bar">
                  <div class="bar-inner">
                    <div class="bar progress-line" data-width="50"></div>
                  </div>
                </div>
              </div>
              <div class="skill-item mt-25">
                <div class="skill-header">
                  <h6 class="skill-title">Javascript, NodeJS</h6>
                  <div class="skill-percentage">
                    <div class="count-box counted">
                      <span class="counter">70</span>
                    </div>
                    %
                  </div>
                </div>
                <div class="skill-bar">
                  <div class="bar-inner">
                    <div class="bar progress-line" data-width="90"></div>
                  </div>
                </div>
              </div>
              <div class="skill-item mt-25">
                <div class="skill-header">
                  <h6 class="skill-title">ReactJS, Redux</h6>
                  <div class="skill-percentage">
                    <div class="count-box counted">
                      <span class="counter">50</span>
                    </div>
                    %
                  </div>
                </div>
                <div class="skill-bar">
                  <div class="bar-inner">
                    <div class="bar progress-line" data-width="90"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
  }

export default About;