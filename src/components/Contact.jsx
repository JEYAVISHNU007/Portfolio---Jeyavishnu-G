import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

const GithubIcon = ({ size = 24, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 24, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Simulate sending email
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 4000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="section-padding reveal">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pre">08. Reach Out</span>
          <h2 className="section-title">Contact Me</h2>
          <div className="section-underline"></div>
        </div>

        <div className="contact-grid">
          {/* Left Side: Contact details */}
          <div className="contact-info">
            <h3 className="contact-heading">Let's Connect!</h3>
            <p className="contact-subtext">
              I am actively seeking placement opportunities, software engineering internships, and collaboration on development projects. Feel free to reach out via email or connect on professional socials!
            </p>

            <div className="contact-cards-list">
              
              <a href="mailto:jeyavishnug@gmail.com" className="glass-card contact-detail-card">
                <Mail className="contact-icon text-blue" />
                <div>
                  <h4>Email Address</h4>
                  <p>jeyavishnug@gmail.com</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/jeyavishnu-g-79abb1370" target="_blank" rel="noopener noreferrer" className="glass-card contact-detail-card">
                <LinkedinIcon className="contact-icon text-purple" />
                <div>
                  <h4>LinkedIn</h4>
                  <p>linkedin.com/in/jeyavishnu-g-79abb1370</p>
                </div>
              </a>

              <a href="https://github.com/JEYAVISHNU007/project" target="_blank" rel="noopener noreferrer" className="glass-card contact-detail-card">
                <GithubIcon className="contact-icon text-blue" />
                <div>
                  <h4>GitHub Profile</h4>
                  <p>github.com/JEYAVISHNU007/project</p>
                </div>
              </a>

              <div className="glass-card contact-detail-card no-hover">
                <MapPin className="contact-icon text-purple" />
                <div>
                  <h4>Location</h4>
                  <p>Coimbatore, Tamil Nadu, India</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Message form */}
          <div className="glass-card contact-form-card">
            <h3 className="contact-heading">Send a Message</h3>
            
            {isSubmitted ? (
              <div className="form-success-banner">
                <CheckCircle2 size={40} className="success-check-icon" />
                <h4>Message Sent!</h4>
                <p>Thank you for reaching out, Jeyavishnu will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name" 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email" 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    rows="5" 
                    placeholder="Type your message here..." 
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-submit">
                  Send Message <Send size={16} />
                </button>
              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
