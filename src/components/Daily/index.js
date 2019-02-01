import React, { Component } from 'react';
import MainInfo from '../MainInfo';
import PlusInfo from '../PlusInfo'
import ButtonDetail from '../ButtonDetail'
import './Daily.scss'

class Daily extends Component {
   
    render() { 
        return ( 
        <div className='container__daily'>
        <MainInfo/>
        <PlusInfo/>
        <ButtonDetail/>
        </div> );
    }
}
 
export default Daily;