import styled from 'styled-components';

export const CarouselContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px 0;
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

export const Caption = styled.p`
  text-align: center;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
