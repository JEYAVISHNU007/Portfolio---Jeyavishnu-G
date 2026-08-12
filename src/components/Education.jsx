import React from 'react';
import { Calendar, GraduationCap, School, CheckCircle2 } from 'lucide-react';

const educationData = [
  {
    id: 1,
    type: "university",
    degree: "B.E. Computer Science and Engineering",
    institution: "Dr. NGP Institute of Technology",
    location: "Coimbatore, Tamil Nadu",
    duration: "2024 - Present",
    performance: "CGPA: 7.25 / 10",
    details: "Currently focusing on core computer science fundamentals including Data Structures & Algorithms, Database Management Systems, Operating Systems, Object-Oriented Programming (Java), and Web Technologies."
  },
  {
    id: 2,
    type: "school",
    degree: "HSC (Higher Secondary Certificate)",
    institution: "Sri Shanmuka Matric Higher Secondary School",
    location: "Tamil Nadu, India",
    duration: "Completed 2024",
    performance: "Score: 79%",
    details: "Specialized in Computer Science, Mathematics, Physics, and Chemistry."
  },
  {
    id: 3,
    type: "school",
    degree: "SSLC (Secondary School Leaving Certificate)",
    institution: "Ashoka Sishu Vihar Matriculation School",
    location: "Tamil Nadu, India",
    duration: "Completed 2022",
    performance: "Score: 84.6%",
    details: "Acquired strong foundation in Mathematics, Science, and Social Studies."
  }
];

export default function Education() {
  return (
    <section id="education" className="section-padding reveal">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pre">05. Academic Background</span>
          <h2 className="section-title">Education</h2>
          <div className="section-underline"></div>
        </div>

        {/* Timeline Grid */}
        <div className="education-timeline">
          {educationData.map((edu, idx) => (
            <div key={edu.id} className="education-item">
              <div className="education-line-node">
                <div className="timeline-dot">
                  {edu.type === 'university' ? <GraduationCap size={18} /> : <School size={18} />}
                </div>
                {idx !== educationData.length - 1 && <div className="timeline-connector"></div>}
              </div>
              
              <div className="glass-card education-content-card">
                <div className="edu-card-header">
                  <div>
                    <h3 className="edu-degree">{edu.degree}</h3>
                    <span className="edu-institution">{edu.institution}</span>
                    <span className="edu-location"> ({edu.location})</span>
                  </div>
                  <div className="edu-meta">
                    <span className="edu-performance">{edu.performance}</span>
                    <span className="edu-duration">
                      <Calendar size={14} />
                      {edu.duration}
                    </span>
                  </div>
                </div>
                <p className="edu-desc">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
