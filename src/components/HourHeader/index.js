import React, { Component } from 'react';
import './HourHeader.scss';

class HourHeader extends Component {
    render() {
        return (
            <div className="hour-header-container">
            <p className="hour-header">16:40</p>
            </div>
        );
    }
}

export default HourHeader;