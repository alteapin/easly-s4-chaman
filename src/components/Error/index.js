import React from 'react';
import './Error.scss';

class Error extends React.Component {
    render() {
        return (
            <div className='error__div'>
                <h3 className='error__title'>Nobody is perfect:</h3>
                <p className='error_clasic'>Sorry, but an error has occurred.</p>
                <p className='error_joke'>You can always go outside to see the weather</p>
            </div>
        )
    }
}

export default Error;
