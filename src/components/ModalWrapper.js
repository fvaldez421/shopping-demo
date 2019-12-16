import React from 'react';
import styled from 'styled-components';
import { Portal } from '../utils/window';


const ModalDialogue = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(0,0,0,.5);
`;

const ModalWrapper = ({ id='Modal', show, autoClose, onClose, onOpen, children, ...props }) => {
  function handleBgClick() {
    if (autoClose) onClose();
  }
  return (
    <Portal id="ModalPortal" className="modal-parent">
      {show ?
        <ModalDialogue onClick={handleBgClick} {...props}>
          {show ? children : ''}
        </ModalDialogue>
        : ''
      }
    </Portal>
  )
}


export default ModalWrapper;