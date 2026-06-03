import React from 'react';
import { FaCode, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Header() {
  return (
    <header>
      <div className="header-content">
        <div className="profile-badge">
          <div className="profile-icon">
            <FaCode />
          </div>
        </div>
        <h1>Shanmuganathan K</h1>
        <p className="title">Software Developer</p>
        <p className="experience-badge">2.10+ Years Experience</p>
        <div className="social-links">
          <a href="mailto:shanmugak5611@gmail.com" className="social-icon">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/shan-muga-49a6a2305" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Shanmuga5611" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;