import React from "react";
import { FaCodeBranch, FaShoppingCart, FaDatabase, FaChartLine } from 'react-icons/fa';

function Projects() {
  const projects = [
    {
      title: "ERP Applications",
      company: "Refulgence Nic Pvt Ltd (Kumudam Publication)",
      period: "2025-2026",
      description: "Enterprise Resource Planning system with multiple business modules including Advertisement, Finance, Materials, Circulation, and HR.",
      icon: <FaDatabase />,
      features: [
        "Migrated legacy VB (GRAPES) application modules to ASP.NET MVC",
        "Identified and resolved logical gaps and validation issues",
        "Fixed production bugs based on user feedback",
        "Acted as team coordinator for code review and task assignment",
        "Ensured quality assurance through thorough testing"
      ],
      technologies: ["ASP.NET", "Oracle SQL", "jQuery", "AJAX", "MVC"],
      role: ".NET Full-Stack Developer & Team Coordinator"
    },
    {
      title: "Workover",
      company: "DESS Applying Technologies",
      period: "2023-2024",
      description: "Dynamic form management system with task assignment and monitoring capabilities.",
      icon: <FaCodeBranch />,
      features: [
        "Dynamic form implementation without writing code",
        "Seamless task assignment based on client requirements",
        "Role-based project management system",
        "Task monitoring and progress tracking tools",
        "Employee leave application management system"
      ],
      technologies: ["ASP.NET MVC", "C#", "JavaScript", "SQL Server"],
      role: "Full-Stack Developer"
    },
    {
      title: "TrophyDeals",
      company: "DESS Applying Technologies",
      period: "2023-2024",
      description: "E-commerce platform exclusively for awards and trophies industry.",
      icon: <FaShoppingCart />,
      features: [
        "Product showcase with detailed descriptions and pricing",
        "Dynamic form options for product customization",
        "Complete CRUD operations for product management",
        "Sales reports for monthly insights",
        "Seamless online shopping experience"
      ],
      technologies: ["ASP.NET Frameworks", "C#", "jQuery", "JavaScript", "MSSQL"],
      role: "Full-Stack Developer"
    },
    {
      title: "HelpDesk & Milkyway",
      company: "DESS Applying Technologies / DSM Soft",
      period: "2023-2024",
      description: "Help desk management system and Milkyway project for streamlined operations.",
      icon: <FaChartLine />,
      features: [
        "Ticket management and tracking system",
        "Automated workflow for issue resolution",
        "Customer support portal integration",
        "Real-time status updates and notifications",
        "Analytics dashboard for performance metrics"
      ],
      technologies: ["ASP.NET Frameworks", "C#", "Webform(.aspx)", "JavaScript", "PostgreSQL"],
      role: "Software Developer"
    }
  ];

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card-new">
            <div className="project-header">
              <div className="project-icon">{project.icon}</div>
              <div className="project-title">
                <h3>{project.title}</h3>
                <p className="project-company">{project.company}</p>
                <span className="project-period">{project.period}</span>
              </div>
            </div>
            
            <p className="project-description">{project.description}</p>
            
            <div className="project-role">
              <strong>Role:</strong> {project.role}
            </div>
            
            <div className="project-features">
              <h4>Key Features & Responsibilities:</h4>
              <ul>
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="project-tech">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;