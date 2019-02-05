import React from 'react';
import Wind from '../../icons/wind.svg';
import Temp from '../../icons/thermometer.svg';
import CloudIcon from '../../icons/cloudIcon.svg';
import Time from '../../icons/time.svg';
import './HeadBoard.scss';

class HeadBoard extends React.Component {
    render() {
        return(
            <thead>
            <tr className='headBoard__general'>
            <th>
                <img className='headBoard__icon' src={Time} alt='time icons' />
            </th>
            <th>
                <img className='headBoard__icon' src={Temp} alt='temperature icon' />
            </th>
            <th>
                <img className='headBoard__icon' src={CloudIcon} alt='Rain percent' />
            </th>
            <th>
                <img className='headBoard__icon' src={Wind} alt='Wind speed' />
            </th>
        </tr>
        </thead>
        )
    }
}

export default HeadBoard;
