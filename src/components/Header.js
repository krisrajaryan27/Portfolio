import React from 'react'
import Img from 'react-image'

const krisImg = './images/banner/IMG20190824183503.jpg';
const Header = function () {
    return (
    <header id="home" class="header-area">
      <div class="navigation fixed-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <nav class="navbar navbar-expand-lg">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="toggler-icon"></span>
                  <span class="toggler-icon"></span>
                  <span class="toggler-icon"></span>
                </button>
  
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                      <a class="page-scroll" href="#home">
                        Home
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="page-scroll" href="#about">
                        About
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="page-scroll" href="#timeline">
                        Timeline
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="page-scroll" href="#contact">
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
      <div id="parallax" class="header-content d-flex align-items-center">
        <div class="header-shape shape-one layer" data-depth="0.10">
          <img src="./images/banner/shape/shape-1.png" alt="Shape" />
        </div>
        <div class="header-shape shape-tow layer" data-depth="0.30">
          <img src="./images/banner/shape/shape-2.png" alt="Shape" />
        </div>
  
        <div class="header-shape shape-three layer" data-depth="0.40">
          <img src="./images/banner/shape/shape-3.png" alt="Shape" />
        </div>
  
        <div class="header-shape shape-fore layer" data-depth="0.60">
          <img src="./images/banner/shape/shape-2.png" alt="Shape" />
        </div>
  
        <div class="header-shape shape-five layer" data-depth="0.20">
          <img src="./images/banner/shape/shape-1.png" alt="Shape" />
        </div>
  
        <div class="header-shape shape-six layer" data-depth="0.15">
          <img src="./images/banner/shape/shape-4.png" alt="Shape" />
        </div>
  
        <div class="header-shape shape-seven layer" data-depth="0.50">
          <img src="./images/banner/shape/shape-5.png" alt="Shape" />
        </div>
        <div class="header-shape shape-eight layer" data-depth="0.40">
          <img src="./images/banner/shape/shape-3.png" alt="Shape" />
        </div>
        <div class="header-shape shape-nine layer" data-depth="0.20">
          <img src="./images/banner/shape/shape-6.png" alt="Shape" />
        </div>
        <div class="header-shape shape-ten layer" data-depth="0.30">
          <img src="./images/banner/shape/shape-3.png" alt="Shape" />
        </div>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-5 col-lg-6">
              <div class="header-content-right">
                <h4 class="sub-title">Hello, I’m</h4>
                <h1 class="title">Krishna Verma</h1>
                <p>Full Stack Developer</p>
                <a class="main-btn" href="./resume/Krishna_Resume.pdf">
                  Download Resume
                </a>
              </div>
            </div>
            <div class="col-lg-6 offset-xl-1">
              <div class="header-image d-none d-lg-block">
                <Img src={krisImg} alt="Krishna" />
                
              </div>
            </div>
          </div>
        </div>
        <div class="header-social">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="header-social-icon">
                  <ul>
                    <li><a href="https://www.linkedin.com/in/krishna-verma/"><i class="lni-linkedin-original"></i></a></li>
                    <li><a href="https://github.com/krisrajaryan27"><i class="lni-github-original"></i></a></li>
                    <li><a href="https://stackoverflow.com/users/6619434/krishna-verma"><i class="lni-stackoverflow"></i></a></li>
                    <li><a href="https://learningnirvana.home.blog/"><i class="lni-wordpress"></i></a></li>
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