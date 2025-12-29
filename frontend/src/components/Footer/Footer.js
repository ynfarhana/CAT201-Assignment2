import React from "react";
import "./Footer.css";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { TbBrandLinkedin } from "react-icons/tb";
import { RiTwitterXLine } from "react-icons/ri";

export function Footer() {
  return (
    <footer className="footer-section">
  <div className="container">
    <div className="footer-content">
      {/* Column 1: Brand & Bio */}
      <div className="footer-column brand-col">
        <div className="logo-section">
          <div className="logo-box">NI</div>
          <span className="logo-name2">NEXTGEN IT</span>
        </div>
        <p>
          Transforming businesses through innovative digital solutions. 
          Founded by computer science graduates, driven by excellence.
        </p>
        <div className="social-links">
          <a href="https://www.facebook.com/nextgenit" target="_blank" rel="noreferrer">
            <i class="fa fa-facebook"></i><RiFacebookCircleLine size={32} /> </a> 
          <a href="https://www.instagram.com/nextgenit" target="_blank" rel="noreferrer">
            <i class="fa fa-instagram" ></i><FaInstagram size={32}/> </a> 
          <a href="https://www.linkedin.com/company/nextgenit" target="_blank" rel="noreferrer">
            <i class="fa fa-linkedin"></i><TbBrandLinkedin size={32}/> </a> 
          <a href="https://www.twitter.com/nextgenit" target="_blank" rel="noreferrer" >
            <i class="fa fa-twitter"></i><RiTwitterXLine size={32}/> </a>
        </div>
      </div>

      {/* Column 2: Quick Links */}
      <div className="footer-column">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#about-section">About Us</a></li>
          <li><a href="#services-section">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#team-section">Our Team</a></li>
        </ul>
      </div>

      {/* Column 3: Contact Info */}
      <div className="footer-column">
        <h3>Contact Us</h3>
        <p>📍 Kuala Lumpur, Malaysia</p>
        <p>📧 hello@nextgen-it.com</p>
        <p>📞 +60 123 456 789</p>
      </div>
    </div>

    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} NextGen IT Consultancy. All Rights Reserved.</p>
    </div>
  </div>
</footer>
  );
}
