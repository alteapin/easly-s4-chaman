import React, { Component } from 'react';
import './Header.scss';
import HourHeader from '../HourHeader/index';
import CityLocation from '../CityLocation/index';
import DayNameNumber from '../DayNameNumber';

class Header extends Component {
    render() {
    const {date, textInput, focusInput, onChangeCity, currentLocation, getCurrentLocation, selectedLocation, addFavorite, favorites, hour} = this.props;
    //console.log('header', this.props);
        return (

            <div className="header-main">
                <CityLocation
                selectedLocation={selectedLocation}
                getCurrentLocation={getCurrentLocation}
                currentLocation={currentLocation}
                onChangeCity={onChangeCity}
                addFavorite={addFavorite}
                favorites={favorites}
                textInput = {textInput}
                focusInput = {focusInput}
                />
                <HourHeader
                hour = {hour}
                />
                <DayNameNumber date={date} />

            </div>
        );
    }
}

export default Header;
