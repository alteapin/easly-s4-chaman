import React from "react";
import "./Error.scss";
import PropTypes from "prop-types";

class Error extends React.Component {
    render() {
        const { message } = this.props;
        return (
            <div className="error__div">
                <h3 className="error__title">Nobody is perfect:</h3>
                <p className="error_clasic">Sorry, but {message}.</p>
                <p className="error_joke">
                    You can always go outside to see the weather
                </p>
            </div>
        );
    }
}

Error.propTypes = {
    message: PropTypes.string,
};

export default Error;
