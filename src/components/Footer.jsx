import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';

const GithubIcon = ({ size = 18, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        
        <div className="footer-left">
          <p className="footer-copyright">
            &copy; 2026 Jeyavishnu G. All rights reserved.
          </p>
          <span className="footer-tagline">Built with React.js & Custom CSS</span>
        </div>

        <div className="footer-right">
          <div className="footer-socials">
            <a 
              href="mailto:jeyavishnug@gmail.com" 
              className="footer-social-link"
              title="Mail Jeyavishnu"
            >
              <Mail size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/jeyavishnu-g-79abb1370" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-link"
              title="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>
            <a 
              href="https://github.com/JEYAVISHNU007/project" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-link"
              title="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>
          </div>

          <button 
            className="btn-back-to-top" 
            onClick={scrollToTop} 
            aria-label="Scroll back to top"
          >
            Back to Top
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}
