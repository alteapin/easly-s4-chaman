import React, { Component } from "react";
import Sentence from "../Sentence";
import Degrees from "../Degrees";
import MaxMinTemperature from "../MaxMinTemperature";
import "./MainInfo.scss";

class MainInfo extends Component {
    render() {
        if (this.props.mainData) {
            const { temp, temp_min, temp_max } = this.props.mainData;
            return (
                <div className="container__mainInfo-daily">
                    <Degrees temp={temp} />
                    <Sentence />
                    <MaxMinTemperature
                        temp_min={temp_min}
                        temp_max={temp_max}
                    />
                </div>
            );
        } else {
            return false;
        }
    }
}

export default MainInfo;
