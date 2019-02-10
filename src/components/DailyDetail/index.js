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
                         {todayInfo.map((result, key) => {

                            return(
                               <HourData key={key} hour={result.dt_txt} wind={result.wind.speed}
                               temp={result.main.temp} rain={result.weather[0].description}/>
                            )


                        })}

                    </tbody>
                </table>
            </div>



        )
    }}
}

export default DailyDetail;




