import React from 'react';
import styled from 'styled-components';


const CardWrapper = styled.div`
  border: 1px solid #000;
  min-height: 260px; 
`;

const ItemCard = props => {
  return (
    <CardWrapper>
      This is a card.
    </CardWrapper>
  )
};

export default ItemCard;