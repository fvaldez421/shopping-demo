import React from 'react';
import { lightButtonGrey } from '../Colors';


/**
 * We have to give svg's unique id's or things can get funky
 * @param {*} props.id - (required if using multiple if these) unique id in group
 * @param {*} props.role - (required if using multiple groups) unique role of grou[]
 */
const Icon = ({ id = 'any', role = '', size=15, filled = false }) => {
  const fillColor = filled ? 'gold' : lightButtonGrey;
  // Got this svg on line and made it work, it was too large so I hacked in a way to scale it and make it resueable
  const scaleRatio = (Number(size) - 0.5) * 2 / 1000;
  return (
    <svg version="1.1" id={`${role}RatingStar${id}`} xmlns="http://www.w3.org/2000/svg" 
      x="0px" y="0px" width={`${size}px`} height={`${size}px`} viewBox={`0 0 ${size} ${size}`} enableBackground={`new 0 0 ${size} ${size}`}>
      <polygon fill={fillColor} transform={`scale(${scaleRatio})`} stroke={fillColor} strokeWidth="37.6152" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
        points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 " />
    </svg>
  );
};

export default Icon;


