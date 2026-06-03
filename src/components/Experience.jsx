import React from "react";
import { FaBriefcase, FaCalendarAlt, FaBuilding } from 'react-icons/fa';

function Experience() {
  const experiences = [
    {
      role: "Software Developer",
      company: "REFULGENCE NIC Pvt Ltd",
      duration: "1 Year 10 Months (Current)",
      period: "2025 - Present",
      location: "Chennai",
      responsibilities: [
        "Developing ERP Applications for Advertisement, Material, Circulation, HR, and Finance modules",
        "Working on Desktop Applications using VB.NET",
        "Migrating legacy systems to modern ASP.NET MVC architecture",
        "Team coordination and code review management",
        "Quality assurance and deployment management"
      ],
      achievements: [
        "Successfully migrated 5+ legacy modules to ASP.NET MVC",
        "Reduced production bugs by 40% through thorough testing",
        "Implemented automated deployment processes"
      ]
    },
    {
      role: "Software Developer",
      company: "DESS APPLYING TECHNOLOGIES Pvt Ltd",
      duration: "1 Year",
      period: "April 2023 - April 2024",
      location: "Chennai",
      responsibilities: [
        "Developed Workover, Help Desk & Trophy Deals projects",
        "Implemented dynamic form creation without coding",
        "Created task assignment and monitoring systems",
        "Built e-commerce platform for awards industry",
        "Worked on both front-end and back-end development"
      ],
      achievements: [
        "Successfully delivered 3 major projects on time",
        "Improved system performance by 30%",
        "Received client appreciation for TrophyDeals platform"
      ]
    },
    {
      role: "Software Developer",
      company: "DSM SOFT Pvt Ltd",
      duration: "6 Months",
      period: "2023",
      location: "Chennai",
      responsibilities: [
        "Worked on Milkyway project development",
        "Implemented features based on client requirements",
        "Database design and optimization",
        "Code maintenance and bug fixing"
      ],
      achievements: [
        "Successfully completed project milestones ahead of schedule",
        "Implemented efficient database queries"
      ]
    }
  ];

  return (
    <div className="experience-container">
      <h2>Work Experience</h2>
      <div className="experience-total">
        <FaBriefcase className="total-icon" />
        <span>Total Experience: 2 Years 10 Months</span>
      </div>
      
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-badge">
              <FaBriefcase />
            </div>
            <div className="timeline-content">
              <div className="exp-header">
                <h3>{exp.role}</h3>
                <div className="exp-company">
                  <FaBuilding className="inline-icon" />
                  <h4>{exp.company}</h4>
                </div>
                <div className="exp-duration">
                  <FaCalendarAlt className="inline-icon" />
                  <span>{exp.duration}</span>
                  <span className="exp-period">({exp.period})</span>
                </div>
              </div>
              
              <div className="exp-details">
                <div className="responsibilities">
                  <h5>Key Responsibilities:</h5>
                  <ul>
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="achievements">
                  <h5>Achievements:</h5>
                  <ul>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;