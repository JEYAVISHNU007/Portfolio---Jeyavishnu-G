import React from 'react';
import { Award, BookOpen, MapPin, GraduationCap, Heart, Rocket } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-padding reveal">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pre">01. Get To Know Me</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-underline"></div>
        </div>

        <div className="about-grid">
          {/* Left Side: Story */}
          <div className="about-story">
            <p className="about-text">
              I am a motivated <strong>Computer Science and Engineering student</strong> at Dr. NGP Institute of Technology with a strong passion for solving complex programming problems and building practical software solutions.
            </p>
            <p className="about-text">
              My core focus lies in <strong>Java Full Stack Development</strong>, <strong>Data Structures & Algorithms (DSA)</strong>, and modern <strong>Web Development</strong>. I thrive on translating structural concepts into functional, responsive applications. Whether designing databases in MySQL, constructing robust backends using Spring Boot, or engineering frontends in React.js, I approach development with an analytical and clean-code mindset.
            </p>
            <p className="about-text">
              Continuous learning is at the heart of what I do. I actively practice competitive programming concepts, explore backend API structures, and delve into modern concepts like IoT systems and Blockchain architectures. I enjoy working on collaborative project cycles where I can contribute my programming and problem-solving strengths.
            </p>
            
            <div className="about-interests">
              <span className="interest-item"><Heart size={16} className="interest-icon" /> DSA Practice</span>
              <span className="interest-item"><Rocket size={16} className="interest-icon" /> Full Stack Tech</span>
              <span className="interest-item"><BookOpen size={16} className="interest-icon" /> Software Architecture</span>
            </div>
          </div>

          {/* Right Side: Key Profile Cards */}
          <div className="about-cards">
            
            <div className="glass-card about-profile-card">
              <GraduationCap className="about-card-icon" />
              <h3>Degree & Branch</h3>
              <p>B.E. Computer Science and Engineering</p>
              <span className="card-detail-sub">Dr. NGP Institute of Technology</span>
            </div>

            <div className="glass-card about-profile-card">
              <Award className="about-card-icon" />
              <h3>Academic Performance</h3>
              <p>Cumulative CGPA: 7.25 / 10</p>
              <span className="card-detail-sub">CSE Department Core</span>
            </div>

            <div className="glass-card about-profile-card">
              <MapPin className="about-card-icon" />
              <h3>Location</h3>
              <p>Coimbatore, Tamil Nadu</p>
              <span className="card-detail-sub">India (IST Timezone)</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
