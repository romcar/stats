import React, { Component } from 'react';
import './App.css';
// import Grid from 'styled-components-grid';

import Nav from '../../components/Nav/Nav';
import SideBar from '../../components/SideBar/SideBar';
import Input from '../../components/Input/Input';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (<div>
      <Nav />
      <SideBar />
      <Input />
      <div>other things</div>
    </div>);
  }
}

export default App;