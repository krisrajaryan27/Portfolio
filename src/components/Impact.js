import React from "react";

const metrics = [
  { value: "20K+", label: "Events/Sec", description: "Telemetry throughput" },
  { value: "70%", label: "Cost Reduction", description: "Infrastructure savings" },
  { value: "99%+", label: "SLA Achieved", description: "From 2% baseline" },
  { value: "25+", label: "Engineers Led", description: "Cross-functional" }
];

const projects = [
  {
    title: "Monolith-to-Microservices Migration",
    company: "Enphase Energy",
    description: "Led the transformation of a legacy Ruby on Rails monolith into an event-driven microservices architecture using Java 21, Spring WebFlux, Kafka, and Kubernetes on AWS. Consolidated ~50 VMs into containerized services.",
    tech: ["Java 21", "Spring WebFlux", "Kafka", "Kubernetes", "AWS"],
    results: ["70% infrastructure cost reduction", "Weekly to daily deployments", "8 independently deployable services"]
  },
  {
    title: "High-Throughput Telemetry Platform",
    company: "Enphase Energy",
    description: "Designed an async, event-driven telemetry ingestion platform processing 20K+ reports/sec from millions of globally deployed IoT devices. Backpressure at every stage with bounded buffers, circuit breakers, and dead-letter queues.",
    tech: ["Java", "Kafka", "MQTT", "Protocol Buffers", "AWS"],
    results: ["20K+ events/sec sustained", "p99 latency under 200ms", "Zero data loss since launch"]
  },
  {
    title: "Service Reliability Turnaround",
    company: "Enphase Energy",
    description: "Inherited a core service at 2% SLA. Categorized three months of incidents by root cause, then systematically fixed: connection pooling, cursor-based pagination, circuit breakers, and bulkhead isolation.",
    tech: ["PgBouncer", "Circuit Breakers", "OpenTelemetry", "Grafana"],
    results: ["SLA from 2% to 99% in 10 weeks", "90% reduction in on-call alerts", "Playbook adopted org-wide"]
  },
  {
    title: "Multi-Tenant E-Commerce Platform",
    company: "Avataar.ai",
    description: "Architected integration layer connecting Shopify, BigCommerce, Wix, and WooCommerce with a unified webhook processing pipeline. Plugin-based architecture dramatically reduced onboarding time.",
    tech: ["Node.js", "React", "AWS Lambda", "DynamoDB", "API Gateway"],
    results: ["500+ merchants, 99.9% uptime", "P95 latency under 200ms", "75% faster platform onboarding"]
  }
];

const Impact = function () {
  return (
    <section id="impact" className="impact">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Impact</div>
          <h2 className="section-title">Measurable Results at Scale</h2>
          <p className="section-subtitle">
            Systems I have architected and teams I have led, measured by the outcomes that matter.
          </p>
        </div>

        <div className="metrics-grid">
          {metrics.map((m) => (
            <div className="metric-card" key={m.label}>
              <div className="metric-value">{m.value}</div>
              <div className="metric-label">{m.label}</div>
              <div className="metric-description">{m.description}</div>
            </div>
          ))}
        </div>

        <div className="projects-grid">
          {projects.map((p) => (
            <div className="project-card" key={p.title}>
              <div className="project-company">{p.company}</div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-description">{p.description}</p>
              <div className="project-tech">
                {p.tech.map((t) => (
                  <span className="tech-tag" key={t}>{t}</span>
                ))}
              </div>
              <ul className="project-results">
                {p.results.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
