import React from 'react';
import HourData from '../HourData';
import HeadBoard from '../HeadBoard';
import './DailyDetail.scss';




class DailyDetail extends React.Component {

    render() {
        const {todayInfo} = this.props;
        console.log('daily props', todayInfo);
        return (
            <div className='infoDaily-Detail snow-daily'>
                <h3 className='title-detail'>Detailed information:<span className='table_title-day'> 6 Feb</span></h3>
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
