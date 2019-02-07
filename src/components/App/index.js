import React, { Component } from "react";
import Daily from "../Daily";
import "./App.scss";
import Header from "../Header/index";
import Footer from '../Footer';
import WeekDetail from '../WeekDetail';
import arrayQuotes from '../arrayQuotes';
import sun from "../../images/sun.png";
import night from "../../images/night.png";
import snow from "../../images/snow.png";
import rain from "../../images/rain.png";
import DailyDetail from "../DailyDetail";
import { forecastService } from '../../services/forecastService';
import { currentDayService } from '../../services/currentDayService';
import { locationService } from '../../services/locationService';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            endpointCurrent: {},
            endpointForecast: [],
            loadedCurrent: true,
            loadedForecast: true,
            error: '',
            quoteTxt: '',
            date: '',
            theme: '',
            selectedDay: '',
            selectedLocation: '',
            currentLocation: {},
        };

        this.printDayNameNumber = this.printDayNameNumber.bind(this);
    }

    fetchLocation() {
        locationService()
            .then(data => console.log(data))
    }

    componentDidMount() {
        this.currentDayData();
        this.randomQuote();
        this.printDayNameNumber();
        this.fetchLocation();
        this.forecastData();
    }

    currentDayData() {
        currentDayService()
            .then(data =>
                this.setState({
                    endpointCurrent: data,
                    loaded: true
                }, () => console.log(this.state.E))
            )
            .catch(error => this.setState({ error: error }));
    }

    forecastData() {
        forecastService()
            .then(data => console.log(data));
    }

    randomQuote() {
        const random = arrayQuotes[Math.floor(Math.random() * arrayQuotes.length)];
        this.setState({
            quoteTxt: random
        })
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
            date: weekName + ' ' + weekNumber,
        })
    }

    render() {
        const { endpointCurrent, quoteTxt } = this.state;
        const BgImage = {
            backgroundImage: `url(${snow})`
        };
        console.log(this.state.quoteTxt);

        if (this.state.loaded) {
            return (
                <div className="App snow">
                    <div className="bg-image container-app">
                        <div className='container-screen' style={BgImage} >
                            <Header
                                onClickAction={this.showInput}
                                visibility={this.state.visibility}
                                date={this.state.date} />
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
