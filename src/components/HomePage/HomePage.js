import React, { useState, useRef, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import Card from './Card/Card';
import Footer from './Footer/Footer';
import { TypeAnimation } from 'react-type-animation';


import {
  HomeContainer,
  WelcomeSection,
  WelcomeText,
  Subtitle,
  AboutSection,
  CardsContainer
} from './HomePage.styles';

const HomePage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavBar(window.scrollY > 100); // Show navbar after scrolling 100px
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    });
    setIsNavOpen(false);
  };

  return (
    <HomeContainer>
      <NavBar 
        show={showNavBar}
        toggleNav={toggleNav}
        isNavOpen={isNavOpen}
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
      />
      <WelcomeSection>
        <WelcomeText>It's all about</WelcomeText>
      <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'impacting with curiosity',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'impacting with community',
        1000,
        'impacting with commitment',
        1000,
     
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
      </WelcomeSection>
      <AboutSection ref={aboutRef}>
        <p>Scaling people through technology.</p>
        <CardsContainer>
          <Card 
            title="Public Speaking" 
            link="/public-speaking"
          />
          <Card 
            title="Technical Skills" 
            link="/technical-skills"
          />
          <Card 
            title="Project Management" 
            link="/project-management"
          />
        </CardsContainer>
      </AboutSection>
      <Footer />
    </HomeContainer>
  );
};

export default HomePage;
