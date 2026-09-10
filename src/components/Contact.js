import React from "react";

const Contact = function () {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Contact</div>
          <h2 className="section-title">Let's Talk</h2>
          <p className="section-subtitle">
            I am exploring Staff and Principal Engineer roles at companies solving
            hard infrastructure problems at scale. If your team is building
            something that needs to work at 3 AM on a Saturday without paging
            anyone, I would like to hear about it.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon">&#9993;</div>
            <div className="contact-card-title">Email</div>
            <div className="contact-card-value">
              <a href="mailto:krisv.nit16@gmail.com">krisv.nit16@gmail.com</a>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-icon">&#127760;</div>
            <div className="contact-card-title">LinkedIn</div>
            <div className="contact-card-value">
              <a href="https://www.linkedin.com/in/krishna-verma/" target="_blank" rel="noopener noreferrer">
                in/krishna-verma
              </a>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-icon">&#128205;</div>
            <div className="contact-card-title">Location</div>
            <div className="contact-card-value">Bangalore, India</div>
            <div className="contact-card-sub">Open to relocation</div>
          </div>
        </div>

        <div className="contact-cta">
          <a href="mailto:krisv.nit16@gmail.com" className="btn btn-primary">
            Send Me an Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
