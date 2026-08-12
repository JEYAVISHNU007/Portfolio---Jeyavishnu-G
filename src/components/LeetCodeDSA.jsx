import React, { useState } from 'react';
import { Brain, Award, AwardIcon, TrendingUp, Sparkles, Check } from 'lucide-react';

const dsaTopics = [
  "Arrays", "Strings", "Linked Lists", "Trees", "Graphs", 
  "HashMap", "Sliding Window", "Two Pointers", "Binary Search", "Dynamic Programming"
];

export default function LeetCodeDSA() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  // High-fidelity progress stats (placeholders that can be updated later)
  const stats = {
    totalSolved: 245,
    easy: 120,
    medium: 105,
    hard: 20,
    totalQuestions: 3100,
    ranking: "Top 12%",
    streak: "24 Days",
    acceptance: "68.4%"
  };

  return (
    <section id="leetcode" className="section-padding reveal">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pre">06. Problem Solving</span>
          <h2 className="section-title">Data Structures & Algorithms</h2>
          <div className="section-underline"></div>
        </div>

        <div className="dsa-container">
          {/* Left Side: LeetCode Progress Dashboard Card */}
          <div className="glass-card leetcode-card">
            
            <div className="leetcode-header">
              <div className="leetcode-logo-placeholder">
                <Brain className="brain-icon" />
                <div>
                  <h3>LeetCode Progress</h3>
                  <span className="leetcode-user-handle">@jeyavishnu_g</span>
                </div>
              </div>
              <span className="leetcode-badge">Active Practitioner</span>
            </div>

            <div className="leetcode-progress-visual">
              
              {/* Circular Progress Ring */}
              <div className="progress-ring-container">
                <svg className="progress-ring" width="120" height="120">
                  {/* Outer Background Track */}
                  <circle className="progress-ring-track" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="8" fill="transparent" r="50" cx="60" cy="60" />
                  {/* Progress Indicator */}
                  <circle 
                    className="progress-ring-indicator" 
                    stroke="var(--accent-blue)" 
                    strokeWidth="8" 
                    strokeDasharray={`${2 * Math.PI * 50}`}
                    strokeDashoffset={`${2 * Math.PI * 50 * (1 - stats.totalSolved / 500)}`}
                    strokeLinecap="round" 
                    fill="transparent" 
                    r="50" 
                    cx="60" 
                    cy="60" 
                  />
                </svg>
                <div className="progress-ring-text">
                  <span className="progress-num">{stats.totalSolved}</span>
                  <span className="progress-label">Solved</span>
                </div>
              </div>

              {/* Progress Breakdown */}
              <div className="progress-breakdown">
                <div className="breakdown-item easy">
                  <div className="breakdown-meta">
                    <span>Easy</span>
                    <span className="text-white">{stats.easy}</span>
                  </div>
                  <div className="breakdown-bar"><div className="fill-easy" style={{width: '75%'}}></div></div>
                </div>
                <div className="breakdown-item medium">
                  <div className="breakdown-meta">
                    <span>Medium</span>
                    <span className="text-white">{stats.medium}</span>
                  </div>
                  <div className="breakdown-bar"><div className="fill-medium" style={{width: '60%'}}></div></div>
                </div>
                <div className="breakdown-item hard">
                  <div className="breakdown-meta">
                    <span>Hard</span>
                    <span className="text-white">{stats.hard}</span>
                  </div>
                  <div className="breakdown-bar"><div className="fill-hard" style={{width: '35%'}}></div></div>
                </div>
              </div>

            </div>

            {/* General Stats Grid */}
            <div className="leetcode-stats-grid">
              <div className="lc-stat">
                <span className="lc-stat-label">Coding Streak</span>
                <span className="lc-stat-value text-purple">{stats.streak}</span>
              </div>
              <div className="lc-stat">
                <span className="lc-stat-label">Acceptance Rate</span>
                <span className="lc-stat-value">{stats.acceptance}</span>
              </div>
              <div className="lc-stat">
                <span className="lc-stat-label">Platform Ranking</span>
                <span className="lc-stat-value text-blue">{stats.ranking}</span>
              </div>
            </div>

            <a 
              href="https://leetcode.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline btn-leetcode-profile"
              onClick={(e) => {
                e.preventDefault();
                alert("LeetCode Profile placeholder link. You can add your actual profile URL in the code.");
              }}
            >
              View LeetCode Profile
            </a>

          </div>

          {/* Right Side: DSA Focus Topics list */}
          <div className="dsa-topics-content">
            <h3 className="dsa-topics-title">Algorithmic Focus & Practice Areas</h3>
            <p className="dsa-topics-desc">
              Demonstrating active understanding of structural and algorithmic designs. Click on a topic to see focus details:
            </p>
            
            <div className="dsa-topics-grid">
              {dsaTopics.map((topic) => (
                <button 
                  key={topic}
                  onClick={() => setSelectedTopic(topic === selectedTopic ? null : topic)}
                  className={`dsa-topic-tag ${selectedTopic === topic ? 'selected' : ''}`}
                >
                  <Check size={12} className="tag-check" />
                  <span>{topic}</span>
                </button>
              ))}
            </div>

            <div className="dsa-selected-details-box glass-card">
              {selectedTopic ? (
                <div>
                  <div className="selected-details-header">
                    <Sparkles size={16} className="text-blue" />
                    <h4>{selectedTopic} Concept Focus</h4>
                  </div>
                  <p className="selected-details-text">
                    Active practice on LeetCode questions dealing with {selectedTopic}. Solved multiple standard problems involving optimal time constraints, dry-running edge cases, and analyzing space complexity O(N).
                  </p>
                </div>
              ) : (
                <p className="details-placeholder-text">
                  Click on any topic tag above to view details regarding focus problems and optimal solutions.
                </p>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
