import React from "react";

const Hero = function () {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-label">Senior Staff Software Engineer</div>
          <h1 className="hero-name">
            Krishna <span>Verma</span>
          </h1>
          <p className="hero-tagline">
            I build distributed systems that survive production. 12+ years
            turning fragile monoliths into resilient platforms handling
            20,000+ events per second -- across energy tech, e-commerce,
            fintech, and telecom.
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-value">12+</div>
              <div className="hero-stat-label">Years</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">20K+</div>
              <div className="hero-stat-label">Events/Sec</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">25+</div>
              <div className="hero-stat-label">Engineers Led</div>
            </div>
          </div>
          <div className="hero-cta">
            <a href="#impact" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-wrapper">
            <img
              src="./images/banner/IMG20190824183503.jpg"
              alt="Krishna Verma"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
