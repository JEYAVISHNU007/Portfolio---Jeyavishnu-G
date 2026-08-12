import React from 'react';
import { Calendar, Briefcase, ChevronRight } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="section-padding reveal">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pre">04. Professional Exposure</span>
          <h2 className="section-title">Internship Experience</h2>
          <div className="section-underline"></div>
        </div>

        <div className="experience-timeline-container">
          <div className="glass-card experience-card">
            
            <div className="experience-header">
              <div className="experience-role-info">
                <div className="experience-icon-circle">
                  <Briefcase size={22} className="text-blue" />
                </div>
                <div>
                  <h3 className="experience-title">Web Development Intern</h3>
                  <span className="experience-company accent-text-purple">Self-Guided & Virtual Internships</span>
                </div>
              </div>
              <div className="experience-date">
                <Calendar size={16} />
                <span>Summer Internship Program</span>
              </div>
            </div>

            <div className="experience-body">
              <p className="experience-intro">
                Participated in a structured web development internship program focusing on building semantic, responsive user interfaces and understanding fundamental frontend engineering concepts.
              </p>
              
              <ul className="experience-highlights">
                <li>
                  <ChevronRight className="highlight-bullet text-blue" size={16} />
                  <span><strong>Responsive Design:</strong> Developed mobile-first web pages utilizing advanced CSS Flexbox, Grid systems, and Media Queries to ensure cross-device consistency.</span>
                </li>
                <li>
                  <ChevronRight className="highlight-bullet text-blue" size={16} />
                  <span><strong>Frontend Architecture:</strong> Converted wireframes into structured HTML5 and clean CSS3 interfaces, aligning closely with visual guidelines.</span>
                </li>
                <li>
                  <ChevronRight className="highlight-bullet text-blue" size={16} />
                  <span><strong>DOM & Logic Handling:</strong> Written performant vanilla JavaScript algorithms to manipulate the DOM, register state changes, and process interactive elements.</span>
                </li>
                <li>
                  <ChevronRight className="highlight-bullet text-blue" size={16} />
                  <span><strong>Development Best Practices:</strong> Focused on clean code structures, version control using Git, and writing accessible, semantic HTML to improve SEO and screen-reader usability.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
