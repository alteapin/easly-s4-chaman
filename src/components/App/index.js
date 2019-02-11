import React, { Component } from "react";
import Daily from "../Daily";
import "./App.scss";
import Header from "../Header/index";
import Footer from "../Footer";
import WeekDetail from "../WeekDetail";
import arrayQuotes from "../arrayQuotes";
import DailyDetail from "../DailyDetail";
import { themeWeather } from "../data/bg";
import ApiServices from "../../services/apiServices";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            endpointCurrent: {},
            endpointForecast: [],
            weekForecast: [],
            loadedCurrent: true,
            loadedForecast: true,
            error: "",
            quoteTxt: "",
            date: "",
            theme: "",
            selectedDay: "",
            selectedLocation: "",
            currentLocation: {}
        };

        this.printDayNameNumber = this.printDayNameNumber.bind(this);
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.getCurrentLocation = this.getCurrentLocation.bind(this);
    }

    fetchGetLocation() {
        ApiServices.locationService().then(data =>
            this.setState(
                {
                    currentLocation: data,
                    selectedLocation: data
                },
                () => {
<<<<<<< HEAD

                    this.currentDayData();
                    this.forecastData();
=======
                    this.currentDayData(data.city, data.country);
                    this.forecastData(data.city, data.country);
>>>>>>> 8cab168b0918f0b6d3415b1f4ce22d8dfc581c2a
                }
            )
        );
    }

    componentDidMount() {
        this.randomQuote();
        this.printDayNameNumber();
        this.fetchGetLocation();
    }

    currentDayData(city, country) {
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
<<<<<<< HEAD
        const listFromDate = new Map();
        list.forEach((item) => {
=======
        const map = new Map();
        list.forEach(item => {
>>>>>>> 8cab168b0918f0b6d3415b1f4ce22d8dfc581c2a
            const key = item[keyGetter];
            const collection = listFromDate.get(key);
            if (!collection) {
                listFromDate.set(key, [item]);
            } else {
                collection.push(item);
            }
        });
        return listFromDate;
    }

    forecastData(city, country) {
        ApiServices.forecastService(city, country)
            .then(data => {
                const myList = data.list.map(item => {
                    item.formattedDate = item.dt_txt.slice(0, 10);
                    return item;
<<<<<<< HEAD
                })

                const grouped = this.groupDateBy(myList, 'formattedDate');

                const weekList = [];

                grouped.forEach(single => {
                    let minTmp = single[0].main.temp_min;
                    let maxTmp = single[0].main.temp_max;
                    single.forEach(item => {
                        const min = item.main.temp_min;
                        const max = item.main.temp_max;
                        if (min < minTmp) {
                            minTmp = min;
                        }
                        if (max > maxTmp) {
                            maxTmp = max;
                        }
                    });

                    single[0].minTmp = Math.round(minTmp);
                    single[0].maxTmp =  Math.round(maxTmp);
                    weekList.push(single[0]);
                })
                console.log('lista foreach de grouped-------------------------', weekList);

                this.setState({
                    endpointForecast: myList,
                    weekForecast: weekList,
                    loaded: true
                })
=======
                });

                const grouped = this.groupDateBy(myList, "formattedDate");
                this.setState(
                    {
                        endpointForecast: grouped,
                        loaded: true
                    },
                    () => console.log(grouped)
                );
>>>>>>> 8cab168b0918f0b6d3415b1f4ce22d8dfc581c2a
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

    onChangeCity(e) {
        if (e) {
            const newCurrentLocation = {
                city: e.value,
                country: `,${e.codeCountry}`
            };
            this.currentDayData(e.value, `,${e.codeCountry}`);
            this.forecastData(e.value, `,${e.codeCountry}`);
            this.setState({
                selectedLocation: newCurrentLocation
            });
        } else if (!e) {
            this.currentDayData(
                `${this.state.currentLocation.city},${
                    this.state.currentLocation.country
                }`
            );
        } else {
            return console.log("error");
        }
    }

    getCurrentLocation() {
        this.fetchGetLocation();
        this.onChangeCity();
    }

    render() {
<<<<<<< HEAD
        const { endpointCurrent, quoteTxt, date, weekForecast } = this.state;
=======
        const {
            endpointCurrent,
            quoteTxt,
            date,
            currentLocation,
            selectedLocation
        } = this.state;
>>>>>>> 8cab168b0918f0b6d3415b1f4ce22d8dfc581c2a
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
                                getCurrentLocation={this.getCurrentLocation}
                                currentLocation={currentLocation}
                                selectedLocation={selectedLocation}
                                date={date}
                                textInput={textInput}
                                focusInput={focusTextInput}
                                onChangeCity={this.onChangeCity}
                            />
                            <Daily
                                dataWeather={endpointCurrent}
                                quote={quoteTxt}
                            />
                        </div>
                        <WeekDetail forecastData={weekForecast} />
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
