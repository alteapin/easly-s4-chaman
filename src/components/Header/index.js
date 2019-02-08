import React, { Component } from 'react';
import './Header.scss';
import HourHeader from '../HourHeader/index';
import CityLocation from '../CityLocation/index';
import DayNameNumber from '../DayNameNumber';

class Header extends Component {
    render() {
<<<<<<< HEAD
        const { onClickAction, visibility, date } = this.props;
        console.log('header', this.props);
        return (

            <div className="header-main">
                <LocationFinder
                    onClickAction={onClickAction}
                    visibility={visibility} />
                <HourHeader />
=======
    const {date, textInput, focusInput} = this.props;
    console.log('header', this.props);
        return (

            <div className="header-main">
                <CityLocation
                textInput = {textInput}
                focusInput = {focusInput}
                />
                <HourHeader/>
>>>>>>> filterlocation
                <DayNameNumber date={date} />

            </div>
        );
    }
}

export default Header;
