import React, { Component } from 'react';
import './WeekDetail.scss';
import WeekDay from '../WeekDay';
import '../DailyDetail/DailyDetail.scss';

class WeekDetail extends Component {

    render() {
        const { forecastData, onDayClick, activeDay, animation } = this.props;
        return (
            <div className={`weekDetail-container ${animation}`}>
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
