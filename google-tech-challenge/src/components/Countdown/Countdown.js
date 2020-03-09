import React from 'react';
import moment from 'moment';
import './Countdown.css';


var monthsColor = {
    color:"#59FF31"
}

var daysColor = {
    color:"#3F3F3F"
}

var hoursColor = {
    color:"#59FF31"
}

var minutesColor = {
    color:"#3F3F3F"
}

var secondsColor = {
    color:"#59FF31"
}

class Countdown extends React.Component {
    state = {
        months: undefined,
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            const { timeTillDate, timeFormat } = this.props;
            const then = moment(timeTillDate, timeFormat);
            const now = moment();
            const countdown = moment(then - now);
            const months = countdown.format('M');
            const days = countdown.format('D');
            const hours = countdown.format('HH');
            const minutes = countdown.format('mm');
            const seconds = countdown.format('ss');

            this.setState({ months, days, hours, minutes, seconds });
        }, 1000);
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    render() {
        const { months, days, hours, minutes, seconds } = this.state;


        if (!seconds) {
            return null;
        }

        return (
            <div>
                <div className="countdown-wrapper">
                    {months && (
                        <div className="countdown-item" style={monthsColor}>
                            {months}
                            <span style={monthsColor}>months</span>
                        </div>
                    )}
                    {days && (
                        <div className="countdown-item" style={daysColor}>
                            {days}
                            <span style={daysColor}>days</span>
                        </div>
                    )}
                    {hours && (
                        <div className="countdown-item" style={hoursColor}>
                            {hours}
                            <span style={hoursColor}>hours</span>
                        </div>
                    )}
                    {minutes && (
                        <div className="countdown-item" style={minutesColor}>
                            {minutes}
                            <span style={minutesColor}>minutes</span>
                        </div>
                    )}
                    {seconds && (
                        <div className="countdown-item" style={secondsColor}>
                            {seconds}
                            <span style={secondsColor}>seconds</span>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}


export default Countdown