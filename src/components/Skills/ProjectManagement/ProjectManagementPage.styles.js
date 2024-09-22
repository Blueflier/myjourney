import styled, { keyframes } from 'styled-components';

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const ProjectManagementContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background-image: linear-gradient(
    35deg,
    hsl(0deg 0% 0%) 24%,
    hsl(205deg 100% 8%) 53%,
    hsl(195deg 95% 77%) 100%
  );
`;

export const BlackOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 1000;
  animation: ${fadeOut} 1.5s ease-out forwards;
`;

// ... existing code ...
