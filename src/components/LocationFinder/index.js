import React, { Component } from 'react';
import './LocationFinder.scss';
import compass from '../../icons/compass.png';

class LocationFinder extends Component {

    render() {
        const {onClickAction, visibility} = this.props;
        return (
            <div className="location-finder">
                <img
                className="location-icon"
                src={compass}
                alt="compass"
                onClick={onClickAction}/>
                <form>
                    <label htmlFor="location">
                        <input className={`location-finder_input ${visibility}`}
                        // style={{visibility : {visibility}}}
                        type="text" name="location" />
                    </label>
                </form>

            </div>
        );
    }
}

export default LocationFinder;
