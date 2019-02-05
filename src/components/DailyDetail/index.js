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
            <tbody>
                <HeadBoard />
                <HourData hour={8} />
                <HourData hour={10} />
                <HourData hour={12} />
                <HourData hour={14} />
                <HourData hour={16} />
                <HourData hour={18} />
                <HourData hour={20} />
                <HourData hour={22} />
                <HourData hour={24} />
                <HourData hour={2} />
                <HourData hour={4} />
                <HourData hour={6} />
            </tbody>
            </table>
            </div>



        )
    }
}

export default DailyDetail;
