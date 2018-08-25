import React, { Fragment } from 'react'
import StyledTodo from '../../styledComponents/StyledTodo/StyledTodo';
import Title from '../../styledComponents/StyledTitle/StyledTitle';
import TodoListItem from './TodoListItems/TodoListItem';

export default () => {
  return (
    <Fragment>
      <StyledTodo>
        <Title color={'background'} >Todos</Title>
        <TodoListItem>Woot</TodoListItem>
        <TodoListItem>Woot</TodoListItem>
        <TodoListItem>Woot</TodoListItem>
        <TodoListItem>Woot</TodoListItem>
        <TodoListItem>Woot</TodoListItem>
        <TodoListItem>Woot</TodoListItem>
        <TodoListItem>Woot</TodoListItem>
        <TodoListItem>Woot</TodoListItem>
      </StyledTodo>
    </Fragment>
  )
}
