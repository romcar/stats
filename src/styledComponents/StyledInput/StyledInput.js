import styled from 'styled-components';
import colors from '../index';

export default styled.textarea`
  margin: 0.75em 0.5em 0.5em 0.5em;
  width: 4.5vw;
  height: 0.1vh;
  border-radius: 5em;
  padding: 1em;
  border: 1px solid ${colors.background};
  overflow: hidden;
  transition: width 0.67s, height 0.3s;
  position: absolute;

  ${'' /* Location of input area */}
  grid-row-start: 2;
  grid-row-end: 4;
  grid-column-start: 2;
  grid-column-end: 3;
  resize: none;

  :hover:not(:focus) {
    grid-row-end: 4;
    grid-column-end: 7;
    width: 20vw;
    transition-delay: 200ms;
    height: 3vh;
    overflow-y: scroll;
  }

  :focus {
    box-shadow: none;
    grid-row-end: 4;
    grid-column-end: 7;
    width: 20vw;
    ${'' /* removes the blue halo on focus */}
    outline: none;
    height: 3vh;
    overflow-y: scroll;
    border: 1px solid ${colors["link--hover"]};
    box-shadow: inset 0 0 2em ${colors["link--hover"]};
  }
`;