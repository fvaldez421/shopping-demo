import { appendAndRenderComponent } from '../utils/window';
import React from 'react';
import styled from 'styled-components';


const SnackBarContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(0,0,0,.5);
`;

const SnackBarWrapper = ({ id='SnackBar', show, autoClose, onClose, children }) => {
  function handleBgClick() {
    if (autoClose) onClose();
  }
  return (
    <>
      {show ?
        <SnackBarContainer id={id} show={true} onClick={handleBgClick}>
          {show ? children : ''}
        </SnackBarContainer>
        : ''
      }
    </>
  );
};

appendAndRenderComponent({
  type: 'div',
  id: '',
  className: 'snackbar-root',
  component: SnackBarWrapper
});
export default SnackBarWrapper;