import React from 'react';

class HourData extends React.Component {
    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }
    
    render() {
        return(
            <tr>
            <th>{this.props.hour}</th>
            <th>{this.getRndInteger(-5,45)}</th>
            <th>{this.getRndInteger(-5,45)}</th>
            <th>{this.getRndInteger(-5,45)}</th>
        </tr>
        )
    }
}

export default HourData;