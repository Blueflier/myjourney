import React, { useState, useRef } from 'react';
import { PublicSpeakingContainer, BlackOverlay } from './PublicSpeakingPage.styles';
import NavBar from '../../NavBar/NavBar';
import ImageCarousel from './Carousel/ImageCarousel';

// Import your images
import image1 from '../../../assets/images/public-speaking-1.jpg';
import image2 from '../../../assets/images/public-speaking-2.jpg';
import image3 from '../../../assets/images/public-speaking-3.jpg';
import image4 from '../../../assets/images/public-speaking-4.jpg';
import image5 from '../../../assets/images/public-speaking-5.jpg';

const PublicSpeakingPage = () => {
  const carouselImages = [
    { src: image1, caption: 'Speaking at Conference A' },
    { src: image2, caption: 'Workshop at Company B' },
    { src: image3, caption: 'TED Talk on Technology' },
    { src: image4, caption: 'Panel Discussion on Innovation' },
    { src: image5, caption: 'Keynote at Industry Event' },
  ];

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
      <PublicSpeakingContainer>
        <NavBar 
          show={true} // Always show the NavBar
          toggleNav={toggleNav}
          isNavOpen={isNavOpen}
          scrollToSection={scrollToSection}
          aboutRef={aboutRef}
        />
        <h1>Public Speaking</h1>
        <ImageCarousel images={carouselImages} />
      </PublicSpeakingContainer>
    </>
  );
};

export default PublicSpeakingPage;
