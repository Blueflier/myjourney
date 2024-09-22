import React from 'react';
import { FooterContainer, FooterContent, Copyright, SocialLinks, SocialIcon } from './Footer.styles';
import linkedInIcon from '../../../assets/icons/linkedin-icon.png';
import githubIcon from '../../../assets/icons/github-icon.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <Copyright>
          &copy; {currentYear} Joseph Hartono. All rights reserved.
        </Copyright>
        <SocialLinks>
          <SocialIcon href="https://linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
            <img src={linkedInIcon} alt="LinkedIn" />
          </SocialIcon>
          <SocialIcon href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </SocialIcon>
          {/* ... other social icons ... */}
        </SocialLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
