import React from "react";
import "./HourData.scss";
import Arrow from "../../icons/right-arrow.png";
import PropTypes from "prop-types";

class HourData extends React.Component {
    render() {
        const { rainPercent, temp, wind, windDirection, hour } = this.props;
        const rainNumber = parseInt(rainPercent["3h"]);
        const roundTemp = Math.round(temp);
        const roundWind = wind.toFixed(1);
        const windStyle = { transform: `rotate(${windDirection}deg)` };
        const onlyTime = hour.split(" ");
        const onlyTimewithoutseconds = onlyTime[1].split(":");
        return (
            <tr className="table__row">
                <th className="HourData__hour">
                    {onlyTimewithoutseconds[0] +
                        ":" +
                        onlyTimewithoutseconds[1]}
                </th>
                <th className="temp">{roundTemp}º</th>
                <th>
                    {" "}
                    {rainNumber || 0}{" "}
                    <span className="dailyDetail_units">mm</span>{" "}
                </th>
                <th>
                    <img
                        src={Arrow}
                        alt="wind direction arrow"
                        style={windStyle}
                        className="wind__arrow"
                    />
                    {roundWind} <span className="dailyDetail_units">km/h</span>
                </th>
            </tr>
        );
    }
}

HourData.propTypes = {
    rainPercent: PropTypes.number.isRequired,
    temp: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
    windDirection: PropTypes.number.isRequired
};

export default HourData;
