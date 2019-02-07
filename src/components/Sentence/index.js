import React, { Component } from 'react';
//import icon from'../../icons/iconfinder-icon.svg'
import './Sentence.scss'

class Sentence extends Component {
    render() {
        const { quote } = this.props;

        return (
            <div className='container__sentence'>
                {quote}</div>
        );
    }
}

export default Sentence;
