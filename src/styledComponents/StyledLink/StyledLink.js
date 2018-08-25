import styled from 'styled-components';
import colors from '../index';

export default styled.a`
  color: ${colors.link};
  text-decoration: none;
  float: right;
  margin: ${props => (props.margin) || '0.5em'};
  :hover {
    color: ${colors['link--hover']}
  }
`;