import React from 'react';
import HourData from '../HourData';
import HeadBoard from '../HeadBoard';
import './DailyDetail.scss';
import {Fragment} from 'react';
import {Link } from 'react-router-dom';
import BackBtn from '../BackBtn';



class DailyDetail extends React.Component {

    render() {
        return (
<div className='infoDaily-Detail'>

            <table className="dailyDetail__table">
                <HeadBoard />
                <tbody>
                <HourData hour={'6 - 9'} />
                <HourData hour={'9 - 12'} />
                <HourData hour={'12 - 15'} />
                <HourData hour={'15 - 18'} />
                <HourData hour={'18 - 21'} />
                <HourData hour={'21 - 00'} />
                <HourData hour={'00 - 3'} />
                <HourData hour={'3 - 6'} />
                </tbody>
            </table>
            </div>



        )
    }
}

export default DailyDetail;
