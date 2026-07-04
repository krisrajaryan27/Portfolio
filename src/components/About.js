import React from 'react';

const skills = [
  "Backend: Java 21, Scala, Node.js, Python, Spring WebFlux, Spring Boot, Spring MVC, Spring Data JPA, Spring Security, Struts 2.x, Express, Django, FastAPI.",
  "Architecture: distributed systems, domain-driven design, event-driven microservices, reactive programming, REST APIs, SOAP, gRPC, and GraphQL.",
  "Frontend: React, Redux, TypeScript, JavaScript, Angular, Next.js, Nest.js, HTML, CSS, and reusable component systems.",
  "Data: MySQL, Oracle, Postgres, CockroachDB, MongoDB, DynamoDB, Cassandra, Redis, Hazelcast, Memcache, Apache Solr, and Elasticsearch.",
  "Cloud and DevOps: AWS, GCP, Azure, Docker, Kubernetes, Ansible, Chef, Jenkins, GitHub Actions, Maven, Gradle, NPM, and Yarn.",
  "Messaging and observability: Kafka, Confluent Kafka, AWS SQS, RabbitMQ, Prometheus, Grafana, Datadog, New Relic, Splunk, and CloudWatch.",
  "Testing and quality: JUnit 5, Mockito, Spock, Jest, Mocha, Sinon, debugging, performance tuning, and production incident ownership.",
  "AI-assisted engineering: Cursor, Windsurf, JetBrains AI Assistant, Claude Code, and Amazon Q."
];

const skillBars = [
  { title: "Distributed Systems", percentage: 95 },
  { title: "Java, Spring, Reactive Services", percentage: 95 },
  { title: "Cloud, Kubernetes, DevOps", percentage: 90 },
  { title: "React, TypeScript, Node.js", percentage: 85 },
  { title: "Data Platforms and Messaging", percentage: 90 }
];

const About = function () {
  return (
    <section id="about" className="about-area pt-125 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <h2 className="title">About Me</h2>
              <h4 className="about-title">Hi There! I'm Krishna Verma</h4>
              <p>
                I am a Senior Staff Software Engineer with experience across backend and full-stack product development,
                large-scale distributed systems, and event-driven microservices in energy, e-commerce, fintech, telecom,
                and SaaS domains. My recent work spans platform architecture, telemetry pipelines, cloud-native services,
                team leadership, and high-impact migrations that improve reliability, latency, throughput, and infrastructure
                cost at enterprise scale.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="about-content mt-50">
              <h5 className="about-title">Skills</h5>
              <ul className="skill-list">
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
              <ul className="clearfix">
                <li>
                  <div className="single-info d-flex align-items-center">
                    <div className="info-icon">
                      <i className="lni-envelope"></i>
                    </div>
                    <div className="info-text">
                      <p><span>Email:</span> krisv.nit16@gmail.com</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="single-info d-flex align-items-center">
                    <div className="info-icon">
                      <i className="lni-phone-handset"></i>
                    </div>
                    <div className="info-text">
                      <p><span>Phone:</span> +91-7349782793</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="single-info d-flex align-items-center">
                    <div className="info-icon">
                      <i className="lni-map-marker"></i>
                    </div>
                    <div className="info-text">
                      <p><span>Location:</span> Bangalore, Karnataka, India</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-5 offset-xl-1 col-lg-6">
            <div className="about-skills pt-25">
              {skillBars.map((skill) => (
                <div className="skill-item mt-25" key={skill.title}>
                  <div className="skill-header">
                    <h6 className="skill-title">{skill.title}</h6>
                    <div className="skill-percentage">
                      <div className="count-box counted">
                        <span className="counter">{skill.percentage}</span>
                      </div>
                      %
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="bar-inner">
                      <div className="bar progress-line" style={{ width: `${skill.percentage}%` }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
