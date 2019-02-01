import React, { Component } from 'react';
import './LocationFinder.scss';
import compass from '../../icons/compass.png';

class LocationFinder extends Component {

    render() {
        return (
            <div className="location-finder">
                <img className="location-icon" src={compass} alt="compass"/>
                <form>
                    <label for="location">
                        <input className="location-finder_input" type="text" name="location" />
                    </label>
                </form>

            </div>
        );
    }
}

export default LocationFinder;