import React, { Component } from 'react';
import API from '../../weather'
import './App.scss';
import Header from '../Header/index';
import Footer from '../Footer/index';
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
    const {ResponseApi}=this.state;
    return (
      <div className="App">
      <div style={BgImage} className="bg-image"> 
      <Header />
      <Footer />
      </div>
      </div>
    );
  }
}

export default App;
