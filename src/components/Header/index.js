import React, { Component } from 'react';
import './Header.scss';
import HourHeader from '../HourHeader/index';
import CityLocation from '../CityLocation/index';
import DayNameNumber from '../DayNameNumber';

class Header extends Component {
    render() {
    const {date} = this.props;
    console.log('header', this.props);
        return (

            <div className="header-main">
                 <CityLocation />
                <HourHeader/>
                <DayNameNumber date={date} />

            </div>
        );
    }
}

export default Header;
