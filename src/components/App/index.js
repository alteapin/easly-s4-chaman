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

const urlLocation = 'https://api.ipstack.com/62.82.24.195?access_key=80740194e65202f38b81670ff01f10ef';

const url =
    "https://api.openweathermap.org/data/2.5/weather?APPID=e0911626bb8e9d069605aa705cac6693&id=6359304&units=metric&lang=es";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            endpointCurrent: {},
            endpointForecast:[],
            loadedCurrent: true,
            loadedForecast: true,
            error: '',
            quoteTxt: '',
            date: '',
            theme:'',
            selectedDay:'',
            selectedLocation:'',
            currentLocation:{},
        };

        this.printDayNameNumber = this.printDayNameNumber.bind(this);
    }

    fetchLocation(){
        fetch(urlLocation)
        .then(res=>res.json())
        .then(data=> console.log(data))
    }

    fetchApi() {
        fetch(url)
            .then(res => res.json())
            .then(data =>
                this.setState({
                    endpointCurrent: data,
                    loaded: true
                }, () => console.log(this.state.E))
            )
            .catch(error => this.setState({ error: error }));
    }


    componentDidMount() {
        this.fetchApi();
        this.randomQuote();
        this.printDayNameNumber();
        this.fetchLocation();
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
        const { Endpoint, quoteTxt } = this.state;
        const BgImage = {
            backgroundImage: `url(${night})`
        };
        console.log(this.state.quoteTxt);


        if (this.state.loaded) {
            return (
                <div className="App night">
                    <div className="bg-image container-app">
                        <div className='container-screen' style={BgImage} >
                            <Header
                                onClickAction={this.showInput}
                                visibility={this.state.visibility}
                                date={this.state.date} />
                            <Daily dataWeather={Endpoint} quote={quoteTxt} />
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
