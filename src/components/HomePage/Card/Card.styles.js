import styled, { keyframes } from 'styled-components';

export const CardWrapper = styled.div`
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
  border-radius: 10px;
  padding: 4px; // This creates the "border" effect
  margin: 16px;
  width: 308px; // Slightly wider to account for the padding
  height: 158px; // Slightly taller to account for the padding
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const CardContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.5em;
  text-align: center;
  padding: 16px;
  color: black;
`;

export const CardLink = styled.div`
  margin-top: auto; // This pushes the link to the bottom of the card
  text-align: right;
`;

const expandCircle = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(500);
  }
`;

export const ExpandingCircle = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #000000; // Use the same color as your card's border/gradient
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: ${expandCircle} 2.5s ease-out forwards;
  pointer-events: none;
`;
