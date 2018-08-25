import styled from 'styled-components';
import colors from '../index';

export default styled.h2`
  color: ${props => colors[props.color || 'title']};
  text-shadow: 1px 1px 2px #555;
  margin: 0 0.5em;
  display: inline-block;
`;