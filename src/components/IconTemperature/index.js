import React, { Component } from 'react';
import icon from'../../icons/iconfinder-icon.svg'
import './IconTemperature.scss'

class  IconTemperature extends Component {
   
    
    render() { 
        const Background = {
            backgroundImage: `url(${icon})`
          };
        return ( 
            <div className='container__iconTemp' style={Background}></div>
         );
    }
}
 
export  default  IconTemperature;