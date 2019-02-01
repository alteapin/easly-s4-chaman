import React from 'react';
import Wind from '../../icons/wind.svg';
import Temp from '../../icons/temp.svg';
import Rain from '../../icons/rain.svg';
import Time from '../../icons/time.svg';

class HeadBoard extends React.Component {
    render() {
        return(
            <tr>
            <th>
                <img src={Time} alt='time icons' />
            </th>
            <th>
                <img src={Temp} alt='temperature icon' />
            </th>
            <th>
                <img src={Rain} alt='Rain percent' />
                <span>(%)</span>
            </th>
            <th>
                <img src={Wind} alt='Wind speed' />
            </th>
        </tr>
        )
    }
}

export default HeadBoard;