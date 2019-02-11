import React, { Component } from "react";
import Daily from "../Daily";
import "./App.scss";
import Header from "../Header/index";
import Footer from '../Footer';
import WeekDetail from '../WeekDetail';
import arrayQuotes from '../arrayQuotes';
import DailyDetail from '../DailyDetail';
import {themeWeather} from '../data/bg';
import ApiServices from '../../services/apiServices';




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
            animation: "",
            animationDetail: "",
            selectedDay: "",
            selectedLocation: "",
            currentLocation: {},
            CurrentHour: ""
        };

        this.printDayNameNumber = this.printDayNameNumber.bind(this);
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);

    }

    fetchGetLocation() {
        ApiServices.locationService().then(data =>
            this.setState(
                {
                    currentLocation: data
                },
                () => {
                    console.log(data);
                    this.currentDayData();
                    this.forecastData();

                }
            )
        );
    }



    componentDidMount() {
        this.randomQuote();
        this.printDayNameNumber();
        this.fetchGetLocation();
    }

    changeBackground (a, b, c, d) {
        if (a < b && a > c) {
            return themeWeather.night
        } else {
            if (d.includes('clear sky', 'few clouds', 'scattered clouds')) {
                return themeWeather.sun
            } else if  (d.includes( 'broken clouds', 'shower rain', 'rain', 'thunderstorm', 'drizzle')){
                return themeWeather.rain
            } else if (d.includes('snow')){
                return themeWeather.snow
            } else {
                return themeWeather.sun
            }

        }
    }

    changeAnimation (a, b, c, d) {
        if (a < b && a > c) {
            return 'night'
        } else {
            if (d.includes('clear sky', 'few clouds', 'scattered clouds')) {
                return 'sun'
            } else if  (d.includes( 'broken clouds', 'shower rain', 'rain', 'thunderstorm', 'drizzle')){
                return 'rain'
            } else if (d.includes('snow')){
                return 'snow'
            } else {
                return 'sun'
            }

        }
    }

    changeAnimationDetail (a, b, c, d) {
        if (a < b && a > c) {
            return 'night-detail'
        } else {
            if (d.includes('clear sky', 'few clouds', 'scattered clouds')) {
                return 'sun-detail'
            } else if  (d.includes( 'broken clouds', 'shower rain', 'rain', 'thunderstorm', 'drizzle')){
                return 'rain-detail'
            } else if (d.includes('snow')){
                return 'snow-detail'
            } else {
                return 'sun-detail'
            }

        }
    }


    currentDayData() {
        const { city, country } = this.state.currentLocation;
        ApiServices.currentDayService(city, country)
            .then(data =>
                this.setState({
                    endpointCurrent: data,
                    loaded: true,
                    theme: this.changeBackground(data.dt, data.sys.sunrise, data.sys.sunset, data.weather[0].description),
                    animation: this.changeAnimation(data.dt, data.sys.sunrise, data.sys.sunset, data.weather[0].description),
                    animationDetail: this.changeAnimationDetail(data.dt, data.sys.sunrise, data.sys.sunset, data.weather[0].description)
                })
            )
            .catch(error => this.setState({ error: error }));
    }

    forecastData() {
        const { city, country } = this.state.currentLocation;
        ApiServices.forecastService(city, country)
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
        const { endpointCurrent, quoteTxt, date, theme, animation, animationDetail } = this.state;
        const {textInput , focusTextInput} = this.props;
        const BgImage = {
            backgroundImage: `url(${theme})`
        };


        if (this.state.loaded) {
            return (
                <div className={`App ${animation}`}>
                    <div className="bg-image container-app">
                        <div className="container-screen" style={BgImage}>

                            <Header
                                date={date}
                                textInput = {textInput}
                                focusInput = {focusTextInput}

                                />
                            <Daily dataWeather={endpointCurrent} quote={quoteTxt} />
                        </div>
                        <WeekDetail
                        animation = {animationDetail}
                        />
                        <DailyDetail
                        animation = {animationDetail}
                        />
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
