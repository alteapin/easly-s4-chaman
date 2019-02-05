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

const url =
    "http://api.openweathermap.org/data/2.5/weather?APPID=e0911626bb8e9d069605aa705cac6693&id=6359304&units=metric&lang=es";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Endpoint: {},
            loaded: true,
            error: '',
            isVisible: true,
            quoteTxt: '',
            date: ''
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
                },()=>console.log(this.state.E))
            )
            .catch(error => this.setState({ error: error }));
    }


    componentDidMount() {
        this.fetchApi();
        this.randomQuote();
        this.printDayNameNumber();
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
    printDayNameNumber() {
        const currentDate = new Date();
        const weekNumber = currentDate.getDate();
        console.log('day', weekNumber);
        const weekday = new Array(7);
            weekday[0] =  "Sun";
            weekday[1] = "Mon";
            weekday[2] = "Tue";
            weekday[3] = "Wed";
            weekday[4] = "Thu";
            weekday[5] = "Fri";
            weekday[6] = "Sat";
            const weekName = weekday[currentDate.getDay()];
            console.log('name', weekName);
            this.setState ( {
                date: weekName + ' ' + weekNumber,
            })
    }

    render() {
        const { Endpoint, quoteTxt } = this.state;
        const BgImage = {
            backgroundImage: `url(${sun})`
        };
        console.log(this.state.quoteTxt);
       /*  this.printDayNameNumber(); */

        if (this.state.loaded) {
            return (
                <div className="App sun">
                    <div className="bg-image container-app">
                    <div className='container-screen' style={BgImage} >
                        <Header
                        onClickAction={this.showInput}
                        visibility={this.state.visibility}
                        date={this.state.date} />
                        <Daily dataWeather={Endpoint} quote={quoteTxt}/>
                        </div>
                         <WeekDetail/>
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
