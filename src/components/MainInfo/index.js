import React, { Component } from 'react';
import Sentence from '../Sentence';
import Degrees from '../Degrees';
import MaxMinTemperature from '../MaxMinTemperature';
import './MainInfo.scss';

class MainInfo extends Component {
   
    render() { 
        return ( 
        <div className='container__mainInfo-daily'>
        <Degrees/>
        <Sentence/>
        <MaxMinTemperature/>
        </div> );
    }
}
 
export default MainInfo;