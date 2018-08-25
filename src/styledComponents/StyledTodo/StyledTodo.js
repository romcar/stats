import styled from 'styled-components';
import colors from '../index';

export default styled.ul`
  grid-row-start: 2;
  grid-row-end: 6;
  grid-column-start: 16;
  grid-column-end: 21;
  list-style: none;
  border: 1px solid ${colors.background};
  border-radius: 2em;
  padding: 0 0.7em;
`;