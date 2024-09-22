import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #000000;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  transform: ${({ show }) => show ? 'translateY(0)' : 'translateY(-100%)'};
  z-index: 1000;
`;

export const HomeLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;

  &:visited, &:hover {
    color: white;
    text-decoration: none;
  }
`;

export const NavItems = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  margin: 0 1rem;
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;

  &:visited, &:hover {
    color: white;
    text-decoration: none;
  }
`;
