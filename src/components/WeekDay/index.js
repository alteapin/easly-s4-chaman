import React, { Component } from 'react';
import './WeekDay.scss';


class Weekday extends Component {
    render() {
        const { day, icon, currentDay } = this.props;
        const iconTemp = {
            backgroundImage: `url(${icon})`
        };
        return (
            <div className={`contain-week-detail ${currentDay}`}>
                <div className='week-detail'>
                    <h3 className='weekday'>{day}</h3>
                    <div className='icon-temp' style={iconTemp}></div>
                    <p className='temp-high'>12º</p>
                    <p className='temp-low'>5º</p>
                </div>
            </div>
        );
    }
}

export default Weekday;
