import styled from 'styled-components';

export default styled.div`
  display: inline-block;
  height: 4vh;
  width: 15vh;
  position: relative;
  grid-row-start: 2;
  grid-column-start: 2;
  grid-row-end: 4;
  grid-column-end: 13;

  &:hover #commands {
    display: block;
  }
`;