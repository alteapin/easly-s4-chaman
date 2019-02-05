import React from 'react';
import HourData from '../HourData';
import HeadBoard from '../HeadBoard';
import './DailyDetail.scss';




class DailyDetail extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: '',
//             loaded: false,
//             error: '',
//         };
//     }

<<<<<<< HEAD
    fetchApi() {
        fetch('https://api.openweathermap.org/data/2.5/forecast?APPID=e0911626bb8e9d069605aa705cac6693&id=6359304&units=metric&lang=es%E2%80%9C')
            .then(res => res.json())
            .then(data =>
                this.setState({
                    data: data,
                    loaded: true
                })
            )
            .catch(error => this.setState({ error: error }));
    }
    componentDidMount() {
        this.fetchApi();
        this.currentDayDetail();
    }
    currentDayDetail() {
        if (this.setState.loaded === true) {
            const apiInfo = this.state.data.list.map(day =>
                day.dt_txt)
        }
    }


    render() {
        console.log('info', this.state.data);
        console.log('hora', this.apiInfo);
=======
//     fetchApi() {
//         fetch('http://api.openweathermap.org/data/2.5/forecast?APPID=e0911626bb8e9d069605aa705cac6693&id=6359304&units=metric&lang=es%E2%80%9C')
//             .then(res => res.json())
//             .then(data =>
//                 this.setState({
//                     data: data,
//                     loaded: true
//                 })
//             )
//             .catch(error => this.setState({ error: error }));
//     }
//     componentDidMount() {
//         this.fetchApi();
//        this.currentDayDetail();
//     }
//    currentDayDetail() {
//         if(this.setState.loaded === true){
//          const apiInfo = this.state.data.list.map(day =>
//             day.dt_txt)}
//         }


    render() {
        // console.log('info',this.state.data);
        // console.log('hora', this.apiInfo);
>>>>>>> console
        return (
            <div className='infoDaily-Detail sun-daily'>
                <p className='title-detail'>More info per hour<span> 6 Feb</span></p>
                <table className="dailyDetail__table">
                    <HeadBoard />
                    <tbody>
                        <HourData hour={'6 - 9'} />
                        <HourData hour={'9 - 12'} />
                        <HourData hour={'12 - 15'} />
                        <HourData hour={'15 - 18'} />
                        <HourData hour={'18 - 21'} />
                        <HourData hour={'21 - 00'} />
                        <HourData hour={'00 - 3'} />
                        <HourData hour={'3 - 6'} />
                    </tbody>
                </table>
            </div>



        )
    }
}

export default DailyDetail;
