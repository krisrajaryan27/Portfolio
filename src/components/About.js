import React from "react";

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
    category: "Observability",
    items: "OpenTelemetry, Grafana, Prometheus, Datadog, Circuit Breakers, Bulkhead Isolation, SLO/SLI Definition"
  }
];

const About = function () {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <div className="section-label">About</div>
          <h2 className="section-title">Engineer, Architect, Leader</h2>
          <p className="section-subtitle">
            Building reliable systems and growing engineering teams across four industries and three continents of deployments.
          </p>
        </div>
        <div className="about-content">
          <div>
            <p className="about-text">
              I am a Senior Staff Software Engineer with deep expertise in platform
              modernization, distributed systems design, and engineering leadership.
              My recent work at Enphase Energy involves migrating a monolithic
              platform to event-driven microservices, building telemetry pipelines
              that ingest 20K+ events per second, and leading a 25-engineer
              cross-functional team.
            </p>
            <p className="about-text">
              Before Enphase, I architected multi-tenant e-commerce platforms at
              Avataar.ai, built enterprise search and encrypted collaboration systems
              at Talentica Software, and delivered telecom-grade loyalty platforms at
              Mahindra Comviva serving 50M+ subscribers.
            </p>
            <div className="about-info">
              <div className="about-info-item">
                <div className="about-info-label">Company</div>
                <div className="about-info-value">Enphase Energy</div>
              </div>
              <div className="about-info-item">
                <div className="about-info-label">Location</div>
                <div className="about-info-value">Bangalore, India</div>
              </div>
              <div className="about-info-item">
                <div className="about-info-label">Education</div>
                <div className="about-info-value">B.Tech, NIT Allahabad</div>
              </div>
              <div className="about-info-item">
                <div className="about-info-label">Experience</div>
                <div className="about-info-value">12+ Years</div>
              </div>
            </div>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-category" key={skill.category}>
                <div className="skill-category-title">{skill.category}</div>
                <div className="skill-category-items">{skill.items}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
