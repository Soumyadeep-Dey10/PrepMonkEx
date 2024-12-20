import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTextAnimation } from '/src/hooks/useTextAnimation';
import { FaFacebook, FaGooglePlus, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './HomePage.css';
import { Link } from 'react-router-dom';

// Importing images
import mocktestImage from '/src/assets/mocktest.png';
import interviewImage from '/src/assets/interview.jpg';
import practiceImage from '/src/assets/practice.jpeg';
import quizImage from '/src/assets/quiz.jpg';

import parthaImage from '/src/assets/Partha.jpg';
import dipImage from '/src/assets/Dip.jpg';
import soumoImage from '/src/assets/Soumo.jpg';
import biswaImage from '/src/assets/Biswa.jpg';

const Homepage = () => {
  const navigate = useNavigate();

  const handleLoginButtonClick = () => {
    navigate('/Register');
  };

  return (
    <div className="homepage">
      <div className="homepage-background-animation">
        <div className="homepage-shape homepage-shape1"></div>
        <div className="homepage-shape homepage-shape2"></div>
        <div className="homepage-shape homepage-shape3"></div>
        <div className="homepage-shape homepage-shape4"></div>
      </div>
      <nav className="homepage-navbar">
        <div className="homepage-logo">YourLogo</div>
        <ul className="homepage-nav-links">
          <li><Link to="#home">Home</Link></li>
          <li><Link to="#what-we-offer">Our Facilities</Link></li>
          <li><Link to="#team">Team</Link></li>
          <li><Link to="#contact">Contact</Link></li>
        </ul>
        <button className="homepage-login-button" onClick={handleLoginButtonClick}>Register / Login</button>
      </nav>

      <section id="home" className="homepage-hero">
        <div className="homepage-hero-content">
          <h1 className="typing-text">{useTextAnimation('Welcome to Our Amazing Company', 100, 1000)}</h1>
          <p className="typing-text">{useTextAnimation('Discover excellence in everything we do', 70, 1000)}</p>
          <button className="homepage-cta-button" onClick={handleLoginButtonClick}>Learn More</button>
        </div>
      </section>

      {/* What We Offer Section */}
      <section id="what-we-offer" className="homepage-what-we-offer-section">
        <h2>Our Facilities</h2>
        <div className="homepage-offer-grid">
          {[
            { name: 'MOCK TEST', image: mocktestImage },
            { name: 'INTERVIEW PREPARATION', image: interviewImage },
            { name: 'PRACTICE SET WITH EXPLANATION', image: practiceImage },
            { name: 'QUIZ', image: quizImage },
          ].map((offer, index) => (
            <div key={index} className="homepage-offer-card">
              <img src={offer.image} alt={offer.name} />
              <div className="homepage-offer-content">
                <h3>{offer.name}</h3>
                <p>Experience the best in {offer.name.toLowerCase()} with our tailored programs.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="homepage-team">
        <h2>Meet Our Team</h2>
        <div className="homepage-team-grid">
          {[
            { name: 'ParthaSarathi', role: 'Frontend Developer', image: parthaImage },
            { name: 'Dip', role: 'Web Developer', image: dipImage },
            { name: 'Soumyadeep', role: 'Full Stack Developer', image: soumoImage },
            { name: 'Biswajit', role: 'Full Stack Developer', image: biswaImage },
          ].map((member, index) => (
            <div key={index} className="homepage-team-member">
              <div className="homepage-member-image-container">
                <img src={member.image} alt={member.name} className="homepage-member-image" />
              </div>
              <div className="homepage-member-details">
                <h3>{member.name}</h3>
                <p className="homepage-member-role">{member.role}</p>
                <ul className="homepage-social-links">
                  <li><Link to="#"><FaFacebook /></Link></li>
                  <li><Link to="#"><FaTwitter /></Link></li>
                  <li><Link to="#"><FaLinkedin /></Link></li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="homepage-footer">
        <div className="homepage-footer-content">
          <div className="homepage-footer-section">
            <h3>About Us</h3>
            <p>We are committed to providing exceptional services and experiences to our valued customers.</p>
          </div>
          <div className="homepage-footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="#home">Home</Link></li>
              <li><Link to="#what-we-offer">What We Offer</Link></li>
              <li><Link to="#team">Team</Link></li>
              <li><Link to="#contact">Contact</Link></li>
            </ul>
          </div>
          <div className="homepage-footer-section">
            <h3>Contact Us</h3>
            <p>Email: info@yourcompany.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 123 Main St, City, Country</p>
          </div>
        </div>
        <div className="homepage-footer-bottom">
          <p>&copy; 2023 Your Company Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
