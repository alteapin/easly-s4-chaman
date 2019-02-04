import React, { Component } from 'react';
import './Footer.scss';
import accenture from '../../icons/accenture.png'

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <a target="blank" href="https://www.accenture.com/es-es/service-liquid-squad-accenture-digital">
                    <img className="logo-footer" src= {accenture}
                    alt="logo-accenture"/>
                </a>
                <small className="copyright-footer">Copyright</small>
            </div>
                );
            }
        }

export default Footer;
