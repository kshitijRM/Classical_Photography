import React, { useState } from "react";
import Navbar from "./Navbar";
import "./Contact.css";
import Footer from "./footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faLocation,
  faPhone,
  faVoicemail,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"; // Example social media icons

const Contact = () => {
  const [socialMediaLinks] = useState({
    facebook: "https://www.facebook.com/yourpage",
    twitter: "https://www.twitter.com/yourhandle",
    instagram: "https://www.instagram.com/yourhandle",
    youtube: "https://www.youtube.com/yourchannel",
    // Add more social media links as needed
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here (e.g., send data to backend)
    // Clear form fields after submission if needed
    alert("Form submitted successfully!");
  };

  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="contact-container">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            {/* Form fields go here */}
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter First Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter Last Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Query</label>
              <textarea
                id="message"
                name="message"
                rows="9"
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="contact-info">
          <h3>Additional Information</h3>
          <p>
            <FontAwesomeIcon icon={faLocation} /> Classical Photography Bagalkota Road, Vijayapur 586101
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> Phone: +917676771235 -
            +918971920011
          </p>
          <p>
            <FontAwesomeIcon icon={faVoicemail} /> Email:
            classicalphotography@gmail.com
          </p>

          {/* Social Media Links */}
          <div className="social-media links">
            <a
              href={socialMediaLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} /> Facebook
            </a>
            <a
              href={socialMediaLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} /> Twitter
            </a>
            <a
              href={socialMediaLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </a>
            <a
              href={socialMediaLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} /> Youtube
            </a>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
