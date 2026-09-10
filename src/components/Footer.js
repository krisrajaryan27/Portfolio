import React from "react";

const Footer = function() {
  return (
    <div>
      <footer id="footer" className="footer-area">
        <div className="footer-widget pt-80 pb-80">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="footer-content text-center">
                  <h5 className="footer-name">Krishna Verma</h5>
                  <p className="mt-10">
                    Senior Staff Software Engineer | Distributed Systems | Platform Architecture
                  </p>
                  <ul className="footer-social mt-20">
                    <li>
                      <a href="https://www.linkedin.com/in/krishna-verma/" target="_blank" rel="noopener noreferrer">
                        <i className="lni-linkedin-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/krisrajaryan27" target="_blank" rel="noopener noreferrer">
                        <i className="lni-github-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://stackoverflow.com/users/6619434/krishna-verma" target="_blank" rel="noopener noreferrer">
                        <i className="lni-stackoverflow"></i>
                      </a>
                    </li>
                  </ul>
                  <p className="footer-copyright mt-20">
                    Built with React. Hosted on GitHub Pages.
                  </p>
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
