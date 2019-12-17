import React from 'react';
import styled from 'styled-components';
import {
  lightButtonGrey,
  hoverButtonGrey,
  activeButtonGrey,
  wishlistHeartActiveFilled,
  wishlistHeartHoverFilled
} from './Colors';
import AngleLeft from '../components/Icons/AngleLeft';
import AngleRight from '../components/Icons/AngleRight';
import Heart from '../components/Icons/Heart';


export const BaseButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-color: ${lightButtonGrey};
  :hover {
    background-color: ${hoverButtonGrey};
  }
  :active {
    background-color: ${activeButtonGrey};
  }
  &:active,
  &:focus,
  &:focus:active {
    outline: none;
  }
  /* unset the focus dotted border on firefox */
  ::-moz-focus-inner {
    border: 0;
  }
`;

export const ExitButton = styled(BaseButton)`
  position: relative;
  display: block;
  padding: 0;
  height: 26px;
  min-width: 26px;
  &::after {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: '+';
    font-size: 30px;
    line-height: 27px;
    text-align: center;
    transform: rotate(45deg);
    /* sizing seems to behave differently in firefox */
    @-moz-document url-prefix() {
      font-size: 26px;
      line-height: 22px;
    }
  }
`;

/**
 * @param {String} [props.hoverColor] optional hover color
 * @param {String} [props.activeColor] optional active color
 */
export const SvgBtnWrapper = styled(BaseButton)`
  background-color: unset;
  /* The line below prevents picking up the svg and its children
     if an event handler is fired */
  > svg {
    pointer-events: none;
  }
  &:hover {
    background-color: unset;
    > svg path {
      fill: ${({ hoverColor='' }) => hoverColor};
    }
  }
  &:active {
    background-color: unset;
    > svg path {
      fill: ${({ activeColor='' }) => activeColor};
    }
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
  > svg {
    height: 16px;
    width: 16px;
    margin: auto;
  }
`;

/**
 * @param {{ id: String, filled: Boolean, onClick: Function }} props
 */
export const WishlistBtn = ({ id='', filled=false, onClick }) => {
  const hoverColor = filled ? wishlistHeartHoverFilled : hoverButtonGrey;
  const activeColor = filled ? wishlistHeartActiveFilled : activeButtonGrey;
  return (
    <SvgBtnWrapper id={id} onClick={onClick} hoverColor={hoverColor} activeColor={activeColor}>
      <Heart filled={filled} hoverColor="#000" />
    </SvgBtnWrapper>
  );
};

/**
 * 
 * @param {{ toRight: Boolean }} props 
 */
export const GalleryNavBtn = props => (
  <ImgNavBtn {...props}>
    {props.toRight ?
      <AngleRight /> : <AngleLeft />
    }
  </ImgNavBtn>
);

