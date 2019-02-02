import React, { Component } from 'react';
import API from '../../weather'
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main';
import Detail from '../Detail';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Endpoint: API,
    }
  }

  render() {

    /*  const {ResponseApi}=this.state.Endpoint; */
    return (
      <div className="App">
        <Main />
        <Switch>
          <Route exact path='/'
            render={() => <Main />} />
          <Route path="/detail"
            render={() => <Detail />} />
        </Switch>

      </div>
    );
  }
}

export default App;

