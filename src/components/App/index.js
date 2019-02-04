import React, { Component } from "react";
import Daily from "../Daily";
//import API from "../../weather";
import "./App.scss";
import Header from "../Header/index";
import Footer from '../Footer';
import WeekDetail from '../WeekDetail';
import sun from "../../images/sundark.png";
<<<<<<< HEAD
import arrayQuotes from '../arrayQuotes';
=======
import { Switch, Route } from 'react-router-dom';
import DailyDetail from "../DailyDetail";
>>>>>>> 03d221f1186b2653af94a56eedd38b9d55a6489f

const url =
    "http://api.openweathermap.org/data/2.5/weather?APPID=e0911626bb8e9d069605aa705cac6693&id=6359304&units=metric&lang=es";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Endpoint: {},
            loaded: true,
<<<<<<< HEAD
            error: '',
            quoteTxt: '',
        };

=======
            error: "",
            isVisible: true,
        };
        this.showInput = this.showInput.bind(this);
>>>>>>> 03d221f1186b2653af94a56eedd38b9d55a6489f
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
        this.randomQuote();
    }

    randomQuote(){
       const random= arrayQuotes[Math.floor(Math.random() * arrayQuotes.length)];
       this.setState ({
           quoteTxt: random
       })
    }

    showInput() {
        this.setState({
            visibility: "visible"
        });
    }

    render() {
        const { Endpoint, quoteTxt } = this.state;
        const BgImage = {
            backgroundImage: `url(${sun})`
        };
        console.log(this.state.quoteTxt);

        if (this.state.loaded) {
            return (
                <div className="App">
                    <div style={BgImage} className="bg-image">
<<<<<<< HEAD
                        <Header />
                        <Daily dataWeather={Endpoint} quote={quoteTxt} />
                        <WeekDetail />
=======
                        <Header
                        onClickAction={this.showInput}
                        visibility={this.state.visibility} />
                        <Daily dataWeather={Endpoint} />
                        <Switch >
                            <Route exact path='/' render={() => <WeekDetail />} />
                            <Route path='/detail' render={() => <DailyDetail />} />
                        </Switch>
>>>>>>> 03d221f1186b2653af94a56eedd38b9d55a6489f
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
