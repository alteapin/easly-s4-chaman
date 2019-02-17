import React from 'react';
import HourData from '../HourData';
import HeadBoard from '../HeadBoard';
import Moment from 'moment';
import './DailyDetail.scss';




class DailyDetail extends React.Component {

    paintDate(){
        let objDate = this.props.activeDay.dt;
        return Moment(objDate*1000).format('MMM DD YYYY');
      //  (hh)
    }

    render() {
        const {todayInfo, animation} = this.props;

        if(todayInfo.length === 0) {
            return(
                <p>Buscando resultados</p>
            )
        } else {
        return (
            <div className={`infoDaily-Detail ${animation}`}>
                <h3 className='title-detail'> {this.paintDate()}</h3>
                <table className="dailyDetail__table">
                    <HeadBoard />
                    <tbody>
                         {todayInfo.map((result, key) => {

                            return(
                               <HourData key={key} hour={result.dt_txt} wind={result.wind.speed} windDirection={result.wind.deg}
                               temp={result.main.temp} rain={result.weather[0].description}
                               rainPercent={result.rain||0}/>
                            )


                        })}

                    </tbody>
                </table>
            </div>



        )
    }}
}

export default DailyDetail;




