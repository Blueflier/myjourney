import React, { useState, useRef } from 'react';
import { ProjectManagementContainer, BlackOverlay } from './ProjectManagementPage.styles';
import NavBar from '../../NavBar/NavBar';
import ImageCarousel from '../PublicSpeaking/Carousel/ImageCarousel';

const ProjectManagementPage = () => {
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
      <ProjectManagementContainer>
        <NavBar 
          show={true} // Always show the NavBar
          toggleNav={toggleNav}
          isNavOpen={isNavOpen}
          scrollToSection={scrollToSection}
          aboutRef={aboutRef}
        />
        <h1>Project Management</h1>
        {/* Your content here */}
      </ProjectManagementContainer>
    </>
  );
};

export default ProjectManagementPage;
