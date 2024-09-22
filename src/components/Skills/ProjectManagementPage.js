import React from 'react';
import { ProjectManagementContainer, BlackOverlay } from './ProjectManagementPage.styles';
import {
  NavBar,
  NavItems,
  NavItem,
  NavLink,
  HamburgerIcon,
} from './HomePage.styles';


const ProjectManagementPage = () => {
  return (
    <>
      <BlackOverlay />
      <ProjectManagementContainer>
      <NavBar show={showNavBar}>
        <NavLink href="/">Joseph Hartono</NavLink>
        <HamburgerIcon onClick={toggleNav}>☰</HamburgerIcon>
        <NavItems isOpen={isNavOpen}>
          <NavItem><NavLink onClick={() => scrollToSection(aboutRef)}>About</NavLink></NavItem>
          <NavItem><NavLink href="#projects">Projects</NavLink></NavItem>
          <NavItem><NavLink href="#contact">Contact</NavLink></NavItem>
        </NavItems>
      </NavBar>
      </ProjectManagementContainer>
    </>
  );
};

export default ProjectManagementPage;
