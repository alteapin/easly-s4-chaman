import React, { Component } from 'react';
import './CurrentHour.scss';
import Clock from 'react-live-clock';


class CurrentHour extends Component {
    render() {
        return (
            <div>
                <Clock
                    className="clock"
                    format={'h:mm:ssa'}
                    ticking={true} />
            </div>
        );
    }
}

export default CurrentHour;
