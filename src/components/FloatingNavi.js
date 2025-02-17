import React, { useEffect, useState } from 'react';
import './styles/FloatingNavi.css';

function FloatingNavi() {
  const [activeSection, setActiveSection] = useState('start');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['start', 'value', 'service', 'tech', 'team'];
      const offsets = sections.map(
        section => document.getElementById(section).offsetTop
      );
      const scrollPosition = window.scrollY;

      sections.forEach((section, index) => {
        if (scrollPosition >= offsets[index] && scrollPosition < offsets[index + 1]) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="floating-navi">
      {['start', 'value', 'service', 'tech', 'team'].map(section => (
        <button
          key={section}
          className={activeSection === section ? 'active' : ''}
          onClick={() =>
            document.getElementById(section).scrollIntoView({ behavior: 'smooth' })
          }
        >
          {section.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default FloatingNavi;
