import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaCopy, FaCheck } from 'react-icons/fa';

function Contact() {
  const [copied, setCopied] = useState(false);
  const [copyph, setcopyph] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("shanmugak5611@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const handleCopyphone = () => {
    navigator.clipboard.writeText("+91 9791941687");
    setcopyph(true);
    setTimeout(() => setcopyph(false), 2000);
  };
  
  const contactInfo = {
    email: "shanmugak5611@gmail.com",
    phone: "+91 9791941687",
    location: "Chennai, India",
    linkedin: "https://www.linkedin.com/in/shan-muga-49a6a2305",
    github: "https://github.com/Shanmuga5611"
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-card clickable" onClick={handleCopyEmail}>
            <FaEnvelope className="contact-icon" />
            <div className="contact-detail">
              <h4>Email</h4>
              <p>{contactInfo.email}</p>
              {copied ? <FaCheck className="copy-icon success" /> : <FaCopy className="copy-icon" />}
            </div>
          </div>
          
          <div className="contact-card clickable" onClick={handleCopyphone}>
            <FaPhone className="contact-icon" />
            <div className="contact-detail">
              <h4>Phone</h4>
              <p>{contactInfo.phone}</p>
              {copyph ? <FaCheck className="copy-icon success" /> : <FaCopy className="copy-icon" />}
            </div>
          </div>
          
          <div className="contact-card">
            <FaMapMarkerAlt className="contact-icon" />
            <a href="https://maps.app.goo.gl/W3xLghaVYRE5x9WJA?g_st=aw" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="social-link">
              <h4>Location</h4>
              <p>{contactInfo.location}</p>
            </a>
          </div>
        </div>
        
        <div className="contact-social">
          <h3>Connect with me</h3>
          <div className="social-profiles">
            <a href={contactInfo.linkedin} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="social-link">
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a href={contactInfo.github} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="social-link">
              <FaGithub />
              <span>GitHub</span>
            </a>
          </div>
        </div>
        
        <div className="contact-note">
          <p>Available for freelance work and full-time opportunities. Let's build something amazing together!</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;