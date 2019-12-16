import { appendAndRenderComponent } from '../utils/window';
import React from 'react';
import styled from 'styled-components';


const ModalDialogue = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(0,0,0,.5);
`;

const ModalWrapper = ({ id='Modal', show, autoClose, onClose, children }) => {
  function handleBgClick() {
    if (autoClose) onClose();
  }
  return (
    <>
      {show ?
        <ModalDialogue id={id} show={true} onClick={handleBgClick}>
          {show ? children : ''}
        </ModalDialogue>
        : ''
      }
    </>
  )
}


appendAndRenderComponent({
  type: 'div',
  id: '',
  className: 'modal-root',
  component: ModalWrapper
});

export default ModalWrapper;