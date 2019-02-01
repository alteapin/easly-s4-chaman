import React, { Component } from 'react';


class Weekday extends Component {
  render() {
    const { day, icon } = this.props;
    const iconTemp = {
      backgroundImage: `url(${icon})`
    };
    return (
      <div className='contain-week-detail'>
      <div className='week-detail'>
       <div  className='icon-temp' style={iconTemp}></div>
            <p className='temp-high'>12º</p>
            <p className='temp-low'>5º</p>
        <h3 className='weekday'>{day}</h3>
      </div>
      </div>
    );
  }
}

export default Weekday;
