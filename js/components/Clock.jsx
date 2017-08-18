import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/App.css';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    componentWillMount() {
        this.getTimeUntil(this.props.deadline);
    }

    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
    }

    leading0(num) {

        return num < 10 && num >= 0
            ? '0' + num
            : num;

    }

    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / 1000 / 60) % 60);
        const hours = Math.floor(time / (1000 * 60 * 60) % 24);
        const days = Math.floor(time / (1000 * 60 * 60 * 24));

        this.setState({days, hours, minutes, seconds});

    }

    render() {

        return (

            <div>
                <div className="Clock-days"><span>{this.leading0(this.state.days)} </span>
                    days</div>
                <div className="Clock-hours"><span>{this.leading0(this.state.hours)} </span>
                     hours</div>
                <div className="Clock-minutes"><span>{this.leading0(this.state.minutes)} </span>
                     minutes</div>
                <div className="Clock-seconds"><span>{this.leading0(this.state.seconds)} </span>
                    seconds</div>
            </div>

        )

    }
}

export default Clock;
