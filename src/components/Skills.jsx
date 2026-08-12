import React from 'react';
import { Code, Server, Layout, Cpu, Database, Blocks, GitBranch, ShieldCheck } from 'lucide-react';

const skillCategories = [
  {
    title: "Languages & Core",
    icon: <Code className="category-icon text-blue" />,
    skills: [
      { name: "Java", level: 85 },
      { name: "Data Structures & Algorithms", level: 80 },
      { name: "JavaScript", level: 75 }
    ]
  },
  {
    title: "Backend & Database",
    icon: <Server className="category-icon text-purple" />,
    skills: [
      { name: "Spring Boot", level: 75 },
      { name: "MySQL", level: 80 },
      { name: "REST APIs", level: 80 }
    ]
  },
  {
    title: "Frontend Development",
    icon: <Layout className="category-icon text-blue" />,
    skills: [
      { name: "React.js", level: 75 },
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 }
    ]
  },
  {
    title: "Tools & Emerging Tech",
    icon: <Cpu className="category-icon text-purple" />,
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "IoT basics", level: 70 },
      { name: "Blockchain basics", level: 65 }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding reveal">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pre">02. Technical Competencies</span>
          <h2 className="section-title">My Skills</h2>
          <div className="section-underline"></div>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card skill-card">
              <div className="skill-category-header">
                {category.icon}
                <h3>{category.title}</h3>
              </div>
              
              <div className="skill-list">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-bg">
                      <div 
                        className="skill-bar-fill" 
                        style={{ 
                          width: `${skill.level}%`,
                          background: index % 2 === 0 
                            ? 'linear-gradient(90deg, var(--accent-blue), var(--accent-purple))'
                            : 'linear-gradient(90deg, var(--accent-purple), var(--accent-blue))'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
