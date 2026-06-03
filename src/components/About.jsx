import React from "react";
import { FaUserTie, FaLaptopCode, FaUsers } from 'react-icons/fa';

function About() {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="about-content">
        <p>
          I am a passionate <strong>Software Developer</strong> with <strong>2.10+ years</strong> of experience in developing 
          robust web applications using ASP.NET, C#, VB.NET, JavaScript, and SQL databases. 
          I specialize in analyzing business processes and implementing innovative solutions.
        </p>
        
        <div className="about-highlights">
          <div className="highlight">
            <FaUserTie className="highlight-icon" />
            <h4>Professional Summary</h4>
            <ul>
              {/* <li>2.10+ years of experience in business process analysis</li> */}
              <li>Expert in ASP.NET MVC, C#, VB.NET, JavaScript, jQuery</li>
              <li>Strong OOPs concepts and database management</li>
              <li>Effective team communicator and mentor</li>
            </ul>
          </div>
          
          <div className="highlight">
            <FaLaptopCode className="highlight-icon" />
            <h4>Technical Expertise</h4>
            <ul>
              <li>Full-stack development with .NET technologies</li>
              <li>Database: MSSQL, PostgreSQL, Oracle SQL</li>
              <li>Frontend: HTML, CSS, JavaScript, jQuery, AJAX</li>
              <li>Version Control & Agile methodologies</li>
            </ul>
          </div>
          
          <div className="highlight">
            <FaUsers className="highlight-icon" />
            <h4>Work Philosophy</h4>
            <ul>
              <li>Independent & collaborative work style</li>
              <li>Problem-solving mindset</li>
              <li>Continuous learning & improvement</li>
              <li>Quality-focused development</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;