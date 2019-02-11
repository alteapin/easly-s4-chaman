import React, { Component } from 'react';
import './WeekDetail.scss';
import WeekDay from '../WeekDay';

class WeekDetail extends Component {

    render() {
        const { forecastData, onDayClick, activeDay } = this.props;


        return (
            <div className='weekDetail-container snow-week'>
                {
                    forecastData.map(day => (
                        <WeekDay day={day} key={day.dt} activeDay={activeDay} onDayClick={onDayClick} />
                    ))
                }
            </div>
        );
    }
}

export default WeekDetail;
