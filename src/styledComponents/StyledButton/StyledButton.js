import styled from 'styled-components';
import colors from '../index';

export default styled.button`
  color: ${colors.white};
  width: 50px;
  background: ${colors.background};
  border: 1px solid ${colors['background--light']};
  border-radius: 2em;

  :hover {
    color: ${colors.background};
    background: ${colors['link--hover']};
  }
`;