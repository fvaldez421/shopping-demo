import React, { useState } from 'react';
import styled from 'styled-components';
import { GridContainer } from '../../components/Grid';
import ItemCard from './ItemCard';
import WishListMenu from './WishListMenu';
import WishListModal from './WishListModal';


const PageWrapper = styled.div`
  padding: 40px 100px;
  @media only screen and (max-width: 599px) {
    padding: 40px;
  }
  @media only screen and (max-width: 480px) {
    padding: 40px 20px;
  }
  @media only screen and (max-width: 340px) {
    padding: 30px 10px;
  }
`;

const CardsWrapper = styled(GridContainer)`
  max-width: 1020px;
  margin: auto;
  @media only screen and (max-width: 1023px) {
    grid-template-columns: auto auto auto;
  }
  @media only screen and (max-width: 767px) {
    grid-gap: 15px;
    grid-template-columns: auto auto;
  }
  @media only screen and (max-width: 340px) {
    grid-gap: 10px;
  }
`;

const SearchResults = props => {
  const [showWishList, setWishListState] = useState(false);


  return (
    <PageWrapper>
      <CardsWrapper cols="4" gap="2vw">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </CardsWrapper>
      <WishListMenu />
      <WishListModal
        show={showWishList}
        onOpen={() => setWishListState(true)}
        onClose={() => setWishListState(false)}
      />
    </PageWrapper>
  )
}

export default SearchResults;