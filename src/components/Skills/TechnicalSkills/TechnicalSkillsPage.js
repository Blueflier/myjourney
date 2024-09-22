import React, { useState, useRef } from 'react';
import { TechnicalSkillsContainer, BlackOverlay } from './TechnicalSkillsPage.styles';
import NavBar from '../../NavBar/NavBar';

const TechnicalSkillsPage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const aboutRef = useRef(null);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    });
    setIsNavOpen(false);
  };

  return (
    <>
      <BlackOverlay />
      <TechnicalSkillsContainer>
        <NavBar 
          show={true} // Always show the NavBar
          toggleNav={toggleNav}
          isNavOpen={isNavOpen}
          scrollToSection={scrollToSection}
          aboutRef={aboutRef}
        />
        <h1>Technical Skills</h1>
        {/* Your content here */}
      </TechnicalSkillsContainer>
    </>
  );
};

export default TechnicalSkillsPage;
