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
        <Weekday day='TUE' icon={Cloud}/>
        <Weekday day='WED' icon={Snow}/>
        <Weekday day='THU' icon={Sun}/>
        <Weekday day='FRI' icon={Sun}/>
        <Weekday day='SAT' icon={Cloud}/>
        <Weekday day='SUN' icon={Sun}/>
        </div>
    );
  }
}

export default WeekDetail;
