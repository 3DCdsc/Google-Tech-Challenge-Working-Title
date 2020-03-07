import React from 'react';
import moment from 'moment';
import './countdown.css';


var monthsColor = {
    color:"#CF6679"
}

var daysColor = {
    color:"#4ACFAC"
}

var hoursColor = {
    color:"#7E8CE0"
}

var minutesColor = {
    color:"#36C7D0"
}

var secondsColor = {
    color:"#FFA48E"
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

        // Mapping the date values to radius values
        const monthsRadius = mapNumber(months,12,0,0,360);
        const daysRadius = mapNumber(days, 30, 0, 0, 360);
        const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
        const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
        const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

        if (!seconds) {
            return null;
        }

        return (
            <div>
                <div className="countdown-wrapper">
                    {months && (
                        <div className="countdown-item" style={monthsColor}>
                            <SVGCircleMonths radius={monthsRadius} />
                            {months}
                            <span style={monthsColor}>months</span>
                        </div>
                    )}
                    {days && (
                        <div className="countdown-item" style={daysColor}>
                            <SVGCircleDays radius={daysRadius} />
                            {days}
                            <span style={daysColor}>days</span>
                        </div>
                    )}
                    {hours && (
                        <div className="countdown-item" style={hoursColor}>
                            <SVGCircleHours radius={hoursRadius} />
                            {hours}
                            <span style={hoursColor}>hours</span>
                        </div>
                    )}
                    {minutes && (
                        <div className="countdown-item" style={minutesColor}>
                            <SVGCircleMinutes radius={minutesRadius} />
                            {minutes}
                            <span style={minutesColor}>minutes</span>
                        </div>
                    )}
                    {seconds && (
                        <div className="countdown-item" style={secondsColor}>
                            <SVGCircleSeconds radius={secondsRadius} />
                            {seconds}
                            <span style={secondsColor}>seconds</span>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

const SVGCircleMonths = ({ radius }) => (
    <svg className="countdown-svg">
        <path
            fill="none"
            stroke="#CF6679"
            stroke-width="4"
            d={describeArc(50, 50, 48, 0, radius)}
        />
    </svg>
);

const SVGCircleDays = ({ radius }) => (
    <svg className="countdown-svg">
        <path
            fill="none"
            stroke="#4ACFAC"
            stroke-width="4"
            d={describeArc(50, 50, 48, 0, radius)}
        />
    </svg>
);

const SVGCircleHours = ({ radius }) => (
    <svg className="countdown-svg">
        <path
            fill="none"
            stroke="#7E8CE0"
            stroke-width="4"
            d={describeArc(50, 50, 48, 0, radius)}
        />
    </svg>
);

const SVGCircleMinutes = ({ radius }) => (
    <svg className="countdown-svg">
        <path
            fill="none"
            stroke="#36C7D0"
            stroke-width="4"
            d={describeArc(50, 50, 48, 0, radius)}
        />
    </svg>
);

const SVGCircleSeconds = ({ radius }) => (
    <svg className="countdown-svg">
        <path
            fill="none"
            stroke="#FFA48E"
            stroke-width="4"
            d={describeArc(50, 50, 48, 0, radius)}
        />
    </svg>
);

// From StackOverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians)
    };
}

function describeArc(x, y, radius, startAngle, endAngle) {
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

    var d = [
        'M',
        start.x,
        start.y,
        'A',
        radius,
        radius,
        0,
        largeArcFlag,
        0,
        end.x,
        end.y
    ].join(' ');

    return d;
}

// From StackOverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function mapNumber(number, in_min, in_max, out_min, out_max) {
    return (
        ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
}


export default Countdown