import React, { Component } from 'react';
import API from '../../weather'
import './App.scss';

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
      </div>
    );
  }
}

export default App;
