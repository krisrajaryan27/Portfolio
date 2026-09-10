import React from 'react';

const metrics = [
  { value: "20K+", label: "Events/Sec", description: "Telemetry ingestion throughput" },
  { value: "70%", label: "Cost Reduction", description: "Infrastructure savings from migration" },
  { value: "99%+", label: "SLA Achieved", description: "Up from 2% baseline" },
  { value: "25+", label: "Engineers Led", description: "Cross-functional team" }
];

const projects = [
  {
    title: "Monolith-to-Microservices Migration",
    company: "Enphase Energy",
    description: "Led the transformation of a legacy Ruby on Rails monolith into an event-driven microservices architecture using Java 21, Spring WebFlux, Kafka, and Kubernetes on AWS. Consolidated approximately 50 VMs and reduced infrastructure costs by 70%.",
    tech: ["Java 21", "Spring WebFlux", "Kafka", "Kubernetes", "AWS"],
    results: ["70% infrastructure cost reduction", "Weekly to daily deployments", "8 independently deployable services"]
  },
  {
    title: "High-Throughput Telemetry Platform",
    company: "Enphase Energy",
    description: "Designed an async, event-driven telemetry ingestion platform processing 20,000+ reports/sec from millions of globally deployed solar and battery devices. Built with backpressure at every stage -- bounded buffers, circuit breakers, and dead-letter queues.",
    tech: ["Java", "Kafka", "MQTT", "Protocol Buffers", "AWS"],
    results: ["20K+ events/sec sustained", "p99 latency under 200ms", "Zero data loss since launch"]
  },
  {
    title: "Service Reliability Turnaround",
    company: "Enphase Energy",
    description: "Inherited a core service at 2% SLA. Categorized three months of incidents by root cause, then systematically fixed: PgBouncer for connection pooling, cursor-based pagination for memory leaks, circuit breakers and bulkhead isolation for cascading failures.",
    tech: ["PgBouncer", "Circuit Breakers", "OpenTelemetry", "Grafana"],
    results: ["SLA from 2% to 99% in 10 weeks", "90% reduction in on-call alerts", "Reliability playbook adopted org-wide"]
  },
  {
    title: "Multi-Tenant E-Commerce Platform",
    company: "Avataar.ai",
    description: "Architected integration layer connecting Shopify, BigCommerce, Wix, and WooCommerce with a unified webhook processing pipeline. Plugin-based architecture cut new platform onboarding from 8 weeks to 2 weeks.",
    tech: ["Node.js", "React", "AWS Lambda", "DynamoDB", "API Gateway"],
    results: ["500+ merchants, 99.9% uptime", "P95 latency under 200ms", "75% faster platform onboarding"]
  }
];

const Impact = function () {
  return (
    <section id="impact" className="impact-area pt-125 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <h2 className="title">Impact</h2>
              <p>Measurable results from building systems at scale</p>
            </div>
          </div>
        </div>

        <div className="row mt-50">
          {metrics.map((metric) => (
            <div className="col-lg-3 col-md-6 col-sm-6" key={metric.label}>
              <div className="metric-card text-center">
                <div className="metric-value">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
                <div className="metric-description">{metric.description}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-60">
          {projects.map((project) => (
            <div className="col-lg-6" key={project.title}>
              <div className="project-card mt-30">
                <div className="project-header">
                  <h5 className="project-title">{project.title}</h5>
                  <span className="project-company">{project.company}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span className="tech-tag" key={t}>{t}</span>
                  ))}
                </div>
                <ul className="project-results">
                  {project.results.map((result) => (
                    <li key={result}>{result}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Impact;
