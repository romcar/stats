import styled from 'styled-components';
import colors from '../index';

export default styled.ul`
  border: 1px solid ${colors.background};
  border-radius: 1em;
  list-style: none;
  padding: 1em;
  overflow: hidden;
  overflow-y: scroll;

  grid-row-start : 4;
  grid-row-end : 13;
  grid-column-start : 2;
  grid-column-end : 13;

`;