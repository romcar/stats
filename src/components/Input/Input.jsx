import React, { Fragment } from 'react'
import StyledInput from '../../styledComponents/StyledInput/StyledInput';
import Button from '../Button/Button';
export default () => {
  return (
    <Fragment>
      <StyledInput />
      <Button type="submit" buttonText={'send'} />
    </Fragment>
  )
}
