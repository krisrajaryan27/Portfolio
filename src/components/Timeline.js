import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import StarIcon from '@material-ui/icons/Star';

const Timeline = function() {
  return (
    <div id="timeline">
      <h3 className="section-title text-center">Timeline</h3>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Oct 2018 - Present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Software Engineer - 2</h3>
          <p>Talentica Software</p>
          <p>Pune, Maharashtra, India - 411045</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June, 2016 - Sep, 2018"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <p className="vertical-timeline-element-subtitle">
            Mahindra Comviva
          </p>
          <p>Bangalore, Karnataka, India - 560064</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April, 2012 - May, 2016 "
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelors Of Technology
          </h3>
          <p className="vertical-timeline-element-subtitle">Electronics and Communications Engineering</p>
          <p>CGPA - 8.32/10</p>
          <p>Motilal Nehru National Institute of Technology, Allahabad</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="May, 2011"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Intermediate
          </h3>
          <p className="vertical-timeline-element-subtitle">Maa Bharti Senior Secondary School, Kota, Rajasthan-324010</p>
          <p>CBSE</p>
          <p>Percentage - 82.4%</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April, 2009"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Matriculation
          </h3>
          <p className="vertical-timeline-element-subtitle">St. Xaviers School, Siddharth Nagar, U.P-272207</p>
          <p>ICSE</p>
          <p>Percentage - 83.2%</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
      </div>
  );
};

export default Timeline;
