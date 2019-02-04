import React, { Component } from "react";
import MainInfo from "../MainInfo";
import PlusInfo from "../PlusInfo";
import ButtonDetail from "../ButtonDetail";
import "./Daily.scss";

class Daily extends Component {
    render() {
        const { dataWeather, quote } = this.props;

        if (dataWeather) {
            return (
                <div className="container__daily">
                    <MainInfo mainData={dataWeather.main} quote={quote} />
                    <PlusInfo
                        mainData={dataWeather.main}
                        windData={dataWeather.wind}
                    />
                </div>
            );
        } else {
            return false;
        }
    }
}

export default Daily;
