import React, { useState, useRef, useEffect } from 'react';
import Card from './Card/Card';
import Footer from './Footer/Footer'; // Import the Footer component
import { TypeAnimation } from 'react-type-animation';


import {
  NavBar,
  NavItems,
  NavItem,
  NavLink,
  HamburgerIcon,
  HomeContainer,
  WelcomeSection,
  WelcomeText,
  Subtitle,
  AboutSection,
  CardsContainer // Ensure this is imported
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
      <NavBar show={showNavBar}>
        <NavLink href="/">My Journey</NavLink>
        <HamburgerIcon onClick={toggleNav}>☰</HamburgerIcon>
        <NavItems isOpen={isNavOpen}>
          <NavItem><NavLink onClick={() => scrollToSection(aboutRef)}>About</NavLink></NavItem>
          <NavItem><NavLink href="#projects">Projects</NavLink></NavItem>
          <NavItem><NavLink href="#contact">Contact</NavLink></NavItem>
        </NavItems>
      </NavBar>
      <WelcomeSection>
        <WelcomeText>It's all about</WelcomeText>
      <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Impacting with Innovation',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Impacting with Collaboration',
        1500,
        'Impacting with Curiosity',
        1500,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1.5em', display: 'inline-block' }}
      repeat={Infinity}
    />
      </WelcomeSection>
      <AboutSection ref={aboutRef}>
        <h2>People come first.</h2>
        <CardsContainer>
          <Card title="Card 1" image="image1.jpg" caption="Public Speaking" />
          <Card title="Card 2" image="image2.jpg" caption="Technical Skills" />
          <Card title="Card 3" image="image3.jpg" caption="Project Management" />
        </CardsContainer>
      </AboutSection>
      <Footer />
    </HomeContainer>
  );
};

export default HomePage;
