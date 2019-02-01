import React, { Component } from 'react';
import API from '../../weather'
import './App.scss';
import WeekDetail from '../WeekDetail';


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      Endpoint:API,
    }
  }
  
  render() {
  // const {ResponseApi}=this.state.Endpoint;
           // {ResponseApi.base}
    return (
      <div className="App">
        Chamán
        <WeekDetail />
        </div>
    );
  }
}

export default App;
