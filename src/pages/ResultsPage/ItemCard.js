import React from 'react';
import styled from 'styled-components';
import { GridItem } from '../../components/Grid';
import { GalleryNavBtn } from '../../components/Buttons';


const CardWrapper = styled(GridItem)`
  border: 1px solid #000;
  min-height: 260px;
  background-color: #fff;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 150px;
  width: 100%;
  background-color: lightblue;
  > button{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    &:first-of-type {
      left: 0;
      border-left: 0;
    }
    &:last-of-type {
      right: 0;
      border-right: 0;
    }
  }
`;

const CardImage = styled.div`
  height: 150px;
  min-width: 100%;
  background-image: ${({ imgUrl='' }) => `url(${imgUrl})`};
  background-size: cover;
`;

const CardContent = styled.div`
  padding: 15px;
  min-height: 200px;
`;

const ItemCard = props => {
  return (
    <CardWrapper>
      <ImageContainer>
        <CardImage alt="Broken Item Image" imgUrl={"https://picsum.photos/id/891/200/300.jpg"} />
        <GalleryNavBtn toLeft={true} />
        <GalleryNavBtn toRight={true} />
      </ ImageContainer>
      <CardContent>
        This is a card.

      </ CardContent>
    </CardWrapper>
  )
};

export default ItemCard;