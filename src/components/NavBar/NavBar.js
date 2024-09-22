import React from 'react';
import { Link } from 'react-router-dom';
import { NavBarContainer, NavItems, NavItem, NavLink, HomeLink } from './NavBar.styles';

const NavBar = ({ show }) => {
  return (
    <NavBarContainer show={show}>
      <HomeLink to="/">Joseph Hartono</HomeLink>
      <NavItems>
        <NavItem><NavLink as={Link} to="/about">About</NavLink></NavItem>
      </NavItems>
    </NavBarContainer>
  );
};

export default NavBar;
