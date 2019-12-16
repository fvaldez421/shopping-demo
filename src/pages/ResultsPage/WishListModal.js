import React from 'react';
import styled from 'styled-components';
import Modal from '../../components/ModalWrapper';

const ModalHeaderRow = styled.div`

`;

const WishListModal = ({ show, onOpen, onClose }) => {
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

      </ModalHeaderRow>

    </Modal>
  )
}


export default WishListModal;