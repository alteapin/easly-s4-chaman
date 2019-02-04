import React, { Component } from "react";
import Daily from "../Daily";
import API from "../../weather";
import "./App.scss";
import Header from "../Header/index";
import Footer from '../Footer';
import WeekDetail from '../WeekDetail';
import sun from "../../images/sun.png";
import night from "../../images/night.png";
import snow from "../../images/snow.png";
import rain from "../../images/rain.png";
import { Switch, Route } from 'react-router-dom';
import DailyDetail from "../DailyDetail";

const url =
    "http://api.openweathermap.org/data/2.5/weather?APPID=e0911626bb8e9d069605aa705cac6693&id=6359304&units=metric&lang=es";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Endpoint: {},
            loaded: true,
            error: "",
            isVisible: true,
        };
        this.showInput = this.showInput.bind(this);
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

    showInput() {
        this.setState({
            visibility: "visible"
        });
    }

    render() {
        const { Endpoint } = this.state;
        const BgImage = {
            backgroundImage: `url(${sun})`
        };

        if (this.state.loaded) {
            return (
                <div className="App sun">
                    <div style={BgImage} className="bg-image">
                        <Header
                        onClickAction={this.showInput}
                        visibility={this.state.visibility} />
                        <Daily dataWeather={Endpoint} />
                        <Switch >
                            <Route exact path='/' render={() => <WeekDetail />} />
                            <Route path='/detail' render={() => <DailyDetail />} />
                        </Switch>
                        <Footer />

                    </div>

                </div>
            );
        } else {
            return false;
        }
    }
}

export default App;
