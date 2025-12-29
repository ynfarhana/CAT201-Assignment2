import React from 'react';
import './Hero.css';
import hero from './hero.png';

function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">
          Professional Web Design & <br />
          <span className="highlight-blue">Mobile App Development</span> in Malaysia
        </h1>
        
        <h2 className="hero-subtitle">
          <span className="gold-text">Connecting You and Me</span> Through Digital Solutions.
        </h2>
        
        <p className="hero-description">
          At NEXTGEN IT, we specialize in providing top-notch web design services. 
          Our team of experienced designers and developers work closely with you 
          to create visually appealing and user-friendly websites that represent your brand.
        </p>

        <div className="hero-btns">
          <a href="#services-section" className="btn-primary">Our Services</a>
          <a href="#portfolio" className="btn-secondary">View Portfolio</a>
        </div>
      </div>

      <div className="hero-image">
        <div className="image-wrapper">
          <img 
            src={hero}
            alt="Team working on laptop" 
          />
          {/* This adds the decorative dots like in your reference image */}
          <div className="dots-decoration"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;