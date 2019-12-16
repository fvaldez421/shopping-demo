import React, { useState } from 'react';
import styled from 'styled-components';
import { GridItem } from '../../components/Grid';
import StarRating from '../../components/StarRating';
import { WishlistBtn } from '../../components/Buttons';
// import { GalleryNavBtn } from '../../components/Buttons';


const CardWrapper = styled(GridItem)`
  position: relative;
  max-width: 230px;
  border-radius: 4px;
  border: 1px solid #000;
  min-height: 260px;
  background-color: #fff;
`;

const ItemDeal = styled.div`
  position: absolute;
  top: .75vw;
  right: .75vw;
  z-index: 1;
  font-size: 12px;
  font-weight: 700;
  padding: 2px 4px;
  border-radius: 4px;
  border: 1px solid #000;
  background-color: lightblue;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 170px;
  width: 100%;
  background-color: lightgrey;
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
  height: 170px;
  min-width: 100%;
  background-size: cover;
  background-position: 50% 50%;
  background-image: ${({ imgUrl='' }) => `url(${imgUrl})`};
`;

const CardContent = styled.div`
  padding: 20px 15px;
  height: 160px;
  > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const ItemLabel = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 22px;
  margin-bottom: 20px;
  height: 46px;
  overflow: hidden;
  text-overflow: ellipsis;
  /* The lines below wont work for EI or Firefox */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical; 
`;

const ItemPrice = styled.p`
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 20px;
`;
const ItemRating = styled(StarRating)`
  position: relative;
`;
const ItemActions = styled.div`
  > button {
    display: inline-block;
    float: right;
  }
`;

const ItemCard = props => {
  const {
    id='',
    name='',
    price=null,
    rating=null,
    special=null,
    imgs=["https://picsum.photos/id/891/200/300.jpg"],
    wishlist={},
    addToWishlist,
    removeFromWishlist,
  } = props;
  const wishlisted = wishlist && !!wishlist[id];
  const [currImage, updateImgIndex] = useState(0);
  const addItemWishlist = () => {
    if (wishlisted) removeFromWishlist({ id, name });
    else addToWishlist({ id, name });
  }
  return (
    <CardWrapper>
      {special &&
        <ItemDeal>
          {special}
        </ItemDeal>
      }
      <ImageContainer>
        <CardImage alt="Broken Item Image" imgUrl={imgs[currImage]} />
        {/* <GalleryNavBtn toLeft={true} />
        <GalleryNavBtn toRight={true} /> */}
      </ ImageContainer>
      <CardContent>
        <ItemLabel>{name}</ItemLabel>
        <ItemPrice>{price ? `$${price}` : ''}</ItemPrice>
        <ItemRating rating={rating} />
        <ItemActions>
          <WishlistBtn
            id={id}
            filled={wishlisted}
            onClick={addItemWishlist}
          />
        </ItemActions>
      </ CardContent>
    </CardWrapper>
  )
};

export default ItemCard;