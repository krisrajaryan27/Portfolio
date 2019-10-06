import React from 'react';

const Contact = function () {
    return (
    <section id="contact" class="contact-area pt-125 pb-130 gray-bg">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="section-title text-center pb-25">
              <h3>Get In Touch</h3>
              <p>
                 Please do contact me for more details.
              </p>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-6 col-sm-7">
            <div class="contact-box text-center mt-30">
              <div class="contact-icon">
                <i class="lni-map-marker"></i>
              </div>
              <div class="contact-content">
                <h6 class="contact-title">Address</h6>
                <p>A2 - 501, Saarrthi Souvenir, Baner, Pune, Maharashtra, India - 4110045</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-7">
            <div class="contact-box text-center mt-30">
              <div class="contact-icon">
                <i class="lni-phone"></i>
              </div>
              <div class="contact-content">
                <h6 class="contact-title">Phone</h6>
                <p>+91-7349782793</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-7">
            <div class="contact-box text-center mt-30">
              <div class="contact-icon">
                <i class="lni-envelope"></i>
              </div>
              <div class="contact-content">
                <h6 class="contact-title">Email</h6>
                <p>krisv.nit16@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div class="section-title text-center pb-25">
          <div class="col-md-12">
          <a tabindex="0" class="main-btn" href="mailto:krisv.nit16@gmail.com"><span>Contact Me</span></a>
          </div>
        </div>
      </div>
    </section>
    );
  }
  export default Contact;