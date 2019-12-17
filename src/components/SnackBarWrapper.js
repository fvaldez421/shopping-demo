import React from 'react';
import styled from 'styled-components';
import { Portal } from '../utils/window';


const SnackBarContainer = styled(Portal)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
`;

/**
 * Wrapper for adding Snackbar menus. This Wrapper can be used to add 
 * custom animations and styles to globally used menus
 * @param {{ show: Boolean, children: Function, ...rest: Object }} param0 
 */
const SnackBarWrapper = ({ show, children, ...props }) => {
  return (
    <SnackBarContainer id="SnackbarPortal" className="snackbar-parent" {...props}>
      {show ? children : ''}
    </SnackBarContainer>
  );
};

export default SnackBarWrapper;