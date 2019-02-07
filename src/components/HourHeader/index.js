import React, { Component } from 'react';
import './HourHeader.scss';
import Clock from '../CurrentHour/index';


class HourHeader extends Component {
    render() {
        return (
            <div className="hour-header-container">
                <Clock />
            </div>
        );
    }
}

export default HourHeader;
