import React from 'react';

const skills = [
  {
    category: "Languages & Frameworks",
    items: "Java (8-21), Spring Boot, Spring WebFlux, Spring Cloud, Scala, Python, TypeScript, Node.js, Express.js"
  },
  {
    category: "Architecture & Design",
    items: "Microservices, Event-Driven Architecture, CQRS, Domain-Driven Design, Distributed Consensus, Reactive Programming"
  },
  {
    category: "Data & Messaging",
    items: "PostgreSQL, MySQL, MongoDB, Cassandra, DynamoDB, Redis, Elasticsearch, Apache Kafka, RabbitMQ, AWS SQS/SNS"
  },
  {
    category: "Cloud & Infrastructure",
    items: "AWS (ECS, EKS, Lambda, S3, API Gateway, CloudFront), Docker, Kubernetes, Terraform, GitHub Actions, Jenkins"
  },
  {
    category: "Observability & Reliability",
    items: "OpenTelemetry, Grafana, Prometheus, Datadog, Circuit Breakers, Bulkhead Isolation, SLO/SLI Definition"
  }
];

const skillBars = [
  { title: "Distributed Systems & Platform Architecture", percentage: 95 },
  { title: "Java, Spring Boot, Reactive Services", percentage: 95 },
  { title: "Cloud Infrastructure & Kubernetes", percentage: 90 },
  { title: "Data Platforms, Kafka, Messaging", percentage: 90 },
  { title: "Technical Leadership & Mentorship", percentage: 90 }
];

const About = function () {
  return (
    <section id="about" className="about-area pt-125 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <h2 className="title">About Me</h2>
              <p className="about-summary">
                Senior Staff Software Engineer with 12+ years of experience architecting high-scale
                distributed systems across energy tech, e-commerce, fintech, and telecom. I specialize
                in platform modernization -- migrating monoliths to event-driven microservices,
                building telemetry pipelines that process 20K+ events/sec, and turning around service
                reliability from 2% to 99%+ SLA. I lead cross-functional engineering teams of 25+,
                drive technical strategy at the organizational level, and care about engineering
                cultures where code review is mentorship, not gatekeeping.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="about-content mt-50">
              <h5 className="about-title">Technical Expertise</h5>
              <ul className="skill-list">
                {skills.map((skill) => (
                  <li key={skill.category}>
                    <strong>{skill.category}:</strong> {skill.items}
                  </li>
                ))}
              </ul>
              <ul className="clearfix mt-30">
                <li>
                  <div className="single-info d-flex align-items-center">
                    <div className="info-icon">
                      <i className="lni-briefcase"></i>
                    </div>
                    <div className="info-text">
                      <p><span>Company:</span> Enphase Energy</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="single-info d-flex align-items-center">
                    <div className="info-icon">
                      <i className="lni-map-marker"></i>
                    </div>
                    <div className="info-text">
                      <p><span>Location:</span> Bangalore, India</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="single-info d-flex align-items-center">
                    <div className="info-icon">
                      <i className="lni-graduation"></i>
                    </div>
                    <div className="info-text">
                      <p><span>Education:</span> B.Tech ECE, NIT Allahabad (8.32/10)</p>
                    </div>
                  </div>
                </li>
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
