import React from 'react';
import "./Fetching.scss"
import logo from "../../images/logoChamanColor.png"



class Fetching extends React.Component {
    render() {
        return (
            <div className="container-fetching">
            <img className="img-logo" src={logo} alt="logo Chaman"/>
            </div>
        )
    }
}

export default Fetching;
