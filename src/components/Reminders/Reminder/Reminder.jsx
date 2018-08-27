import React from 'react'
import StyledReminder from '../../../styledComponents/StyledReminder/StyledReminder';
export default (props) => {
  return (
    <StyledReminder>{props.children}</StyledReminder>
  )
}
