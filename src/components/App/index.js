import React, { Component } from 'react';
import API from '../../weather'
import './App.scss';
import Header from '../Header/index';
import sun from '../../images/sundark.png';

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
        <img className="bg-image" src={sun} alt="sun" />
        <Header />
      </div>
    );
  }
}

export default App;
