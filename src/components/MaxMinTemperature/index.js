import React, { Component } from 'react';
import './MaxMinTemperature.scss'

class MaxMinTemperature extends Component {
   
    render() { 
       
        return ( 
        <div className='container__maxMinTemperature'>
        <div className='minTemperature'></div>
        <div className='maxTemperature'></div>
        </div> );
    }
}
 
export default MaxMinTemperature;