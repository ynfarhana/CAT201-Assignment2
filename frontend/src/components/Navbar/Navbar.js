import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './Navbar.css';

function Navbar({onConsultClick}) {
  const [toggleMenu, setToggleMenu] = useState(false);
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
          <button className="btn-consult" onClick={onConsultClick}>Consult Now</button>
          <div className="user-profile">
            <span className="user-icon">👤</span>

              {/* Mobile Menu Icon */}
              <div className="mobile-menu-icon">
                {toggleMenu 
                  ? <RiCloseLine color="#003366" size={27} onClick={() => setToggleMenu(false)} />
                  : <RiMenu3Line color="#003366" size={27} onClick={() => setToggleMenu(true)} />
                }
              </div>
          </div>
        </div>

        {/* Mobile Overlay Menu */}
        {toggleMenu && (
          <div className="nav-menu-mobile">
            <ul className="nav-links-mobile">
              <li><a href="#about-section" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#services-section" onClick={() => setToggleMenu(false)}>Services</a></li>
              <li><a href="#portfolio" onClick={() => setToggleMenu(false)}>Portfolio</a></li>
            </ul>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;