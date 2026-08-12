import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail, Play, Code2, Terminal, RefreshCw } from 'lucide-react';
import profileImg from '../assets/jv_photo.jpeg';

const highlightLine = (line, tab) => {
  if (!line) return '';
  if (tab === 'json') {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) {
      let html = line
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
      return <span dangerouslySetInnerHTML={{ __html: html }} />;
    }
    const keyPart = line.substring(0, colonIndex);
    const valPart = line.substring(colonIndex);
    
    let highlightedKey = keyPart
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/(".*?")/, '<span class="code-keyword">$1</span>');
      
    let highlightedVal = valPart
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/(".*?")/, '<span class="code-string">$1</span>')
      .replace(/\b(\d+(\.\d+)?)\b/, '<span class="code-number">$1</span>');
      
    return <span dangerouslySetInnerHTML={{ __html: highlightedKey + highlightedVal }} />;
  } else {
    // Split by string literals first to protect string values from keyword matching
    const parts = line.split(/(".*?")/g);
    const highlightedParts = parts.map((part) => {
      if (part.startsWith('"') && part.endsWith('"')) {
        return `<span class="code-string">${part}</span>`;
      }
      
      let html = part
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
        
      const keywords = ['public', 'class', 'static', 'void', 'new', 'return'];
      keywords.forEach(kw => {
        const regex = new RegExp(`\\b(${kw})\\b`, 'g');
        html = html.replace(regex, '<span class="code-keyword">$1</span>');
      });
      
      const types = ['String', 'DeveloperProfile', 'Developer'];
      types.forEach(t => {
        const regex = new RegExp(`\\b(${t})\\b`, 'g');
        html = html.replace(regex, '<span class="code-type">$1</span>');
      });
      
      html = html.replace(/\.([\w]+)(?=\()/g, '.<span class="code-method">$1</span>');
      return html;
    });
    
    return <span dangerouslySetInnerHTML={{ __html: highlightedParts.join('') }} />;
  }
};

