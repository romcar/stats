import React from 'react'
import StyledInput from '../../styledComponents/StyledInput/StyledInput';
import Wrapper from '../../styledComponents/StyledInput/Wrapper';

import commands from '../../assets/commands/commands';
import StyleCommands from '../../styledComponents/StyledInput/StyledCommands';

// import Button from '../Button/Button';
export default () => {
  return (
    <Wrapper>
      <StyledInput />
      {/* <Button type="submit" buttonText={'send'} /> */}
      <StyleCommands id="commands"><em>{`try /[${Object.keys(commands).join(', ')}]`}</em></StyleCommands>
    </Wrapper>
  )
}
