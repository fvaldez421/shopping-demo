import React from 'react';
import styled from 'styled-components';
import ItemCard from '../components/ItemCard';


const PageWrapper = styled.div`
  padding: 40px 100px;
  @media only screen and (max-width: 599px) {
    padding: 40px 40px;
  }
  @media only screen and (max-width: 480px) {
    padding: 40px 20px;
  }
`;

const CardsWrapper = styled.div`
  max-width: 1020px;
  margin: auto;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: auto auto auto auto;
  @media only screen and (max-width: 1023px) {
    grid-template-columns: auto auto auto;
  }
  @media only screen and (max-width: 767px) {
    grid-template-columns: auto auto;
  }
  @media only screen and (max-width: 480px) {
    grid-template-columns: auto;    
  }
`;

const SearchResults = props => {

  return (
    <PageWrapper>
      <CardsWrapper>
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
    </PageWrapper>
  )
}

export default SearchResults;