import React, { Component } from "react";
import Daily from "../Daily";
import API from "../../weather";
import "./App.scss";
import Header from "../Header/index";
import WeekDetail from '../WeekDetail';
import sun from "../../images/sundark.png";

const url = "http://api.openweathermap.org/data/2.5/weather?APPID=e0911626bb8e9d069605aa705cac6693&id=6359304&units=metric&lang=es";


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
                        <WeekDetail />
                    </div>
                </div>
            );
        } else {
            return false;
        }
    }
}

export default App;
