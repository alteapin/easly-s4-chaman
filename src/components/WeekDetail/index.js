import React, { Component } from 'react';
import './WeekDetail.scss';
import WeekDay from '../WeekDay';

class WeekDetail extends Component {

    render() {
        const { forecastData } = this.props;

        return (
            <div className='weekDetail-container snow-week'>
                {
                    forecastData.map(day => (
                        <WeekDay day={day} />
                    ))
                }
            </div>
        );
    }
}

export default WeekDetail;
