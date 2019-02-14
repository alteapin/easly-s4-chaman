import React, { Component } from 'react';
import './WeekDay.scss';
import Cloud from '../../icons/cloud.svg';
import Snow from '../../icons/snow.svg';
import Sun from '../../icons/sun.svg';
import Rain from '../../icons/rain.svg';



class Weekday extends Component {
    showIcon() {
        const iconEl = this.props.day.weather[0].main;
        let icon;
        if (iconEl === 'Clear') {
            icon = Sun;
        } else if (iconEl === 'Clouds') {
            icon = Cloud;
        } else if (iconEl === 'Rain') {
            icon = Rain;
        } else if (iconEl === 'Snow') {
            icon = Snow;
        }
        return icon;
    }

    getDateOfWeek() {
        const date = this.props.day.dt_txt;
        const completeDate = new Date(date);

        const dayNumb = completeDate.getDay();
        const weekday = new Array(7);
        weekday[0] = "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tue";
        weekday[3] = "Wed";
        weekday[4] = "Thu";
        weekday[5] = "Fri";
        weekday[6] = "Sat";
        const weekName = weekday[dayNumb];

        return weekName;
    }

    render() {
        const { day, onDayClick, activeDay } = this.props;

        const iconTmp = {
            backgroundImage: `url(${this.showIcon()})`
        };

        return (

            <div className={`week-detail ${activeDay.dt === day.dt ? 'current_weekday' : ''}`} onClick={() => onDayClick(day)}>
                <h3 className='weekday'>{this.getDateOfWeek()}</h3>
                <div className='icon-temp' style={iconTmp}></div>
                <p className='temp-high'>{day.maxTmp}ºC</p>
                <p className='temp-low'>{day.minTmp}ºC</p>
            </div>

        );
    }
}

export default Weekday;
