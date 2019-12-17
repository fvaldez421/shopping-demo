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

const ModalContentContainer = styled.div`
  box-sizing: border-box;
  margin: 20vh auto;
  padding: 30px;
  min-height: 400px;
  min-width: 400px;
  height: 45vh;
  width: 55vw;
  max-width: 600px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0px 1px 6px #000;
  @media only screen and (max-width: 450px) {
    margin-top: 10vh;
    max-width: 95vw;
    width: 95vw;
    min-width: unset;
  }
`;

/**
 * Reuseable Modal component. Appends a node in the dom 
 * when it is imported and then renders from within
 * @param {{ id: [String], show: Boolean, autoClose: Boolean, onClose: Function, onOpen: Function, children: Function, ...rest: Object }} 
 */
const ModalWrapper = ({ id='Modal', show, autoClose, onClose, onOpen, children, ...props }) => {
  const handleBgClick = () => {
    if (autoClose) onClose();
  }
  const killEvent = e => e.stopPropagation();
  return (
    <Portal id="ModalPortal" className="modal-parent">
      {show ?
        <ModalDialogue onClick={handleBgClick} {...props}>
          <ModalContentContainer onClick={killEvent}>
            {children}
          </ModalContentContainer>
        </ModalDialogue>
        : ''
      }
    </Portal>
  )
}


export default ModalWrapper;