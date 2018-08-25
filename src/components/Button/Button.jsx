import React from 'react'
import StyledButton from '../../styledComponents/StyledButton/StyledButton';

export default (props) => {
  console.log(props.children)
  return (
    <StyledButton onClick={() => props.callback()} type="submit" >{props.buttonText}</StyledButton>
  )
};