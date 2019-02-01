import React, { Component } from 'react';
import Daily from '../Daily';
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
    const {ResponseApi}=this.state.Endpoint;
    return (
      <div className='App'>
      {ResponseApi.base}
        Chamán
        <Daily/>
      </div>
    );
  }
}

export default App;
