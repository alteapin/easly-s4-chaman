import React from 'react';
import Header from '../Header';
import Daily from '../Daily';
import sun from '../../images/sundark.png';

class Main extends React.Component {
    render() {
        const BgImage = {
            backgroundImage: `url(${sun})`
        };
        return (
            <div style={BgImage} className="bg-image">
                <Header />
                <Daily />
            </div>
        )
    }
}
export default Main;