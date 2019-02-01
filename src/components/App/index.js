import React, { Component } from 'react';
import './App.scss';
import DailyDetail from '../DailyDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
        Chamán
      <DailyDetail />
      </div>
    );
  }
}

export default App;
