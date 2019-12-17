import React from 'react';
import styled from 'styled-components';
import SnackBar from '../../components/SnackBarWrapper';
import { wishlistNotificationBg } from '../../components/Colors';


const SnackBarContent = styled(SnackBar)`
  position: sticky;
  bottom: 0;
  height: 60px;
  border: 1px solid #000;
  border-radius: 4px;
  background-color: ${wishlistNotificationBg};
  text-align: center;
  cursor: pointer;
`;

const MenuText = styled.p`
  line-height: 60px;
  font-weight: 600;
  font-size: 16px;
  user-select: none;
`;


/**
 * Sticky Wishlist menu
 * @param {{ status: String, wishlist: Object, openWishListModal: Function }} props 
 */
const WishListMenu = ({ status='initial', wishlist=null, openWishListModal }) => {
  const itemCount = wishlist ? Object.entries(wishlist).length : '';
  return (
    <SnackBarContent show={true}>
      <MenuText onClick={openWishListModal}>
        {status !== 'loaded' ?
          'Loading...'
          :
          `${itemCount} products in Wishlist`
        }
      </MenuText>
    </SnackBarContent>
  )
};

export default WishListMenu;