import React, { Component } from 'react';

import './App.css';
import GridWrapper from '../../styledComponents/GridWrapper/Wrapper';

import Nav from '../../components/Nav/Nav';
import SideBar from '../../components/SideBar/SideBar';
import Input from '../../components/Input/Input';
import Todos from '../../components/Todos/Todos';
import Reminders from '../../components/Reminders/Reminders';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (<GridWrapper>
      <Nav />
      <SideBar />
      <Input />
      <Todos />
      <Reminders />
      {/* <div>other things</div> */}
    </GridWrapper>);
  }
}

export default App;