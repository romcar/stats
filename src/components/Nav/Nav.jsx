import React from 'react'
import StyledNav from '../../styledComponents/StyledNav/StyledNav';
import StyledTitle from '../../styledComponents/StyledTitle/StyledTitle';
import StyledLink from '../../styledComponents/StyledLink/StyledLink';

export default () => {
  return (
    <StyledNav>
      <StyledTitle><StyledLink href='#' margin={'0'}>Stats</StyledLink></StyledTitle>
      <StyledLink href="#">Logout</StyledLink>
      <StyledLink href="#">Link 3</StyledLink>
      <StyledLink href="#">Link 2</StyledLink>
      <StyledLink href="/test">Link 1</StyledLink>
    </StyledNav>
  );
};
