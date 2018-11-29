import React, { Component } from 'react';


import MainContainer from '@Pages/main/MainContainer' 

import List from '@Pages/list/list'

import { Route ,Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/list' component = { List } />
        <Route path ='/' component = { MainContainer } />
      </Switch>
    );
  }
}

export default App;
