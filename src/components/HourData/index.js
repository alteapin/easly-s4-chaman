import React from 'react';
import './HourData.scss';

class HourData extends React.Component {



    render() {
        const {rainPercent} = this.props;
        const rainNumber = parseInt(rainPercent['3h']);

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
                <th className='temp'>{roundTemp}º</th>
                <th> {rainNumber||0} <span className='dailyDetail_units'>mm</span> </th>
                <th>{roundWind} <span className='dailyDetail_units'>km/h</span></th>
            </tr>
        )
    }
}

export default HourData;
