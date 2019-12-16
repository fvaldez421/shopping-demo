import { Portal } from '../utils/window';
import React from 'react';
import styled from 'styled-components';


const SnackBarContainer = styled(Portal)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
`;

const SnackBarWrapper = ({ id='SnackBar', show, children }) => {
  return (
    <>
      {show ?
        <SnackBarContainer id={id} show={true}>
          {show ? children : ''}
        </SnackBarContainer>
        : ''
      }
    </>
  );
};

// appendAndRenderComponent({
//   type: 'div',
//   id: '',
//   className: 'snackbar-root',
//   component: SnackBarWrapper
// });
export default SnackBarWrapper;