import React from 'react';
import styled from 'styled-components';
import Star from './Icons/Star';

// We have to convert the 0-5 rating to 0-100 then to px
// then compensate for the padding added for spacing per star
const getRatingWidth = ({ rating }) => {
  // 15px per star * 5 = 75, (not including padding)
  const normRating = 75 * (rating / 5);
  const completeStars = Math.floor(rating);
  // we dont want to add extra space if its 5 stars
  const paddingSpace = 4 * (completeStars > 4 ? 4 : completeStars);
  const offset = normRating + paddingSpace;
  return `${offset}px`;
}

// Each Star SVG is a default 15px, we add 4px right-padding 
// for spacing EXCEPT for the last one. Wdth needs to be set
// to correctly calculate the right setting for the FillWrapper
const RatingWrapper = styled.div`
  position: relative;
  /* 15px per star + 4px padding = 91 */
  width: 91px;
  /* not adding padding to the last one */
  svg:not(:last-of-type) {
    padding-right: 4px;
  }
`;

const FillWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: ${getRatingWidth};
  overflow: hidden;
  white-space: nowrap;
`;

// We have to give svg's unique id's or things can get funky
const StarsRow = ({ filled = false }) => {
  const role = filled === true ? 'fill' : 'background';
  return (
    <>
      <Star id="1" role={role} size={15} filled={filled} />
      <Star id="2" role={role} size={15} filled={filled} />
      <Star id="3" role={role} size={15} filled={filled} />
      <Star id="4" role={role} size={15} filled={filled} />
      <Star id="5" role={role} size={15} filled={filled} />
    </>
  )
};

const StarRating = ({ rating = 0 }) => {
  return (
    <RatingWrapper>
      <StarsRow />
      <FillWrapper rating={rating}>
        <StarsRow filled />
      </FillWrapper>
    </RatingWrapper>
  );
};

export default StarRating;