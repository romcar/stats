import styled, { keyframes } from 'styled-components';

const sizeIn = keyframes`
  0% { width: 2vw }
  100% { width: 12vw}
`;


export default styled.img`
  display: 'inline';
  width: 2vw;
  margin: ${props => (props.open ? '0.5em 0' : '0.5em 2em')};
  border-radius: 20em;
  ${props => (props.open ? null : `animation: ${sizeIn} 0.67s linear`)};
  ${props => (props.open ? null : 'animation-fill-mode: forwards')};
`;