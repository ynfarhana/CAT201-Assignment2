import React, {useState} from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";

import ain from "./ain.JPG";
import aida from "./aida.jpg";
import iman from "./iman.JPG";
import fara from "./fara.JPG";
import project1_image from "./project1_image.png";
import project2_image from "./project2_image.png";
import project3_image from "./project3_image.png";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="app-wrapper">
      <Navbar onConsultClick={toggleModal}/>
      <Hero />

      {/* Main Content Container */}
      <main className="container">
        
        {/* About Section with modern typography */}
        <section id="about-section" className="info-section">
          <div className="section-header">
            <span className="subtitle">Who We Are</span>
            <h2>Welcome to NextGen IT Consultancy</h2>
          </div>
          <p className="description">
            NextGen IT Consultancy is a newly established IT-related company
            formed by a group of computer science graduates. Our company focuses
            on delivering <strong>innovative, reliable, and cost-effective</strong> technology
            solutions to businesses and individuals.
          </p>
        </section>

        <section className="team-section">
          <div className="section-header">
            <span className="subtitle">Project Owners</span>
            <h2>The Minds Behind NextGen IT</h2>
            <p className="description">
              As a group of passionate Computer Science graduates, we founded NextGen IT 
              to bridge the gap between complex technology and business success. 
              We don't just build websites; we engineer digital experiences.
            </p>
          </div>

          <div className="team-grid">
            {/* Member 1 */}
            <div className="team-card">
              <div className="image-container">
                <img src={ain} alt="Nurul Ain Farhana" />
              </div>
              <div className="team-info">
                <h3>Nurul Ain Farhana</h3>
                <p className="role">System Architect</p>
                <p className="bio">Specializing in robust system structures and seamless frontend-backend integration.</p>
              </div>
            </div>

            {/* Member 2 */}
            <div className="team-card">
              <div className="image-container">
                <img src={iman} alt="Wan Iman Delaila" />
              </div>
              <div className="team-info">
                <h3>Wan Iman Delaila</h3>
                <p className="role">Frontend Developer</p>
                <p className="bio">Expert in React.js, creating responsive and intuitive user interfaces.</p>
              </div>
            </div>

            {/* Member 3 */}
            <div className="team-card">
              <div className="image-container">
                <img src={aida} alt="Aida Dafinah" />
              </div>
              <div className="team-info">
                <h3>Aida Dafinah</h3>
                <p className="role">Content & UI Lead</p>
                <p className="bio">Driving visual clarity and consistent messaging across all digital touchpoints.</p>
              </div>
            </div>

            {/* Member 4 */}
            <div className="team-card">
              <div className="image-container">
                <img src={fara} alt="Farahanim Aisyah" />
              </div>
              <div className="team-info">
                <h3>Farahanim Aisyah</h3>
                <p className="role">Multimedia Lead</p>
                <p className="bio">Enhancing user engagement through professional visual elements and video production.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission as "Cards" */}
        <section className="vision-mission-grid">
          <div className="glass-card">
            <h3>Our Mission</h3>
            <p>To deliver innovative and efficient IT solutions that help clients improve productivity and enhance digital presence.</p>
          </div>
          <div className="glass-card">
            <h3>Our Vision</h3>
            <p>To become a trusted IT consultancy company recognized for excellence, creativity, and customer satisfaction.</p>
          </div>
        </section>

        {/* Services Section as a Grid */}
        <section id="services-section" className="services-section">
          <div className="section-header">
            <span className="subtitle">Our Expertise</span>
            <h2>Solutions We Provide</h2>
            <p className="section-intro">
              We leverage cutting-edge technologies to help your business scale 
              in the digital landscape.
            </p>
          </div>

          <div className="services-grid">
          {/* Service 1 */}
            <div className="service-card">
              <div className="service-icon">🌐</div>
              <h3>Custom Website Design</h3>
              <p>High-performance, SEO-friendly websites tailored to your brand identity.</p>
              <a href="#contact" className="service-link">Learn More →</a>
            </div>

          {/* Service 2 */}
          <div className="service-card">
            <div className="service-icon">📱</div>
            <h3>iOS & Android Apps</h3>
            <p>Seamless mobile experiences built with React Native for cross-platform reach.</p>
            <a href="#contact" className="service-link">Learn More →</a>
          </div>

          {/* Service 3 */}
          <div className="service-card">
            <div className="service-icon">💡</div>
            <h3>IT Strategy & Consulting</h3>
            <p>Expert guidance to optimize your technical workflow and digital growth.</p>
            <a href="#contact" className="service-link">Learn More →</a>
          </div>

          {/* Service 4 */}
          <div className="service-card">
            <div className="service-icon">☁️</div>
            <h3>Secure Cloud Migration</h3>
            <p>Moving your infrastructure to the cloud with zero downtime and maximum security.</p>
            <a href="#contact" className="service-link">Learn More →</a>
          </div>
        </div>
      </section>


      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio-section">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Our Works</span>
            <h2>Project Showcase</h2>
            <p className="description">Explore some of the innovative digital solutions we've engineered for our clients.</p>
          </div>

          <div className="portfolio-grid">
            {/* Project 1 */}
            <div className="portfolio-item">
              <img src={project1_image} alt="E-Commerce Platform" />
              <div className="portfolio-overlay">
                <div className="overlay-content">
                  <span className="project-category">Web Development</span>
                  <h3>E-Commerce Solution</h3>
                  <p>A full-featured online store with secure payment integration.</p>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="portfolio-item">
              <img src={project2_image} alt="Booking App" />
              <div className="portfolio-overlay">
                <div className="overlay-content">
                  <span className="project-category">Mobile App</span>
                  <h3>Booking System</h3>
                  <p>Intuitive iOS and Android app for service appointments.</p>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="portfolio-item">
              <img src={project3_image} alt="Dashboard Design" />
              <div className="portfolio-overlay">
                <div className="overlay-content">
                  <span className="project-category">UI/UX Design</span>
                  <h3>Admin Dashboard</h3>
                  <p>A clean, data-driven interface for business analytics.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section id="feedback" className="feedback-section">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Testimonials</span>
            <h2>Client Feedback</h2>
            <p className="description">See what our clients have to say about our digital solutions and consultancy services.</p>
          </div>

          <div className="feedback-grid">
            {/* Review 1 */}
            <div className="feedback-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial">"NextGen IT transformed our manual booking process into a seamless mobile app. Their team of graduates is truly talented and professional!"</p>
              <div className="client-info">
                <strong>Sarah Johnson</strong>
                <span>CEO, Bloom Retail</span>
              </div>
            </div>

            {/* Review 2 */}
            <div className="feedback-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial">"The website design they provided was beyond our expectations. Clean, fast, and very modern. Highly recommended for any startup."</p>
              <div className="client-info">
                <strong>Ahmad Zaki</strong>
                <span>Director, TechFlow MY</span>
              </div>
            </div>

            {/* Review 3 */}
            <div className="feedback-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial">"Excellent IT consultancy. They helped us migrate our data to the cloud with zero downtime. Very cost-effective solutions."</p>
              <div className="client-info">
                <strong>Emily Chen</strong>
                <span>Marketing Lead, Nexus Corp</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with Form */}
      <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Get In Touch</span>
          <h2>Contact NextGen IT</h2>
        </div>

        <div className="contact-wrapper">
          {/* Left Side: Contact Info */}
          <div className="contact-info">
            <h3>Let's start a project together</h3>
            <p>Ready to take your digital presence to the next level? Fill out the form and our team will get back to you within 24 hours.</p>
            
            <div className="info-item">
              <span>📍</span>
              <div>
                <h4>Location</h4>
                <p>Kuala Lumpur, Malaysia</p>
              </div>
            </div>
            
            <div className="info-item">
              <span>📧</span>
              <div>
                <h4>Email Us</h4>
                <p>hello@nextgen-it.com</p>
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="form-group">
              <select required>
                <option value="" disabled selected>Select Service</option>
                <option value="web">Web Design</option>
                <option value="mobile">Mobile App</option>
                <option value="consulting">IT Consulting</option>
              </select>
            </div>
            <div className="form-group">
              <textarea placeholder="Tell us about your project" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn-consult">Send Message</button>
          </form>
        </div>
      </div>
      </section>

      <button 
        className="back-to-top" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>

      </main>
      
      {/* --- CONSULTATION MODAL --- */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={toggleModal}>&times;</button>
            
            <div className="modal-header">
              <h2>Book a Free Consultation</h2>
              <p>Tell us about your project and we'll get back to you within 24 hours.</p>
            </div>

            <form className="consult-form">
              <div className="form-row">
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Work Email" required />
              </div>
              <select required>
                <option value="" disabled selected>Interested Service</option>
                <option value="web">Web Design & Development</option>
                <option value="app">Mobile App Development</option>
                <option value="uiux">UI/UX Strategy</option>
                <option value="consultancy">IT Consultancy</option>
              </select>
              <textarea placeholder="Briefly describe your project goals..." rows="4"></textarea>
              <button type="submit" className="btn-submit-consult">Confirm Booking</button>
            </form>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
}

export default App;