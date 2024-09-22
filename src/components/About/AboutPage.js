import React from 'react';
import NavBar from '../NavBar/NavBar';
import { AboutContainer } from './AboutPage.styles';

const AboutPage = () => {
  return (
    <AboutContainer>
      <NavBar show={true} />
      <h1>About Me</h1>
      {/* Add your about content here */}
    </AboutContainer>
  );
};

export default AboutPage;
