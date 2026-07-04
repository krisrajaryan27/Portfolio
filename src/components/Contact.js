import React from 'react';

const Contact = function () {
    return (
    <section id="contact" className="contact-area pt-125 pb-130 gray-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center pb-25">
              <h3>Get In Touch</h3>
              <p>
                 Please contact me for senior engineering leadership, staff/principal engineer, and distributed systems opportunities.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-7">
            <div className="contact-box text-center mt-30">
              <div className="contact-icon">
                <i className="lni-map-marker"></i>
              </div>
              <div className="contact-content">
                <h6 className="contact-title">Location</h6>
                <p>Bangalore, Karnataka, India</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-7">
            <div className="contact-box text-center mt-30">
              <div className="contact-icon">
                <i className="lni-phone"></i>
              </div>
              <div className="contact-content">
                <h6 className="contact-title">Phone</h6>
                <p>+91-7349782793</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-7">
            <div className="contact-box text-center mt-30">
              <div className="contact-icon">
                <i className="lni-envelope"></i>
              </div>
              <div className="contact-content">
                <h6 className="contact-title">Email</h6>
                <p>krisv.nit16@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="section-title text-center pb-25">
          <div className="col-md-12">
          <a tabIndex="0" className="main-btn" href="mailto:krisv.nit16@gmail.com"><span>Contact Me</span></a>
          </div>
        </div>
      </div>
    </section>
    );
  }
  export default Contact;
