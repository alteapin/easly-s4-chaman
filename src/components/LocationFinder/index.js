import React, { Component } from 'react';
import './LocationFinder.scss';
import compass from '../../icons/compass.png';

class LocationFinder extends Component {

    render() {
        return (
            <div className="location-finder">
                <img
                className="location-icon"
                src={compass}
                alt="compass"/>
                <form>
                    <label htmlFor="location">
                        <input className="location-finder_input"
                        type="text" name="location" />
                    </label>
                    <span class="underline"></span>
                </form>

            </div>
        );
    }
}

export default LocationFinder;
