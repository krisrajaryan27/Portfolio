import React from 'react'
import { Img } from 'react-image'

const krisImg = './images/banner/IMG20190824183503.jpg';
const Header = function () {
    return (
    <header id="home" className="header-area">
      <div className="navigation fixed-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>
  
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <a className="page-scroll" href="#home">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#about">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#timeline">
                        Timeline
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div id="parallax" className="header-content d-flex align-items-center">
        <div className="header-shape shape-one layer" data-depth="0.10">
          <img src="./images/banner/shape/shape-1.png" alt="Shape" />
        </div>
        <div className="header-shape shape-tow layer" data-depth="0.30">
          <img src="./images/banner/shape/shape-2.png" alt="Shape" />
        </div>
  
        <div className="header-shape shape-three layer" data-depth="0.40">
          <img src="./images/banner/shape/shape-3.png" alt="Shape" />
        </div>
  
        <div className="header-shape shape-fore layer" data-depth="0.60">
          <img src="./images/banner/shape/shape-2.png" alt="Shape" />
        </div>
  
        <div className="header-shape shape-five layer" data-depth="0.20">
          <img src="./images/banner/shape/shape-1.png" alt="Shape" />
        </div>
  
        <div className="header-shape shape-six layer" data-depth="0.15">
          <img src="./images/banner/shape/shape-4.png" alt="Shape" />
        </div>
  
        <div className="header-shape shape-seven layer" data-depth="0.50">
          <img src="./images/banner/shape/shape-5.png" alt="Shape" />
        </div>
        <div className="header-shape shape-eight layer" data-depth="0.40">
          <img src="./images/banner/shape/shape-3.png" alt="Shape" />
        </div>
        <div className="header-shape shape-nine layer" data-depth="0.20">
          <img src="./images/banner/shape/shape-6.png" alt="Shape" />
        </div>
        <div className="header-shape shape-ten layer" data-depth="0.30">
          <img src="./images/banner/shape/shape-3.png" alt="Shape" />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="header-content-right">
                <h4 className="sub-title">Hello, I’m</h4>
                <h1 className="title">Krishna Verma</h1>
                <p>Senior Staff Software Engineer</p>
                <a className="main-btn" href="./resume/Krishna_Verma_VisualCV_ResumeLatest.pdf">
                  Download Resume
                </a>
              </div>
            </div>
            <div className="col-lg-6 offset-xl-1">
              <div className="header-image d-none d-lg-block">
                <Img src={krisImg} alt="Krishna" />
                
              </div>
            </div>
          </div>
        </div>
        <div className="header-social">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="header-social-icon">
                  <ul>
                    <li><a href="https://www.linkedin.com/in/krishna-verma/"><i className="lni-linkedin-original"></i></a></li>
                    <li><a href="https://github.com/krisrajaryan27"><i className="lni-github-original"></i></a></li>
                    <li><a href="https://stackoverflow.com/users/6619434/krishna-verma"><i className="lni-stackoverflow"></i></a></li>
                    <li><a href="https://learningnirvana.home.blog/"><i className="lni-wordpress"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    );
  }
  export default Header;
