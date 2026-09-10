import React from "react";

const workExperiences = [
  {
    date: "Dec 2024 -- Present",
    title: "Senior Staff Software Engineer",
    company: "Enphase Energy",
    location: "Bangalore, India",
    highlights: [
      "Architected monolith-to-microservices migration (Java 21, Spring WebFlux, Kafka, K8s on AWS), consolidating ~50 VMs and cutting infrastructure costs by 70%.",
      "Designed telemetry platform ingesting 20K+ reports/sec across 10+ report types with sub-200ms p99 latency and zero data loss.",
      "Drove core service SLA from 2% to 99%+ through systematic reliability engineering -- circuit breakers, connection pooling, and observability overhaul.",
      "Led 25+ engineer cross-functional team; established ADRs, tech debt governance, and engineering excellence standards across 4 product teams.",
      "Influenced $2M+ infrastructure investment decisions through platform modernization roadmaps presented to VP Engineering."
    ]
  },
  {
    date: "Dec 2021 -- Dec 2024",
    title: "Lead Software Engineer",
    company: "Avataar.ai",
    location: "Bangalore, India",
    highlights: [
      "Architected multi-tenant e-commerce platform integrating Shopify, BigCommerce, Wix, and WooCommerce -- 500+ merchants, 99.9% uptime, P95 under 200ms.",
      "Designed plugin-based integration architecture, reducing new platform onboarding from 8 weeks to 2 weeks (75% reduction).",
      "Led 20+ engineers; established OKR framework and promotion track, developing 4 engineers into senior roles.",
      "Implemented CI/CD pipelines reducing deployment cycle from 2 days to under 30 minutes."
    ]
  },
  {
    date: "Sep 2018 -- Dec 2021",
    title: "Lead Software Engineer",
    company: "Talentica Software",
    location: "Pune, India",
    highlights: [
      "Architected document retrieval for AlphaSense (Elasticsearch, PostgreSQL) -- 60% throughput improvement on 10M+ document corpus.",
      "Designed backend for Symphony encrypted collaboration platform -- 100K+ concurrent connections, sub-50ms delivery.",
      "Built enterprise SSO framework (SAML 2.0, Okta, ADFS) reducing auth integration from 6 weeks to 3 days per client."
    ]
  },
  {
    date: "Jun 2015 -- Dec 2018",
    title: "Software Engineer",
    company: "Mahindra Comviva",
    location: "Bangalore, India",
    highlights: [
      "Built loyalty management platform for telecom operators across Indonesia, Bangladesh, and Vietnam -- 50M+ subscribers, 10K+ TPS.",
      "Designed processing framework increasing transaction throughput by 60%.",
      "Implemented database optimization strategies reducing average query response time by 50%."
    ]
  }
];

const education = {
  date: "2011 -- 2015",
  title: "Bachelor of Technology, ECE",
  company: "NIT Allahabad (MNNIT)",
  detail: "CGPA: 8.32 / 10.0"
};

const Experience = function () {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Experience</div>
          <h2 className="section-title">Career Timeline</h2>
          <p className="section-subtitle">
            From telecom systems in Southeast Asia to IoT platforms powering millions of solar devices globally.
          </p>
        </div>

        <div className="timeline">
          {workExperiences.map((exp) => (
            <div className="timeline-item" key={`${exp.company}-${exp.date}`}>
              <div className="timeline-dot"></div>
              <div className="timeline-date">{exp.date}</div>
              <h3 className="timeline-role">{exp.title}</h3>
              <div className="timeline-company">{exp.company}</div>
              <div className="timeline-location">{exp.location}</div>
              <ul className="timeline-highlights">
                {exp.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          ))}

          <div className="timeline-item">
            <div className="timeline-dot education"></div>
            <div className="timeline-date">{education.date}</div>
            <h3 className="timeline-role">{education.title}</h3>
            <div className="timeline-company">{education.company}</div>
            <div className="timeline-location">{education.detail}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
