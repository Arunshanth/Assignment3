import React from "react";
import "./index.css";

function NavBar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-start">
          <a className="navbar-item" href="#">
            Home
          </a>
          <a className="navbar-item" href="#AboutMe"> 
            About Me
          </a>
          <a className="navbar-item" href="#Education">
            Education
          </a>
          <a className="navbar-item" href="#Awards">
            Awards &amp; Certifications
          </a>
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-danger" href="#Contact">
                <strong>Contact</strong>
              </a>
            </div>
          </div>
        </div>  

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
            <a className="button is-light" href="https://github.com/Arunshanth/">
            <div className="icon">
                  <i className="fab fa-2xl fa-github"></i>
              </div>
            </a>

            <a className="button is-light" href="https://web.facebook.com/Arunshanth1214/">
                <div className="icon">
                  <i className="fab fa-2xl fa-facebook facebook-color"></i>
                </div>
            </a>
            
            </div>

          </div>
        </div>    
      </nav>
  );
}


export default NavBar;