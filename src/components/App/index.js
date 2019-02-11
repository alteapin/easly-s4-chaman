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
import BgLogic from '../BgLogic/index';



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
            selectedDay: "",
            selectedLocation: "",
            currentLocation: {},
            CurrentHour: ""
        };

        this.printDayNameNumber = this.printDayNameNumber.bind(this);
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
        // this.changeBg = this.changeBg.bind(this);

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
        // this.changeBg();

    }


    currentDayData() {
        const { city, country } = this.state.currentLocation;
        ApiServices.currentDayService(city, country)
            .then(data =>
                this.setState({
                    endpointCurrent: data,
                    loaded: true
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

//     changeBg() {
//         const { endpointCurrent } = this.state.endpointCurrent;

//         if (endpointCurrent.dt > endpointCurrent.sys.sunset && endpointCurrent.dt < endpointCurrent.sys.sunrise) {
//             this.setState(
//                 {
//                     theme: themeWeather.night,
//                     animation: 'night'
//                 }
//             )
//         } else {

//             if (endpointCurrent.clouds.all > 20) {
//                 this.setState(
//                     {
//                         theme: themeWeather.rain,
//                         animation: 'rain'
//                     }
//                 )
//             } else if
//                 (endpointCurrent.main.temp > 18) {
//                 this.setState(
//                     {
//                         theme: themeWeather.sun,
//                         animation: 'sun'
//                     }
//                 )
//         } else {
//             this.setState(
//                 {
//                     theme: themeWeather.snow,
//                     animation: 'snow'
//                 }
//             )
//         }
//     }

// }




    render() {
        const { endpointCurrent, quoteTxt, date } = this.state;
        const {textInput , focusTextInput} = this.props;
        const BgImage = {
            backgroundImage: `url(${themeWeather.snow})`
        };


        if (this.state.loaded) {
            return (
                <div className="App snow">
                    <div className="bg-image container-app">
                        <div className="container-screen" style={BgImage}>
                        <BgLogic
                        endpointCurrent = {endpointCurrent} />
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
