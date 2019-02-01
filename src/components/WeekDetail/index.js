import React, { Component } from 'react';

class WeekDetail extends Component {
  render() {
    const tempIcon = {
      backgroundImage: `url(${cloud})`
    };
    return (
      <div className='contain-week-detail'>
       <div style={tempIcon}> </div>
        <div className='temp-range'>
            <p className='temp-high'>12º</p>
            <p className='temp-low'>5º</p>

        </div>
        <h3 class='day'>Mon</h3>
      </div>
    );
  }
}

export default WeekDetail;
