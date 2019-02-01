import React from 'react';
import HourData from '../HourData';



class DailyDetail extends React.Component {
    
    
    render()
    
                {
        return(
            <table>
                <tr>
                    <th>Hours</th>
                    <th>Temperature</th>
                    <th>Rain %</th>
                    <th>Wind</th>
                </tr>
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