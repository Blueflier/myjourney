import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardWrapper, CardContainer, CardTitle, ExpandingCircle } from './Card.styles';

const Card = ({ title, link }) => {
  const [isExpanding, setIsExpanding] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setClickPosition({ x, y });
    setIsExpanding(true);
    setTimeout(() => {
      navigate(link);
    }, 1200); // Adjust this delay to match your animation duration
  };

  return (
    <CardWrapper onClick={handleClick}>
      <CardContainer>
        <CardTitle>{title}</CardTitle>
      </CardContainer>
      {isExpanding && (
        <ExpandingCircle
          style={{
            left: clickPosition.x,
            top: clickPosition.y,
          }}
        />
      )}
    </CardWrapper>
  );
};

export default Card;
