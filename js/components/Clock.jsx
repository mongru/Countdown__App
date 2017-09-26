import React from 'react';
import ReactDOM from 'react-dom';

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
        const { days, hours, minutes, seconds } = this.state;
        return (
            <div>
                <div className="Clock-days"><span>{this.leading0(days)} </span>
                    days</div>
                <div className="Clock-hours"><span>{this.leading0(hours)} </span>
                     hours</div>
                <div className="Clock-minutes"><span>{this.leading0(minutes)} </span>
                     minutes</div>
                <div className="Clock-seconds"><span>{this.leading0(seconds)} </span>
                    seconds</div>
            </div>
        );
    }
}

export default Clock;
