import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import LeetCodeDSA from './components/LeetCodeDSA';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  
  // Set page meta details on load
  useEffect(() => {
    document.title = "Jeyavishnu G | Java Full Stack Developer & CSE Student Portfolio";
  }, []);

  // Intersection Observer scroll reveal effect
  useEffect(() => {
    const observerOptions = {
      root: null, // viewport
      threshold: 0.12, // trigger when 12% is visible
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Once animated, we don't need to observe it anymore
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Track all sections with the .reveal class
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="portfolio-app">
      {/* Premium glowing background overlay */}
      <div className="grid-overlay"></div>
      
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Main Section Content Wrapper */}
      <main>
        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Experience Section */}
        <Experience />

        {/* LeetCode / DSA Section */}
        <LeetCodeDSA />

        {/* Achievements / Strengths */}
        <Achievements />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
