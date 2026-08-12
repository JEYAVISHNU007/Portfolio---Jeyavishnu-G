import React from 'react';
import { ExternalLink, Code, Vote, AlertTriangle, Camera } from 'lucide-react';

const GithubIcon = ({ size = 20, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projects = [
  {
    id: 1,
    title: "Secured Voting System Using Blockchain",
    icon: <Vote className="project-icon text-blue" />,
    description: "A secure electronic voting system designed to improve transparency, security, and trust in student elections. Currently operates on structured MySQL logs with blockchain integration slated for the roadmap.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"],
    features: [
      "Secure student/voter authentication",
      "Real-time vote casting mechanics",
      "Transparent election auditing process",
      "Verifiable, tamper-evident voting records",
      "Comprehensive Admin dashboard management"
    ],
    github: "https://github.com/jeyavishnug/secured-voting-blockchain",
    demo: "#"
  },
  {
    id: 2,
    title: "Landslide Detection & Monitoring System",
    icon: <AlertTriangle className="project-icon text-purple" />,
    description: "An IoT-based hardware and software monitoring system designed to analyze soil moisture levels and vibration thresholds to notify risk zones in real time.",
    technologies: ["ESP32", "Vibration Sensor", "Moisture Sensor", "Buzzer", "LED", "Wi-Fi"],
    features: [
      "Continuous soil vibration monitoring",
      "Real-time moisture level indexing",
      "Immediate buzzer alarm trigger on thresholds",
      "LED threat-level status signaling",
      "Wi-Fi wireless data transmission"
    ],
    github: "https://github.com/jeyavishnug/iot-landslide-detection",
    demo: "#"
  },
  {
    id: 3,
    title: "Smart Face Recognition Attendance System",
    icon: <Camera className="project-icon text-blue" />,
    description: "An automated attendance tracking platform using computer vision and facial recognition. The system detects faces, matches them against registered student profiles, and automatically logs timestamps.",
    technologies: ["Python", "OpenCV", "Tkinter", "SQLite", "NumPy", "Haar Cascades"],
    features: [
      "Real-time video stream face detection",
      "High-accuracy matching using trained models",
      "Automated attendance logging in SQLite and CSV",
      "Admin dashboard for managing student database",
      "Anti-spoofing logic for image-based detection protection"
    ],
    github: "https://github.com/jeyavishnug/face-recognition-attendance",
    demo: "#"
  }
];

export default function Projects() {
  const handleLinkClick = (e, link, label) => {
    if (link === '#') {
      e.preventDefault();
      alert(`This is a placeholder for the "${label}" link. You can add the actual URL in the component.`);
    }
  };

  return (
    <section id="projects" className="section-padding reveal">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pre">03. Practical Implementations</span>
          <h2 className="section-title">My Projects</h2>
          <div className="section-underline"></div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="glass-card project-card">
              
              <div className="project-card-header">
                <div className="project-icon-wrapper">
                  {project.icon}
                </div>
                <div className="project-header-links">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-action-link"
                    title="View Source on GitHub"
                    onClick={(e) => handleLinkClick(e, project.github, 'GitHub')}
                  >
                    <GithubIcon size={20} />
                  </a>
                  <a 
                    href={project.demo} 
                    className="project-action-link"
                    title="View Live Demo"
                    onClick={(e) => handleLinkClick(e, project.demo, 'Live Demo')}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 className="project-title-text">{project.title}</h3>
              
              <p className="project-desc-text">{project.description}</p>
              
              {/* Features List */}
              <div className="project-features">
                <h4 className="features-subtitle">Key Features:</h4>
                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Badges */}
              <div className="project-tech-stack">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
