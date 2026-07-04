import React from "react";

const Footer = function() {
  return (
    <div>
      <footer id="footer" className="footer-area">
        <div className="footer-widget pt-130 pb-130">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="footer-content text-center">
                  <p className="mt-">
                    Please contact me on the links below.
                  </p>
                  <ul>
                    <li>
                      <a href="https://www.linkedin.com/in/krishna-verma/">
                        <i className="lni-linkedin-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/krisrajaryan27">
                        <i className="lni-github-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://stackoverflow.com/users/6619434/krishna-verma">
                        <i className="lni-stackoverflow"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://learningnirvana.home.blog/">
                        <i className="lni-wordpress"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://epistemophilicnirvana.blogspot.com/">
                        <i className="lni-blogger"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/bakchod_nawab">
                        <i className="lni-twitter-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/krisrajaryan">
                        <i className="lni-facebook-original"></i>
                      </a>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <a href="#home" className="back-to-top">
        <i className="lni-chevron-up"></i>
      </a>
    </div>
  );
};

export default Footer;
