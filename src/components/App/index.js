import React, { Component } from 'react';
import API from '../../weather'
import './App.scss';
import WeekDetail from '../WeekDetail';
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
  // const {ResponseApi}=this.state.Endpoint;
           // {ResponseApi.base}
    return (
      <div className="App">
        <img className="bg-image" src={sun} alt="sun" />
        <Header />
        <WeekDetail />
        </div>
    );
  }
}

export default App;
