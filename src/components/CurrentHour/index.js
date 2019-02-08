import React, { Component } from 'react';
import './CurrentHour.scss';
import Clock from 'react-live-clock';


class CurrentHour extends Component {
    render() {
        return (
            <div>
                <Clock className="clock" format="HH:mm" ticking={true} interval={1000} />
            </div>
        );
    }
}

export default CurrentHour;
