import React, { Component } from 'react';
import './Header.scss';
import LocationFinder from '../LocationFinder/index';
import HourHeader from '../HourHeader/index';
import CityLocation from '../CityLocation/index';
import DayNameNumber from '../DayNameNumber';

class Header extends Component {
    render() {
    const {onClickAction, visibility, date} = this.props;
    console.log('header', this.props);
        return (

            <div className="header-main">
                <LocationFinder
                onClickAction = {onClickAction}
                visibility = {visibility}/>
                <HourHeader/>
                <DayNameNumber date={date} />
                <CityLocation />
            </div>
        );
    }
}

export default Header;
