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
                <th>{this.getRndInteger(-5, 45)}</th>
                <th>{this.getRndInteger(-5, 45)}</th>
                <th>{this.getRndInteger(-5, 45)}</th>
            </tr>
        )
    }
}

export default HourData;
