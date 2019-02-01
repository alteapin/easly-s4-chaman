import React, { Component } from 'react';
import './WeekDetail.scss';
import Weekday from '../Weekday';
import Cloud from '../../icons/cloud.svg';
import Snow from '../../icons/snow.svg';
import Sun from '../../icons/sun.svg';

class WeekDetail extends Component {
  render() {
    return (
        <div className='base'>
        <Weekday day='Tue' icon={Cloud}/>
        <Weekday day='Wed' icon={Snow}/>
        <Weekday day='Thu' icon={Sun}/>
        <Weekday day='Fri' icon={Sun}/>
        <Weekday day='Sat' icon={Cloud}/>
        <Weekday day='Sun' icon={Sun}/>
        </div>
    );
  }
}

export default WeekDetail;
