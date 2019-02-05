import React, { Component } from 'react';
import './WeekDetail.scss';
import WeekDay from '../WeekDay';
import Cloud from '../../icons/cloud.svg';
import Snow from '../../icons/snow.svg';
import Sun from '../../icons/sun.svg';

class WeekDetail extends Component {
  render() {
    return (
        <div className='weekDetail-container night-week'>
        <WeekDay day='Tue' icon={Cloud} currentDay='current_weekday'/>
        <WeekDay day='Wed' icon={Snow}/>
        <WeekDay day='Thu' icon={Sun}/>
        <WeekDay day='Fri' icon={Sun}/>
        <WeekDay day='Sat' icon={Cloud}/>
        </div>
    );
  }
}

export default WeekDetail;
