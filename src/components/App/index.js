import React, { Component } from "react";
import Daily from "../Daily";
import "./App.scss";
import Header from "../Header/index";
import Footer from "../Footer";
import WeekDetail from "../WeekDetail";
import arrayQuotes from "../arrayQuotes";
import sun from "../../images/sun.png";
import night from "../../images/night.png";
import snow from "../../images/snow.png";
import rain from "../../images/rain.png";
import DailyDetail from "../DailyDetail";
//import { forecastService } from "../../services/forecastService";
//import { currentDayService } from "../../services/currentDayService";
import { locationService } from "../../services/locationService";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            endpointCurrent: {},
            endpointForecast: {},
            loadedCurrent: true,
            loadedForecast: true,
            error: "",
            quoteTxt: "",
            date: "",
            theme: "",
            selectedDay: "",
            selectedLocation: "",
            currentLocation: {},
        };

        this.printDayNameNumber = this.printDayNameNumber.bind(this);
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    fetchGetLocation() {
        locationService().then(data =>
            this.setState(
                {
                    currentLocation: data
                },
                () => {
                    console.log(data);
                    const { city, country } = this.state.currentLocation;
                    this.currentDayData(city, country);
                    this.forecastData(city, country);
                }
            )
        );
    }



    componentDidMount() {
        this.fetchGetLocation();
        this.randomQuote();
        this.printDayNameNumber();
    }

    currentDayData(city, country) {
        const urlCurrent = `http://api.openweathermap.org/data/2.5/weather?APPID=e0911626bb8e9d069605aa705cac6693&q=${city}${country}&units=metric&lang=en`;
        fetch(urlCurrent)
            .then(res => res.json())
            .then(data =>
                this.setState({
                    endpointCurrent: data,
                    loaded: true
                })
            )
            .catch(error => this.setState({ error: error }));
    }

    forecastData(city, country) {
        const urlForecast = `http://api.openweathermap.org/data/2.5/forecast?APPID=e0911626bb8e9d069605aa705cac6693&q=${city}${country}&units=metric&lang=en`;
        fetch(urlForecast)
            .then(res => res.json())
            .then(data =>
                this.setState(
                    {
                        endpointForecast: data,
                        loaded: true
                    },
                    () => console.log(data)
                )
            )
            .catch(error => this.setState({ error: error }));
    }

    randomQuote() {
        const random =
            arrayQuotes[Math.floor(Math.random() * arrayQuotes.length)];
        this.setState({
            quoteTxt: random
        });
    }

    printDayNameNumber() {
        const currentDate = new Date();
        const weekNumber = currentDate.getDate();
        const weekday = new Array(7);
        weekday[0] = "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tue";
        weekday[3] = "Wed";
        weekday[4] = "Thu";
        weekday[5] = "Fri";
        weekday[6] = "Sat";
        const weekName = weekday[currentDate.getDay()];
        this.setState({
            date: weekName + " " + weekNumber
        });
    }

    focusTextInput() {
        this.textInput.current.focus();
    }



    render() {
        const { endpointCurrent, quoteTxt, date } = this.state;
        const {textInput , focusTextInput} = this.props;
        const BgImage = {
            backgroundImage: `url(${snow})`
        };
        console.log(this.state.quoteTxt);

        if (this.state.loaded) {
            return (
                <div className="App snow">
                    <div className="bg-image container-app">
                        <div className="container-screen" style={BgImage}>
                            <Header
                                date={date}
                                textInput = {textInput}
                                focusInput = {focusTextInput}
                                />
                            <Daily dataWeather={endpointCurrent} quote={quoteTxt} />
                        </div>
                        <WeekDetail />
                        <DailyDetail />
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
