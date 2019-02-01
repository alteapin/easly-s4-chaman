import React, { Component } from 'react';
import API from '../../weather'
import './App.scss';
import DailyDetail from '../DailyDetail';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      Endpoint:API,
    }
  }
  
  render() {
    const {ResponseApi}=this.state;
    return (
      <div className="App">
        Chamán
      <DailyDetail />
      </div>
    );
  }
}

export default App;
