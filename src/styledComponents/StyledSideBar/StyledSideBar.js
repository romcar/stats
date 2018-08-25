import styled from 'styled-components';
import colors from '../index';

export default styled.div`
  width: 3vw;
  background: ${colors.background};
  transition: width 0.67s;
  position: relative;
  top: -15px;
  grid-row-start: 2;
  grid-column-start: 1;
  grid-row-end: none;
  grid-column-end: 1;

  :hover {
    width: 15vw;
  }
`;