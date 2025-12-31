import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './Navbar.css';

function Navbar({ onConsultClick }) {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Group */}
        <div className="logo-section">
          <div className="logo-box">{"<>"}</div>
          <span className="logo-name">NEXTGEN IT</span>
        </div>

        {/* Desktop Links Group */}
        <ul className="nav-menu">
          <li><a href="#about-section">About Us</a></li>
          <li><a href="#services-section">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#feedback">Feedback</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>

        {/* Action Group */}
        <div className="nav-actions">
          <button className="btn-consult" onClick={onConsultClick}>
            Consult Now
          </button>

          {/* User Profile - will hide on mobile because of 'desktop-only' class */}
          <div className="user-profile desktop-only">
            <span className="user-icon">👤</span>
          </div>

          {/* Mobile Menu Icon */}
          <div className="mobile-menu-icon" onClick={() => setToggleMenu(!toggleMenu)}>
            {toggleMenu 
              ? <RiCloseLine color="#003366" size={27} /> 
              : <RiMenu3Line color="#003366" size={27} />
            }
          </div>
        </div>

        {/* Mobile Sidebar Overlay */}
        <div className={`nav-menu-mobile ${toggleMenu ? 'active' : ''}`}>
          <ul className="nav-links-mobile">
            <li><a href="#about-section" onClick={() => setToggleMenu(false)}>About Us</a></li>
            <li><a href="#services-section" onClick={() => setToggleMenu(false)}>Services</a></li>
            <li><a href="#portfolio" onClick={() => setToggleMenu(false)}>Portfolio</a></li>
            <li><a href="#feedback" onClick={() => setToggleMenu(false)}>Feedback</a></li>
            <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact Us</a></li>
          </ul>
        </div>

        {/* Overlay Background to close menu when clicking outside */}
      {toggleMenu && <div className="menu-overlay" onClick={() => setToggleMenu(false)}></div>}
      
      </div>
    </nav>
  );
}

export default Navbar;