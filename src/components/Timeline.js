import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import StarIcon from '@material-ui/icons/Star';

const workExperiences = [
  {
    date: "Dec 2024 - Present",
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
    date: "Dec 2021 - Dec 2024",
    title: "Lead Software Engineer",
    company: "Avataar.ai",
    location: "Bangalore, India",
    highlights: [
      "Architected multi-tenant e-commerce platform integrating Shopify, BigCommerce, Wix, and WooCommerce -- 500+ merchants, 99.9% uptime, P95 under 200ms.",
      "Designed plugin-based integration architecture, reducing new platform onboarding from 8 weeks to 2 weeks (75% reduction).",
      "Led 20+ engineers; established OKR framework and promotion track, developing 4 engineers into senior roles.",
      "Implemented CI/CD pipelines reducing deployment cycle from 2 days to under 30 minutes, enabling 15+ production deploys/week."
    ]
  },
  {
    date: "Sep 2018 - Dec 2021",
    title: "Lead Software Engineer",
    company: "Talentica Software",
    location: "Pune, India",
    highlights: [
      "Architected document retrieval for AlphaSense (Elasticsearch, PostgreSQL) -- 60% throughput improvement on 10M+ document corpus with sub-second search.",
      "Designed backend for Symphony encrypted collaboration platform -- 100K+ concurrent connections, sub-50ms message delivery.",
      "Built enterprise SSO framework (SAML 2.0, Okta, ADFS) reducing auth integration from 6 weeks to 3 days per client.",
      "Led 12 engineers; established code review practices and knowledge-sharing that improved team velocity by 25%."
    ]
  },
  {
    date: "Jun 2015 - Dec 2018",
    title: "Software Engineer",
    company: "Mahindra Comviva",
    location: "Bangalore, India",
    highlights: [
      "Built loyalty management platform for telecom operators across Indonesia, Bangladesh, and Vietnam -- 50M+ subscribers, 10K+ TPS.",
      "Designed processing framework increasing transaction throughput by 60% during peak campaigns.",
      "Implemented database optimization strategies reducing average query response time by 50%.",
      "Designed automated health check and alerting systems, cutting incident response from 4 hours to under 30 minutes."
    ]
  }
];

const educationItems = [
  {
    date: "2011 - 2015",
    title: "Bachelor of Technology",
    subtitle: "Electronics and Communications Engineering",
    details: ["CGPA: 8.32/10", "Motilal Nehru National Institute of Technology (MNNIT), Allahabad"]
  }
];

const Timeline = function() {
  return (
    <div id="timeline">
      <h3 className="section-title text-center">Experience</h3>
      <VerticalTimeline>
        {workExperiences.map((experience) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={experience.date}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
            key={`${experience.company}-${experience.date}`}
            visible={true}
          >
            <h3 className="vertical-timeline-element-title">{experience.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{experience.company}</h4>
            <p>{experience.location}</p>
            <ul className="timeline-highlights">
              {experience.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
        {educationItems.map((education) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date={education.date}
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<SchoolIcon />}
            key={`${education.title}-${education.date}`}
            visible={true}
          >
            <h3 className="vertical-timeline-element-title">{education.title}</h3>
            <p className="vertical-timeline-element-subtitle">{education.subtitle}</p>
            {education.details.map((detail) => (
              <p key={detail}>{detail}</p>
            ))}
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<StarIcon />}
          visible={true}
        />
      </VerticalTimeline>
      </div>
  );
};

export default Timeline;