export default function Hero() {
  const [activeTab, setActiveTab] = useState('java');
  const [consoleOutput, setConsoleOutput] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [typingText, setTypingText] = useState('');

  const javaCode = `public class Developer {
    public static void main(String[] args) {
        DeveloperProfile jeyavishnu = new DeveloperProfile(
            "Jeyavishnu G",
            "B.E. Computer Science & Engineering",
            "Dr. NGP Institute of Technology"
        );
        
        jeyavishnu.addSkills(new String[]{
            "Java", "Data Structures & Algorithms", 
            "Spring Boot", "React.js", "MySQL"
        });
        
        jeyavishnu.printStatus();
    }
}`;

  const jsonCode = `{
  "name": "Jeyavishnu G",
  "role": "Java Full Stack Developer",
  "location": "Coimbatore, Tamil Nadu, India",
  "education": {
    "degree": "B.E. Computer Science and Engineering",
    "college": "Dr. NGP Institute of Technology",
    "cgpa": 7.25
  },
  "openToRole": [
    "Software Developer Intern",
    "Associate Software Engineer",
    "Java Developer"
  ]
}`;

  const runCode = () => {
    if (isRunning) return;
    setIsRunning(true);
    setConsoleOutput(["$ javac Developer.java", "$ java Developer"]);
    
    setTimeout(() => {
      setConsoleOutput(prev => [...prev, "[SYSTEM] Loading portfolio resources... 100%"]);
    }, 600);

    setTimeout(() => {
      setConsoleOutput(prev => [...prev, "[LOG] Core skills loaded successfully."]);
    }, 1200);

    setTimeout(() => {
      setConsoleOutput(prev => [
        ...prev,
        "------------------------------------",
        "Profile Initialized: Jeyavishnu G",
        "Education: Dr. NGP IT (CGPA: 7.25)",
        "Core Stack: Java & Spring Boot Full Stack",
        "Status: Ready for placement & internship opportunities!",
        "------------------------------------"
      ]);
      setIsRunning(false);
    }, 2000);
  };

  const resetConsole = () => {
    setConsoleOutput([]);
    setIsRunning(false);
  };

  const handleScrollTo = (id) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        
        {/* Left Side: Copy */}
        <div className="hero-content">
          <div className="hero-profile-header">
            <img src={profileImg} alt="Jeyavishnu G" className="hero-profile-avatar" />
            <div className="hero-badge">
              <span className="badge-glow"></span>
              <span className="badge-text">Available for Placements & Internships</span>
            </div>
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Jeyavishnu G</span>
          </h1>
          
          <h2 className="hero-subtitle">
            Computer Science Student & <span className="accent-text-blue">Aspiring Java Full Stack Developer</span>
          </h2>
          
          <p className="hero-description">
            Building practical solutions through code, problem solving, and continuous learning. Focused on writing robust backend systems and responsive modern interfaces.
          </p>

          <div className="hero-actions">
            <button onClick={() => handleScrollTo('#projects')} className="btn btn-primary">
              View My Projects <ArrowRight size={18} />
            </button>
            <button onClick={() => handleScrollTo('#contact')} className="btn btn-outline">
              Contact Me <Mail size={18} />
            </button>
            <a 
              href="#resume-placeholder" 
              className="btn btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                alert("Resume download triggers here. (Placeholder attached)");
              }}
            >
              <Download size={18} /> Resume
            </a>
          </div>
        </div>

        {/* Right Side: Interactive IDE Console Visual */}
        <div className="hero-visual">
          <div className="ide-window">
            
            {/* Header dots */}
            <div className="ide-header">
              <div className="ide-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="ide-title-tab">
                <Terminal size={14} className="ide-title-icon" />
                <span>jeyavishnu-workspace</span>
              </div>
            </div>

            {/* Editor Tab Selectors */}
            <div className="ide-tabs">
              <button 
                className={`ide-tab ${activeTab === 'java' ? 'active' : ''}`}
                onClick={() => { setActiveTab('java'); resetConsole(); }}
              >
                <Code2 size={14} className="tab-icon java-icon" />
                Developer.java
              </button>
              <button 
                className={`ide-tab ${activeTab === 'json' ? 'active' : ''}`}
                onClick={() => { setActiveTab('json'); resetConsole(); }}
              >
                <Code2 size={14} className="tab-icon json-icon" />
                Profile.json
              </button>
            </div>

            {/* Code Workspace Editor */}
            <div className="ide-editor">
              <pre className="code-block">
                <code>
                  {activeTab === 'java' 
                    ? javaCode.split('\n').map((line, i) => (
                        <div key={i} className="code-line">
                          <span className="line-num">{i + 1}</span>
                          <span className="line-text">{highlightLine(line, 'java')}</span>
                        </div>
                      ))
                    : jsonCode.split('\n').map((line, i) => (
                        <div key={i} className="code-line">
                          <span className="line-num">{i + 1}</span>
                          <span className="line-text">{highlightLine(line, 'json')}</span>
                        </div>
                      ))
                  }
                </code>
              </pre>
            </div>

            {/* Controls */}
            <div className="ide-bar">
              <button 
                className={`btn-ide-action ${isRunning ? 'running' : ''}`} 
                onClick={runCode}
                disabled={isRunning}
              >
                <Play size={14} /> {isRunning ? 'Running...' : 'Run Program'}
              </button>
              {consoleOutput.length > 0 && (
                <button className="btn-ide-action btn-secondary" onClick={resetConsole}>
                  <RefreshCw size={14} /> Clear
                </button>
              )}
            </div>

            {/* Console Output Window */}
            {consoleOutput.length > 0 && (
              <div className="ide-console">
                <div className="console-title">Console Output:</div>
                <div className="console-content">
                  {consoleOutput.map((log, index) => (
                    <div key={index} className="console-line">
                      {log}
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
