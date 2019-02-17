import React, { Component } from "react";
import "./CurrentHour.scss";
import PropTypes from "prop-types";

class CurrentHour extends Component {
    render() {
        const { hour } = this.props;
        return (
            <div>
                <p className="clock">{hour}</p>
            </div>
        );
    }
}


CurrentHour.propTypes = {
    hour: PropTypes.string,
  };

export default CurrentHour;

