import React from 'react';
import styled from 'styled-components';
import Modal from '../../components/ModalWrapper';
import { ExitButton } from '../../components/Buttons';


// Flex Container and Items should be moved to a reuseable
// FlexBox.js file in components
const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ dir = 'row' }) => dir};
`;

const ModalHeaderRow = styled(FlexContainer)`
  > h2 {
    flex: 8 8;
    font-size: 20px;
    font-weight: 600;
    line-height: 26px;
  }
  > button {
    flex: 0;
  }
`;

const ModalBody = styled.div`
  margin-top: 20px;
`;

const ItemRow = styled(FlexContainer)`
  :not(:last-of-type) {
    margin-bottom: 10px;
  }
`;

const ItemImage = styled.div`
  flex: 0;
  height: 65px;
  min-width: 65px;
  border-radius: 4px;
  background-color: lightgrey;
  background-size: cover;
  background-position: 50% 50%;
  background-image: ${({ imgUrl = '' }) => `url(${imgUrl})`};
`;

const ItemLabel = styled.div`
  flex: 8 8;
  align-self: center;
  padding: 2px 10px;
  font-size: 16px;
  line-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  /* The lines below wont work for EI or Firefox */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

/**
 * Wishlist modal
 * @param {{ show: Boolean, status: String, wishlist: {}, onOpen: Function, onClose: Function }} props 
 */
const WishListModal = ({ show, status = 'initial', wishlist = {}, onOpen, onClose }) => {
  return (
    <Modal
      id='WishListModal'
      autoClose
      show={show}
      onOpen={onOpen}
      onClose={onClose}
    >
      <ModalHeaderRow>
        <h2>Wishlist</h2>
        <ExitButton onClick={onClose} />
      </ModalHeaderRow>
      <ModalBody>
        {status !== 'loaded' ?
          'Loading your wishlist...'
          :
          wishlist && Object.entries(wishlist).map(([id = 'id', { name = '', imgs = [] }]) => (
            <ItemRow key={id}>
              <ItemImage imgUrl={imgs[0]} />
              <ItemLabel>{name}</ItemLabel>
            </ItemRow>
          ))
        }
      </ModalBody>
    </Modal>
  )
}


export default WishListModal;