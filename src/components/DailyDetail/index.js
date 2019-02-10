import React from 'react';
import HourData from '../HourData';
import HeadBoard from '../HeadBoard';
import './DailyDetail.scss';




class DailyDetail extends React.Component {

    render() {
        const {todayInfo} = this.props;
        console.log('daily props', todayInfo);
        if(todayInfo.length === 0) {
            return(
                <p>Buscando resultados</p>
            )
        } else {
        return (
            <div className='infoDaily-Detail snow-daily'>
                <h3 className='title-detail'>Detailed information:<span className='table_title-day'> 6 Feb</span></h3>
                <table className="dailyDetail__table">
                    <HeadBoard />
                    <tbody>
                         {todayInfo.map(result => {

                            return(
                                <h1>{result.dt_txt}</h1>
                            )


                        })}

                    </tbody>
                </table>
            </div>



        )
    }}
}

export default DailyDetail;




