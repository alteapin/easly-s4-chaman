import React, { Component } from 'react';
import './App.scss';
import WeekDetail from '../WeekDetail';


class App extends Component {
  render() {
    return (
      <div className="App">
        Chamán
        <WeekDetail />
        </div>
    );
  }
}

export default App;
