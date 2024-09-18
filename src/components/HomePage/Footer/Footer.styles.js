import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #000000;
  color: #ecf0f1;
  padding: 1.5rem 0;
  width: 100%;
  margin: 0;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Copyright = styled.p`
  font-size: 0.9rem;
  margin: 0;
justify-content: space-between;
  align-items: center;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export const SocialIcon = styled.a`
  color: #ecf0f1;
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: #3498db;
  }
`;