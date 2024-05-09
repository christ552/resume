import React from "react";
import "../footer/Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fab,
  faTwitter,
  faFacebook,
  faLinkedin,
  faGithub,
  faInstagram,
  faYoutube,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
// free-solid-svg-icons";

function Footer() {
  return (
    <div className="footer_main">
      <div className="flootercontainer">
        <div className="socialIcon">
          <a href="">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </div>
      </div>
      <Container>
        <div className="singleCol social-media-icons-white d-flex justify-content-evenly">
          <a href="https://www.facebook.com/" target="_blank">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://github.com/christ552" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/christy-justin-lambert-72554019/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </Container>

      <h5 className="coppyright">
        Copyright &copy; 2024, Conception par M Justin LAMBERT
      </h5>
    </div>
  );
}

export default Footer;
