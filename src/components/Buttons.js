import React from 'react';
import styled from 'styled-components';
import { lightButtonGrey, hoverButtonGrey, activeButtonGrey } from './Colors';
import AngleLeft from '../components/Icons/AngleLeft';
import AngleRight from '../components/Icons/AngleRight';


export const BaseButton = styled.button`
  cursor: pointer;
  &:active,
  &:focus,
  &:focus:active {
    outline: none;
  }
`;

/**
 * Directional image navigation button
 * @param {Boolean} [props.toLeft] direction of button
 * @param {Boolean} [props.toRight] direction of button
 */
export const ImgNavBtn = styled(BaseButton)`
  height: 40px;
  width: 25px;
  padding: 0;
  border: 1px solid #000;
  border-top-left-radius: ${({ toLeft = false }) => toLeft ? '0' : '4px'};
  border-bottom-left-radius: ${({ toLeft = false }) => toLeft ? '0' : '4px'};
  border-top-right-radius: ${({ toRight = false }) => toRight ? '0' : '4px'};
  border-bottom-right-radius: ${({ toRight = false }) => toRight ? '0' : '4px'};
  background-color: ${lightButtonGrey};
  :hover {
    background-color: ${hoverButtonGrey};
  }
  :active {
    background-color: ${activeButtonGrey};
  }
  > svg {
    height: 16px;
    width: 16px;
    margin: auto;
  }
`;


export const GalleryNavBtn = props => (
  <ImgNavBtn {...props}>
    {props.toRight ?
      <AngleRight /> : <AngleLeft />
    }
  </ImgNavBtn>
)

