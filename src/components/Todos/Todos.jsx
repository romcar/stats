import React, { Fragment } from 'react'
import StyledTodo from '../../styledComponents/StyledTodo/StyledTodo';
import Title from '../../styledComponents/StyledTitle/StyledTitle';

export default () => {
  return (
    <Fragment>
      <StyledTodo>
        <Title color={'background'}>Todos</Title>
        <li>Woot</li>
        <li>Woot</li>
        <li>Woot</li>
        <li>Woot</li>
      </StyledTodo>
    </Fragment>
  )
}
