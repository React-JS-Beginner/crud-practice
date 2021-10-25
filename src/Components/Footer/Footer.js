import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  const facebook = <FontAwesomeIcon icon={faFacebook} />;
  const instagram = <FontAwesomeIcon icon={faInstagram} />;
  const youtube = <FontAwesomeIcon icon={faYoutube} />;
  const phoneIcon = <FontAwesomeIcon icon={faPhone} />;
  return (
    <div className="main-footer bg-dark text-white">
      <Container className="d-flex align-items-center justify-content-between p-5">
        <div className="text-center">
          <strong className="text-white">
            <span className="text-success">ELITE</span> BOXING
          </strong>

          <p>Copyright &copy; 2021 All Rights Reserved </p>
        </div>

        <div className="text-center">
          <div>
            <p>Connect With Us</p>
          </div>

          <div>
            <a
              href="https://www.facebook.com/NorthwestEliteKickboxing/"
              target="_blank"
              className="navs text-decoration-none fs-4"
            >
              {facebook}
            </a>{" "}
            &nbsp;&nbsp;
            <a
              href="https://www.youtube.com/channel/UCZBhYdrkmHA_a52RXmRujHA"
              target="_blank"
              className="navs text-decoration-none fs-4"
            >
              {youtube}
            </a>{" "}
            &nbsp;&nbsp;
            <a
              href="https://www.instagram.com/elitekickboxinggym/"
              target="_blank"
              className="navs text-decoration-none fs-4"
            >
              {instagram}
            </a>
          </div>
        </div>

        <div className="text-center">
          <strong className="text-white">ADDRESS</strong>

          <p>
            California St, Stockton, United States
            <br />
            {phoneIcon} +1 209-507-5152
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
