import React from 'react';
import styled from 'styled-components';
import Star from './Icons/Star';


const StarsFill = () => (<><Star filled /><Star filled /><Star filled /><Star filled /><Star filled /></>);

const StarsBG = () => (<><Star /><Star /><Star /><Star /><Star /></>);

const RatingWrapper = styled.div`
  position: relative;
`;

const FillWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 50%;
  overflow: hidden;
`;

const StarRating = props => {
  return (
    <RatingWrapper>
      <StarsBG />
      <FillWrapper>
        <StarsFill />
      </FillWrapper>
    </RatingWrapper>
  );
};

export default StarRating;