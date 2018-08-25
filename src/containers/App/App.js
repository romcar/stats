import React, { Component } from 'react';
import './App.css';
import Grid from 'styled-components-grid';

import Nav from '../../components/Nav/Nav';
import SideBar from '../../components/SideBar/SideBar';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (<div>
      <Nav />
      <SideBar />
      <div>other things</div>
    </div>);
  }
}

export default App;