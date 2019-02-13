import React from 'react';
import './HourData.scss';

class HourData extends React.Component {
    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    render() {
        console.log('all props', this.props);
        const {rainPercent} = this.props;
        const rainNumber = rainPercent['3h'];
        const rainInNumber = parseInt(rainNumber);
        const rainRound = Math.round(rainInNumber);
       /*  const rainString = JSON.stringify(rainPercent).split(':');
        const rainNumber = rainString[1]; */
        console.log('lluvia',rainRound);
        const {temp} = this.props;
        const roundTemp = Math.round(temp);
        const {wind} = this.props;
        const roundWind = wind.toFixed(1);
        const {hour} = this.props;
        const onlyTime = hour.split (' ');
        const onlyTimewithoutseconds = onlyTime[1].split(':');
        return (
            <tr className="table__row">
                <th className='HourData__hour'>{onlyTimewithoutseconds[0] + ':' + onlyTimewithoutseconds[1]}</th>
                <th>{roundTemp}º</th>
                <th>
                {rainRound} mm
                {/* <span className='dailyDetail_units'>mm</span> */}</th>
                <th>{roundWind} <span className='dailyDetail_units'>km/h</span></th>
            </tr>
        )
    }
}

export default HourData;
