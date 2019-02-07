import React, { Component } from "react";
import "./MaxMinTemperature.scss";

class MaxMinTemperature extends Component {
    render() {
        const { temp_min, temp_max } = this.props;
        return (
            <div className="container__maxMinTemperature">
                <div className="minTemperature">
                    min {Math.round(temp_min)}
                    <span className="unit">°C</span>
                </div>
                <div className="maxTemperature">
                    max {Math.round(temp_max)}
                    <span className="unit">°C</span>
                </div>
            </div>
        );
    }
}

export default MaxMinTemperature;
