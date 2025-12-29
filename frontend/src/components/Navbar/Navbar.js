import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Group */}
        <div className="logo-section">
          <div className="logo-box">{"<>"}</div>
          <span className="logo-name">NEXTGEN IT</span>
          
        </div>

        {/* Links Group - This is what needs to be horizontal */}
        <ul className="nav-menu"> 
          <li><a href="#about-section">About Us</a></li>
          <li><a href="#services-section">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#feedback">Feedback</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>

        {/* Button Group */}
        <div className="nav-actions">
          <button className="btn-consult">Consult Now</button>
          <div className="user-profile">
            <span className="user-icon">👤</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;