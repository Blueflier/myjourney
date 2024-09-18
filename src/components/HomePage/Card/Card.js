import React from 'react';
import { CardContainer, CardImage, CardTitle, CardCaption } from './Card.styles';

const Card = ({ title, image, caption }) => (
  <CardContainer>
    <CardImage src={image} alt={title} />
    <CardTitle>{title}</CardTitle>
    <CardCaption>{caption}</CardCaption>
  </CardContainer>
);

export default Card;
