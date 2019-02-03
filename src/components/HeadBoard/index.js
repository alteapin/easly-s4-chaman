import React from 'react';
import Wind from '../../icons/wind.svg';
import Temp from '../../icons/temp.svg';
import Rain from '../../icons/rain.svg';
import Time from '../../icons/time.svg';
import './HeadBoard.scss';

class HeadBoard extends React.Component {
    render() {
        return(
            <tr className='headBoard__general'>
            <th>
                <img className='headBoard__icon' src={Time} alt='time icons' />
            </th>
            <th>
                <img className='headBoard__icon' src={Temp} alt='temperature icon' />
            </th>
            <th>
                <img className='headBoard__icon' src={Rain} alt='Rain percent' />
            </th>
            <th>
                <img className='headBoard__icon' src={Wind} alt='Wind speed' />
            </th>
        </tr>
        )
    }
}

export default HeadBoard;
