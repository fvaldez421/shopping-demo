import React from 'react';
import styled from 'styled-components';

import { GridContainer } from '../../components/Grid';
import ItemCard from './ItemCard';
import WishListMenu from './WishListMenu';
import WishListModal from './WishListModal';
import { get, post, remove } from '../../utils/mockReqests';
import { useCompound } from '../../hooks/common';


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



const initialState = {
  results: null,
  wishlist: null,
  resultStatus: 'initial',
  wishlistStatus: 'initial',
  showWishList: false,
}
const SearchResults = props => {
  const { state, setState } = useCompound(initialState);
  const openWishListModal = () => setState({ showWishList: true });
  const closeWishListModal = () => setState({ showWishList: false });

  const {
    results,
    wishlist,
    resultStatus,
    wishlistStatus,
    showWishList,
  } = state;

  // we can dry this code up...
  const updateSearchResults = async () => {
    setState({ resultStatus: 'loading' });
    const { data } = await get('/search/items', { query: '' });
    if (data) setState({ results: data, resultStatus: 'loaded' });
  }
  const updateWishlist = async () => {
    setState({ wishlistStatus: 'loading' });
    const { data } = await get('/search/wishlist');
    if (data) setState({ wishlist: data, wishlistStatus: 'loaded' });
  }
  const addToWishlist = async body => {
    const { data } = await post('/wishlist', { ...body });
    if (data) setState({ wishlist: data });
  }
  const removeFromWishlist = async body => {
    const { data } = await remove('/wishlist', { ...body });
    if (data) setState({ wishlist: data });
  }
  if (resultStatus === 'initial') updateSearchResults();
  if (wishlistStatus === 'initial') updateWishlist();
  return (
    <PageWrapper>
      <CardsWrapper cols="4" gap="2vw">
        {resultStatus !== 'loaded' ? 
          'Loading...'
          :
          results.map((res, i) =>
            <ItemCard
              key={`itemcard-${i+2}`}
              {...res}
              wishlist={wishlist}
              addToWishlist={addToWishlist}
              removeFromWishlist={removeFromWishlist}
            />
          )
        }
      </CardsWrapper>
      <WishListMenu wishlist={wishlist} status={wishlistStatus} openWishListModal={openWishListModal} />
      <WishListModal
        wishlist={wishlist}
        show={showWishList}
        onOpen={openWishListModal}
        onClose={closeWishListModal}
      />
    </PageWrapper>
  )
}

export default SearchResults;