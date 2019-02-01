import React, { Component } from 'react';
import './Header.scss';
import LocationFinder from '../LocationFinder/index';
import HourHeader from '../HourHeader/index';
import CityLocation from '../CityLocation/index';

class Header extends Component {
    render() { 
    
        return ( 
            <div className="header-main">
                <LocationFinder />
                <HourHeader />
                <CityLocation />
            </div>
        );
    }
}

export default Header;