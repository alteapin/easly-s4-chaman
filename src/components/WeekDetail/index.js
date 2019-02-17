import React, { Component } from 'react';
import './WeekDetail.scss';
import WeekDay from '../WeekDay';
import '../DailyDetail/DailyDetail.scss';
import PropTypes from 'prop-types';

class WeekDetail extends Component {

    render() {
        const { forecastData, onDayClick, activeDay, animation } = this.props;
        console.log('fore', forecastData);
        console.log('oncli', onDayClick);
        console.log('activ', activeDay);
        console.log('ani', animation);
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

WeekDetail.proptypes = {
    forecastData: PropTypes.array.isRequired,
    onDayClick: PropTypes.func.isRequired,
    activeDay: PropTypes.object,
    animation: PropTypes.string.isRequired
}

export default WeekDetail;
