

import React from 'react';
import './Loading.scss';

class Loading extends React.Component {
    render() {
        return (
            <div id="loading-wrapper">
                <div id="loading-text">LOADING</div>
                <div id="loading-content"></div>
            </div>
        )
    }
}

export default Loading;
