import React from 'react';
import './DayNameNumber.scss';

class DayNameNumber extends React.Component {
    render() {
        return(
            <p className="date-header">{this.props.date}</p>
        )
    }
}

export default DayNameNumber;
