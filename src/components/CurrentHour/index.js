import React, { Component } from 'react';
import './CurrentHour.scss';



class CurrentHour extends Component {
    render() {
        const {hour} = this.props;
        return (
            <div>
                <p className="clock">{hour}</p>
            </div>
        );
    }
}

export default CurrentHour;
