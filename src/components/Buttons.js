import React from 'react';
import styled from 'styled-components';
import { lightButtonGrey, hoverButtonGrey, activeButtonGrey, wishlistHeartActiveFilled, wishlistHeartHoverFilled } from './Colors';
import AngleLeft from '../components/Icons/AngleLeft';
import AngleRight from '../components/Icons/AngleRight';
import Heart from '../components/Icons/Heart';

export const BaseButton = styled.button`
  cursor: pointer;
  &:active,
  &:focus,
  &:focus:active {
    outline: none;
  }
`;

export const SvgBtnWrapper = styled(BaseButton)`
  background-color: unset;
  border: none;
  /* The line below prevents picking up the svg and its children
     if an event handler is fired */
  > svg {
    pointer-events: none;
  }
  &:hover {
    > svg path {
      fill: ${({ hoverColor='' }) => hoverColor};
    }
  }
  &:active {
    > svg path {
      fill: ${({ activeColor='' }) => activeColor};
    }
  }
`;

export const WishlistBtn = ({ id='', filled=false, onClick }) => {
  const hoverColor = filled ? wishlistHeartHoverFilled : hoverButtonGrey;
  const activeColor = filled ? wishlistHeartActiveFilled : activeButtonGrey;
  return (
    <SvgBtnWrapper id={id} onClick={onClick} hoverColor={hoverColor} activeColor={activeColor}>
      <Heart filled={filled} hoverColor="#000" />
    </SvgBtnWrapper>
  )
}

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

