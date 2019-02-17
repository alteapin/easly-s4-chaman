import React, { Component } from "react";
import "./Degrees.scss";
import PropTypes from "prop-types";

class Degree extends Component {
    render() {
        const { temp } = this.props;
        return (
            <div className="container__Degree">
                {" "}
                {Math.round(temp)}
                <span className="unit">°</span>
            </div>
        );
    }
}

Degree.propTypes = {
    temp: PropTypes.number
};

export default Degree;
