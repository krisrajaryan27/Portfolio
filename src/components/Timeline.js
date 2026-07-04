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
    location: "Bangalore, Karnataka, India",
    highlights: [
      "Leading migration from a legacy Ruby on Rails monolith to event-driven microservices using Java 21, Spring WebFlux, MongoDB, MySQL, Cassandra, AWS, Confluent Kafka, Docker, and Kubernetes.",
      "Owns telemetry processing architecture for microcontrollers, PCUs, and Envoy devices, handling more than 20K reports per second across critical report types.",
      "Delivered audit logs, UDP ping stabilization, performance, inventory, notification, and configuration reporting with major latency, TPS, and infrastructure-cost improvements.",
      "Provides technical leadership for a 25-developer team across ENXT platform initiatives and hardware-oriented reporting systems."
    ]
  },
  {
    date: "Dec 2021 - Dec 2024",
    title: "Lead Software Engineer",
    company: "Avataar.ai",
    location: "Bangalore, Karnataka, India",
    highlights: [
      "Directed e-commerce platform integrations with BigCommerce, Shopify, Wix, and WooCommerce for immersive 3D product experiences.",
      "Engineered the Avataar Engine with MERN stack services, AWS Lambda, API Gateway, S3, SQS, and analytics infrastructure.",
      "Designed microservices for user and team management, catalog, translation, work item, order, cart, payment, and adapter workflows.",
      "Led a 20-developer team through product delivery, documentation, operational monitoring, and production-quality deployments."
    ]
  },
  {
    date: "Dec 2018 - Sep 2021",
    title: "Lead Software Engineer",
    company: "Talentica Software",
    location: "Pune, Maharashtra, India",
    highlights: [
      "Built microservices for financial document retrieval and AlphaSense search features with Java 8, Spring Boot, AWS S3, DynamoDB, Docker, and Kubernetes.",
      "Developed entity-page and feed integrations using React, Redux, TypeScript, and Node.js.",
      "Delivered SSO for a recruitment platform using Java, Spring Boot, Struts 2.x, SAML 2.0, AngularJS, and major identity providers.",
      "Built AtheerAir platform services, customer dashboards, logging, user management, and manufacturing workflow capabilities."
    ]
  },
  {
    date: "June 2015 - Dec 2018",
    title: "Software Engineer",
    company: "Mahindra Comviva Technologies",
    location: "Bangalore, Karnataka, India",
    highlights: [
      "Delivered telecom software products for clients across Indonesia, Bangladesh, and Vietnam.",
      "Owned Loyalty Management Solution and IRIS deployments, production support, and customer-specific enhancements.",
      "Improved backend throughput by implementing a plugin model that increased TPS by roughly 60%.",
      "Built customer-care GUI features, reports, interfaces, and widgets for evolving telecom product requirements."
    ]
  }
];

const educationItems = [
  {
    date: "2011 - 2015",
    title: "Bachelor of Technology",
    subtitle: "Electronics and Communications Engineering",
    details: ["CGPA - 8.32/10", "Motilal Nehru National Institute of Technology, Allahabad"]
  },
  {
    date: "May 2011",
    title: "Intermediate",
    subtitle: "Maa Bharti Senior Secondary School, Kota, Rajasthan",
    details: ["CBSE", "Percentage - 82.4%"]
  },
  {
    date: "April 2009",
    title: "Matriculation",
    subtitle: "St. Xaviers School, Siddharth Nagar, U.P",
    details: ["ICSE", "Percentage - 83.2%"]
  }
];

const Timeline = function() {
  return (
    <div id="timeline">
      <h3 className="section-title text-center">Timeline</h3>
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
