import React, { Component } from 'react';
//import Daily from '../Daily';
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
    const BgImage = {
      backgroundImage: `url(${sun})`
    };
 //   const {ResponseApi}=this.state;
    return (
      <div className="App">
        <div style={BgImage} className="bg-image">
        <Header />
        <WeekDetail />
        </div>
        </div>
    );
  }
}

export default App;
