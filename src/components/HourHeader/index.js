import React, { Component } from "react";
import "./HourHeader.scss";
import Clock from "../CurrentHour/index";

class HourHeader extends Component {
    render() {
        const { hour } = this.props;
        return (
            <div className="hour-header-container">
                <Clock hour={hour} />
            </div>
        );
    }
}

export default HourHeader;
