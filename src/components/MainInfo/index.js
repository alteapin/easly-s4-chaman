import React, { Component } from 'react';
import IconTemperature from '../IconTemperature';
import Degrees from '../Degrees';
import MaxMinTemperature from '../MaxMinTemperature';
import './MainInfo.scss';

class MainInfo extends Component {
   
    render() { 
       

        return ( 
        <div className='container__mainInfo-daily'>
        <IconTemperature/>
        <Degrees/>
        <MaxMinTemperature/>
        </div> );
    }
}
 
export default MainInfo;