import styled from 'styled-components';

export const CardContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 16px;
  flex: 1;
  max-width: 45%;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

export const CardTitle = styled.h3`
  margin: 16px 0 8px;
  font-size: 1.5em;
`;

export const CardCaption = styled.p`
  margin: 0 16px 16px;
  font-size: 1em;
  color: #666;
`;
