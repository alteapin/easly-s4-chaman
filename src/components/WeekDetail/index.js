import React, { Component } from 'react';
import './WeekDetail.scss';
import WeekDay from '../WeekDay';
import Cloud from '../../icons/cloud.svg';
import Snow from '../../icons/snow.svg';
import Sun from '../../icons/sun.svg';

class WeekDetail extends Component {
  render() {
    return (
<<<<<<< HEAD
        <div className='weekDetail-container night-week'>
=======
        <div className='weekDetail-container snow-week'>
>>>>>>> 8a71d66fb707b963007a3f15d6a96104089c878a
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
