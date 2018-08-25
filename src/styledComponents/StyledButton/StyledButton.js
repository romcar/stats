import styled from 'styled-components';
import colors from '../index';

export default styled.button`
  color: ${colors.white};
  width: 50px;
  height: 3vh;
  background: ${colors.background};
  border: 1px solid ${colors['background--light']};
  border-radius: 2em;
  margin: 0.75em;
  transition: left 2s, top 2s, right 2s;

  :hover {
    color: ${colors.background};
    background: ${colors['link--hover']};
  }
`;