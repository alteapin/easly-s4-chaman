import React from 'react';
import arrow from '../../icons/arrow.svg';
import './BackBtn.scss';


class BackBtn extends React.Component {
    render() {
        return (
            <img className='back__btn' alt='return button' src={arrow} />
        )
    }
}

export default BackBtn;
