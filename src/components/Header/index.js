import React, { Component } from 'react';
import './Header.scss';
import LocationFinder from '../LocationFinder/index';
import HourHeader from '../HourHeader/index';
import CityLocation from '../CityLocation/index';

class Header extends Component {
    render() {
    const {onClickAction, visibility} = this.props;
        return (
            <div className="header-main">
                <LocationFinder
                onClickAction = {onClickAction}
                visibility = {visibility}/>
                <HourHeader/>
                <CityLocation />
            </div>
        );
    }
}

export default Header;
