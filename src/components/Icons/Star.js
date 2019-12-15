import React from 'react';
import { lightButtonGrey } from '../Colors';


const Icon = ({ id='any', role='', filled=false }) => (
  <svg version="1.1" id={`${role}RatingStar${id}`} xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20" enable-background="new 0 0 20 20">
    <polygon fill={filled ? 'yellow' : lightButtonGrey} transform="scale(0.039)" stroke={filled ? 'yellow' : lightButtonGrey} stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" 
    points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/>
  </svg>
);


export default Icon;


