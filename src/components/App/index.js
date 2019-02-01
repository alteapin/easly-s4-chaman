import React, { Component } from 'react';
import Daily from '../Daily';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className='App'>
        Chamán
        <Daily/>
      </div>
    );
  }
}

export default App;
