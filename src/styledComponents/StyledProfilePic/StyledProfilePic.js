import styled, { keyframes } from 'styled-components';

const sizeIn = keyframes`
  0% { width: 0% }
  100% { width: 60%}
`;


export default styled.img`
  display: 'inline';
  width: 2vw;
  margin: ${props => (props.open ? '0.5em 0.25em 0.125em 0.25em' : '2em')};
  padding: ${props => { props.open ? '3px' : '10px' }};
  border-radius: 20em;
  ${props => (props.open ? null : `animation: ${sizeIn} 0.67s linear`)};
  ${props => (props.open ? null : 'animation-fill-mode: forwards')};
`;