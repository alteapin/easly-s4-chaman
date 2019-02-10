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
            selectedDay: "",
            selectedLocation: "",
            currentLocation: {},
            forecastInf: '',
            todayInfo: ''
        };

        this.printDayNameNumber = this.printDayNameNumber.bind(this);
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
        this.paintDayDetail = this.paintDayDetail.bind(this);
    }

    fetchGetLocation() {
        ApiServices.locationService().then(data =>
            this.setState(
                {
                    currentLocation: data
                },
                () => {
                    /* console.log(data); */
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

    groupDateBy(list, keyGetter) {
        const map = new Map();
        list.forEach((item) => {
            const key = item[keyGetter];
            /* console.log(key); */
            const collection = map.get(key);
            if (!collection) {
                map.set(key, [item]);
            } else {
                collection.push(item);
            }
        });
        return map;
    }

    forecastData() {
        const { city, country } = this.state.currentLocation;
        ApiServices.forecastService(city, country)
            .then(data => {
                this.setState({
                    forecastInf: data
                })
                const myList = data.list.map(item => {
                    item.formattedDate = item.dt_txt.slice(0, 10);
                    return item;
                })
                this.paintDayDetail();
                const grouped = this.groupDateBy(myList, 'formattedDate');
                this.setState({
                    endpointForecast: grouped,
                    loaded: true
                }, () => console.log(grouped))
            })
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

    paintDayDetail() {
        const dailyDetailInfo = this.state.forecastInf.list;

        const todayInfo = dailyDetailInfo.slice(0, 8);

        this.setState({
            todayInfo: todayInfo
        })
    }



    render() {
        const { endpointCurrent, quoteTxt, date } = this.state;
        const { textInput, focusTextInput } = this.props;
        const BgImage = {
            backgroundImage: `url(${themeWeather.snow})`
        };


        if (this.state.loaded) {

            return (
                <div className="App snow">
                    <div className="bg-image container-app">
                        <div className="container-screen" style={BgImage}>
                            <Header
                                date={date}
                                textInput={textInput}
                                focusInput={focusTextInput}
                            />
                            <Daily dataWeather={endpointCurrent} quote={quoteTxt} />
                        </div>
                        <WeekDetail />
                        <DailyDetail todayInfo={this.state.todayInfo} actualDate={this.state.date} />
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
