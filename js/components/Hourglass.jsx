import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/App.css';

class Hourglass extends React.Component {
    render() {
        return (
            <div className="loader">
                <div className="top"></div>
                <div className="bottom"></div>
                <div className="line"></div>
            </div>
        )
    }
}

export default Hourglass;
