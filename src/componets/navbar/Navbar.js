import React from "react";
import "../navbar/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../images/logo2.png";
// imporing react fontawsome for modifing humberger menu
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <a className="navbar-brand" href="#">
        <img src={logo} alt="logo..." className="logo img-fluid" />
      </a>

      <button
        className="navbar-toggler me-3 "
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        {/* bellow, it is the defalt humberger icon */}
        {/* <span className="navbar-toggler-icon"></span> */}
        <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
      </button>

      <div
        className="collapse navbar-collapse me-3"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Accueil
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              De moi
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Des services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Expérience
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={() => {}}>
              Contact
            </a>
          </li>
        </ul>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
