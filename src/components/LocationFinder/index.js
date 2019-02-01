import React, { Component } from 'react';
import './LocationFinder.scss';

class LocationFinder extends Component {

    render() {
        return (
            <div className="location-finder">
                <span className="location-icon">🌍</span>
                <form>
                    <label for="location">
                        <input className="location-finder_input" type="text" name="location" placeholder="Placeholder Text" />
                    </label>
                </form>

            </div>
        );
    }
}

export default LocationFinder;