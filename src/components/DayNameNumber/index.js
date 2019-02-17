import React from 'react';
import './DayNameNumber.scss';
import PropTypes from 'prop-types';

class DayNameNumber extends React.Component {
    render() {
        return(
            <p className="date-header">{this.props.date}</p>
        )
    }
}

DayNameNumber.propTypes = {
    date: PropTypes.string.isRequired
}

export default DayNameNumber;
