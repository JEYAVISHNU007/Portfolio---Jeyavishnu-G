import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'LeetCode', href: '#leetcode' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Background blur transition on scroll
      setIsScrolled(window.scrollY > 20);

      // Section tracker
      const sections = navItems.map(item => document.getElementById(item.href.replace('#', '')));
      let currentSection = 'home';

      sections.forEach(section => {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (rect.top <= 160 && rect.bottom >= 160) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-brand" onClick={(e) => handleNavClick(e, '#home')}>
          <Code2 className="navbar-logo-icon" />
          <span>Jeyavishnu.dev</span>
        </a>

        {/* Desktop Menu */}
        <ul className="navbar-menu">
          {navItems.map((item) => (
            <li key={item.name} className="navbar-item">
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`navbar-link ${activeSection === item.href.replace('#', '') ? 'active' : ''}`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="navbar-mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Panel */}
        <div className={`navbar-mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`navbar-mobile-link ${
                    activeSection === item.href.replace('#', '') ? 'active' : ''
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
