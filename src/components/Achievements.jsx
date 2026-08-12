import React from 'react';
import { Zap, Award, Target, Users, Brain, MessageSquare } from 'lucide-react';

const strengths = [
  {
    title: "Problem Solving",
    icon: <Brain size={24} className="strength-icon text-blue" />,
    desc: "Analytical approach to dissecting algorithmic statements and engineering optimize solutions in Java."
  },
  {
    title: "Quick Learner",
    icon: <Zap size={24} className="strength-icon text-purple" />,
    desc: "Ability to rapidly grasp new backend frameworks, SDK structures, and tool chains, adapting to project needs."
  },
  {
    title: "Team Player",
    icon: <Users size={24} className="strength-icon text-blue" />,
    desc: "Collaborative contributor in team sprints, actively aligning on version branch merges and code documentation."
  },
  {
    title: "Self-Motivated",
    icon: <Target size={24} className="strength-icon text-purple" />,
    desc: "Eager to explore experimental technology spaces, including IoT alerts and security layers, independently."
  },
  {
    title: "Communication Skills",
    icon: <MessageSquare size={24} className="strength-icon text-blue" />,
    desc: "Structured articulator of technical problems, project features, and documentation details."
  },
  {
    title: "Hardworking & Dedicated",
    icon: <Award size={24} className="strength-icon text-purple" />,
    desc: "Committed to maintaining consistent coding schedules, resolving bugs, and optimizing codebases."
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding reveal">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pre">07. Core Attributes</span>
          <h2 className="section-title">Strengths & Achievements</h2>
          <div className="section-underline"></div>
        </div>

        {/* Strengths Grid */}
        <div className="strengths-grid">
          {strengths.map((item, index) => (
            <div key={index} className="glass-card strength-card">
              <div className="strength-header">
                <div className="strength-icon-wrapper">
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
              </div>
              <p className="strength-desc">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
