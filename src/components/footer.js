// src/Footer.js
import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faYoutube,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="contents">
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>
            <span>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Address: Classical
              Photography Bagalkota Road, Vijayapur 586101
            </span>
            <br />
            <br />
            <span>
              <FontAwesomeIcon icon={faEnvelope} /> Email:
              classicalphotography@gmail.com
            </span>
            <br />
            <br />
            <span>
              <FontAwesomeIcon icon={faPhone} /> Phone: +917676774125 -
              +918971925195
            </span>
            <br />
            <br />
            <span>
              <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp: +917676774125
            </span>
          </p>
        </div>
        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <p>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} /> Facebook
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </a>

            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} /> Twitter
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} /> Youtube
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGoogle} /> google
            </a>
          </p>
        </div>
        <div className="map"> 
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244426.33339939563!2d75.4133319854736!3d16.81834436550511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc655e8f432cc43%3A0x43f8c349d1296d57!2sgovt%20politecnic%20college%20bijapur!5e0!3m2!1sen!2sin!4v1718863448099!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="add-map"></iframe>
        </div>
      </div>
      <center>
        <div className="footer-bottom">
          <h3>&copy; 2K24 Classical Photography. All Rights Reserved.</h3>
        </div>
      </center>
    </footer>
  );
};

export default Footer;
