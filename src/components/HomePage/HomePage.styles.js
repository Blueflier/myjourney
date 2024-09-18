import styled from 'styled-components';

export const NavBar = styled.nav`
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

export const NavItems = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const NavItem = styled.li`
  margin: 0 1rem;

  @media (max-width: 768px) {
    margin: 1rem;
  }
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const HomeContainer = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(
    35deg,
    hsl(0deg 0% 0%) 24%,
    hsl(205deg 100% 8%) 53%,
    hsl(203deg 100% 10%) 64%,
    hsl(201deg 100% 12%) 72%,
    hsl(199deg 100% 14%) 77%,
    hsl(197deg 100% 16%) 81%,
    hsl(195deg 100% 17%) 85%,
    hsl(194deg 100% 19%) 87%,
    hsl(193deg 100% 21%) 89%,
    hsl(192deg 100% 23%) 91%,
    hsl(191deg 100% 25%) 92%,
    hsl(191deg 96% 28%) 93%,
    hsl(192deg 68% 35%) 94%,
    hsl(193deg 56% 41%) 95%,
    hsl(193deg 49% 45%) 95%,
    hsl(194deg 44% 50%) 96%,
    hsl(194deg 48% 55%) 97%,
    hsl(194deg 53% 59%) 97%,
    hsl(194deg 59% 64%) 98%,
    hsl(195deg 67% 68%) 98%,
    hsl(195deg 79% 73%) 99%,
    hsl(195deg 95% 77%) 100%
  );
  color: white;
  font-family: 'Arial', sans-serif;
  padding-top: 60px; // To account for the fixed navbar
`;

export const WelcomeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 60px); // Subtract navbar height
  padding: 0rem;
`;

export const WelcomeText = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  text-align: center;
`;

export const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #000000;
  color: white;
`;

export const AboutSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: transparent; // Ensure it's transparent
`;
export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 32px;
`;