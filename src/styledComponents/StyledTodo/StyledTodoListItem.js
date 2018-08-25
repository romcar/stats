import styled from 'styled-components';
import colors from '../index';

export default styled.li`
  position: relative;
  margin-left: 12px;
  padding: 0.25em;
  left: -5px;
  border-radius: 0.5em;
  :nth-child(odd) {
    background: ${colors["background--light"]};
    color: ${colors.white};

    :hover {
      background: ${colors.background};
      color: ${colors["link--hover"]};
      left: -10px;
    }
  }

  :nth-child(even) {
    color: ${colors.background};

    :hover {
      background: ${colors["background--light"]};
      color: ${colors["link--hover"]};
      left: -10px;
    }
  }
`;