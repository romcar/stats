import styled from 'styled-components';
import colors from '../index';

export default styled.div`
  width: 3vw;
  background: ${colors.background};
  ${'' /* margin-top: 5px; */}
  height: 100vh;
  transition: width 0.67s;
  float: left;
  ${'' /* display: inline-block; */}
  :hover {
    width: 15vw;
  }
`;