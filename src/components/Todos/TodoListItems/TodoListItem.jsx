import React from 'react'
import StyledTodoListItem from '../../../styledComponents/StyledTodo/StyledTodoListItem';

export default (props) => {
  return (
    <StyledTodoListItem onClick={(e) => console.log('A todo was clicked')}>{props.children}</StyledTodoListItem>
  )
}
