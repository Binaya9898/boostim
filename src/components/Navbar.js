import React from "react";
// import "../images/logo.png";
import "../css/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
      <div className="container-fluid">
        <button
          data-mdb-collapse-init
          className="navbar-toggler"
          type="button"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <a className="navbar-brand mt-2 mt-lg-0" href="#">
            {/* <img src="../images/logo.png" alt="bootstim" loading="lazy" /> */}

            <img
              src={require("../images/logo.png")}
              alt="bootstim"
              loading="lazy"
              style={{
                height: "40px",
                width: "150px",
              }}
            />
          </a>
          <ul
            className="navbar-nav me-auto mb-2 mb-lg-0"
            style={{
              marginLeft: "200px",
            }}
          >
            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
                <i class="fa fa-angle-down mx-2" aria-hidden="true"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Agency
                <i class="fa fa-angle-down mx-2" aria-hidden="true"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                CaseStudy
                <i class="fa fa-angle-down mx-2" aria-hidden="true"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Resources
                <i class="fa fa-angle-down mx-2" aria-hidden="true"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center">
          <div className="dropdown">
            <button
              className="btn btn-light"
              style={{
                border: "1px solid black",
                borderRadius: "8px",
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
