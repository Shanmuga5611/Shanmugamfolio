import React from "react";
import { FaCode, FaDatabase, FaLaptopCode, FaTools } from 'react-icons/fa';
import { TbReportMoney } from "react-icons/tb";

function Skills() {
  const skillCategories = [
    {
      icon: <FaCode />,
      title: "Programming Languages",
      skills: ["C#", "VB.NET", "EF Core", "ADO.NET", "LINQ", "Web API"]
    },
    {
      icon: <FaLaptopCode />,
      title: "Web Technologies",
      skills: ["HTML5", "CSS3", "JavaScript", "jQuery", "AJAX", "Bootstrap"]
    },
    {
      icon: <FaDatabase />,
      title: "Databases",
      skills: ["MSSQL", "PostgreSQL", "Oracle SQL"]
    },
    {
      icon: <FaTools />,
      title: "Tools & Frameworks",
      skills: ["ASP.NET Core", "ASP.NET MVC Core", "Web API", "Visual Studio 2013/2019/2022"]
    },
    {
      icon: <FaTools />,
      title: "Database Tools",
      skills: [
        "Toad 11.3 (Oracle)",
        "SQL Server Management Studio (MSSQL)",
        "pgAdmin (PostgreSQL)"
      ]
    },
    {
      icon: <TbReportMoney />,
      title: "Report Tools",
      skills: ["RDLC Reports", "Crystal Reports"]
    }
  ];

  return (
    <div className="skills-container">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skill-category">
            <div className="category-header">
              {category.icon}
              <h3>{category.title}</h3>
            </div>
            <div className="skills-list">
              {category.skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;