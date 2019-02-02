import React from 'react';
import DailyDetail from '../DailyDetail';
import Daily from '../Daily';
import {Link} from 'react-router-dom';
import {Fragment} from 'react';

class Detail extends React.Component {
    render() {
        return (
            <Fragment>
            <DailyDetail />
            <Daily />
            <Link to='/'> BACK
            </Link>
            </Fragment>
        )}
}

export default Detail;