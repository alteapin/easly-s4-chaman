import React, { Component } from 'react';
import './CityLocation.scss';
import compass from '../../icons/compass.png';

class CityLocation extends Component {

    render() {
        const {textInput , focusInput} = this.props;
        return (
            <div className="citylocation">
                <img
                className="location-icon"
                src={compass}
                alt="compass"
                />
                <form>
                    <label name="location">
                        <input
                        className="location-finder_input"
                        type="text"
                        ref = {textInput}
                        placeholder="Madrid"
                        name="location"
                        onClick = {focusInput}
                        onFocus={(e) => e.target.placeholder = ""}
                        onBlur={(e) => e.target.placeholder = "Name"}
                        />
                    </label>
                </form>
            </div>
        );
    }
}

export default CityLocation;
