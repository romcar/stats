import React, { Component } from 'react'
import profilePicPlaceholder from '../../assets/profile_pic_placeholder.jpg';

import StyledSideBar from '../../styledComponents/StyledSideBar/StyledSideBar';
import StyledProfilePic from '../../styledComponents/StyledProfilePic/StyledProfilePic';
export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.toggleSideBar = this.toggleSideBar.bind(this);
  };

  toggleSideBar() {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  profilePicTransition() {
    let { isOpen } = this.state;
    if (isOpen) {
      return (
        <StyledProfilePic open={!isOpen} src={profilePicPlaceholder}></StyledProfilePic>
      );
    } else {
      return (
        <StyledProfilePic open={!isOpen} src={profilePicPlaceholder}></StyledProfilePic>
      );
    }
  }
  render() {
    return (
      <StyledSideBar onMouseEnter={() => (this.toggleSideBar())} onMouseLeave={() => (this.toggleSideBar())} >
        {this.profilePicTransition()}
      </StyledSideBar>
    );
  };
};



