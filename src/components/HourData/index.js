import React from 'react';
import './HourData.scss';

class HourData extends React.Component {
    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    render() {
        return (
            <tr className="table__row">
                <th className='HourData__hour'>{this.props.hour}</th>
                <th>{this.getRndInteger(-5, 45)}º</th>
                <th>{this.getRndInteger(-5, 45)} <span className='dailyDetail_units'>mm</span></th>
                <th>{this.props.wind} <span className='dailyDetail_units'>km/h</span></th>
            </tr>
        )
    }
}

export default HourData;
