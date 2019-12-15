import React from 'react';
import styled from 'styled-components';
import { GridContainer } from '../../components/Grid';
import ItemCard from './ItemCard';


const PageWrapper = styled.div`
  padding: 40px 100px;
  @media only screen and (max-width: 599px) {
    padding: 40px;
  }
  @media only screen and (max-width: 420px) {
    padding: 40px 20px;
  }
`;

const CardsWrapper = styled(GridContainer)`
  max-width: 1020px;
  margin: auto;
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
      <CardsWrapper cols="4" gap="25px">
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