import styled from 'styled-components';

/**
 * @param {{ cols: Number, colXWidth: String }} props
 * @param   {Number} props.cols        Number of base columns
 * @param   {String} [props.colXWidth] The width of each column
 * @returns {String} Formatted column widths
 */
const genColDimensions = ({ cols=null, ...props }, type='cols') => {
  const dims = [];
  const dimType = type === 'cols' ? 'Width' : 'Height';
  if (cols) {
    cols = Number(cols);
    let count = 1;
    while (count <= cols) {
      const colWidth = props[`col${count}${dimType}`];
      if (colWidth) {
        dims.push(colWidth);
      } else {
        dims.push('auto');
      }
      count++;
    }
  }
  return dims.join(' ');
};


export const GridContainer = styled.div`
  margin: auto;
  display: grid;
  /* Set row and col gaps before grid gap to allow shorthand to overwrite */
  column-gap: ${({ colGap=0 }) => colGap};
  row-gap: ${({ rowGap=0 }) => rowGap};
  grid-gap: ${({ gap=0 }) => gap};
  grid-template-columns: ${props => genColDimensions(props, 'cols')};
  grid-template-rows: ${props => genColDimensions(props, 'rows')};
`;

export const GridItem = styled.div`
  grid-column: ${({ gridCol='' }) => gridCol};
  grid-row: ${({ gridRow='' }) => gridRow};
  grid-area: ${({ gridArea='' }) => gridArea};
`;