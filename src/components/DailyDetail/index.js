import React from 'react';
import HourData from '../HourData';
import HeadBoard from '../HeadBoard';
import './DailyDetail.scss';



class DailyDetail extends React.Component {

    render() {
        return (

            <table className="dailyDetail__table">
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
            </table>



        )
    }
}

export default DailyDetail;
