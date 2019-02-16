import React from 'react';
import "./Fetching.scss"
import logo from "../../images/logoChamanColor.png"
import loading from "../../images/loading.gif"



class Fetching extends React.Component {
    render() {
        return (
            <div className="container-fetching">
            <img className="img-logo" src={logo} alt="logo Chaman"/>
            <img className="img-lading" src={loading} alt="loading"/>
            </div>
        )
    }
}

export default Fetching;
