<<<<<<< HEAD
import React, { Component } from "react";
import Daily from "../Daily";
import API from "../../weather";
import "./App.scss";
import Header from "../Header/index";
import sun from "../../images/sundark.png";

const url =
    "http://api.openweathermap.org/data/2.5/weather?APPID=e0911626bb8e9d069605aa705cac6693&id=6359304&units=metric&lang=es";
=======
import React, { Component } from 'react';
import API from '../../weather'
import './App.scss';
import Header from '../Header/index';
import Footer from '../Footer/index';
import sun from '../../images/sundark.png';
>>>>>>> footer

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Endpoint: {},
            loaded: true,
            error: ""
        };
    }

    fetchApi() {
        fetch(url)
            .then(res => res.json())
            .then(data =>
                this.setState({
                    Endpoint: data,
                    loaded: true
                })
            )
            .catch(error => this.setState({ error: error }));
    }


    componentDidMount() {
        this.fetchApi();
    }

    render() {
        const { Endpoint } = this.state;
        const BgImage = {
            backgroundImage: `url(${sun})`
        };

        if (this.state.loaded) {
            return (
                <div className="App">
                    <div style={BgImage} className="bg-image">
                        <Header />
                        <Daily dataWeather={Endpoint} />
                    </div>
                </div>
            );
        } else {
            return false;
        }
    }
<<<<<<< HEAD
=======
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
>>>>>>> footer
}

export default App;
