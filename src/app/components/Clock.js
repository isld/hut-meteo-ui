import React from 'react';
import Typography from 'material-ui/Typography';
import moment from 'moment';
import Hidden from 'material-ui/Hidden';

export default class Clock extends React.Component {
    componentDidMount() {
        this.intervalId = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    tick() {
        const {onTick} = this.props;
        onTick(new Date());
    }

    render() {
        const {dateTime} = this.props;

        const dateTimeMoment = moment(dateTime);

        return <Typography type="title" color="inherit">
            <Hidden smUp>{dateTimeMoment.format('HH:mm:ss')}</Hidden>
            <Hidden xsDown mdUp>{dateTimeMoment.format('HH:mm:ss, DD.MM.YYYY')}</Hidden>
            <Hidden smDown lgUp>{dateTimeMoment.format('HH:mm:ss, dddd, DD.MM.YYYY')}</Hidden>
            <Hidden mdDown>{dateTimeMoment.format('HH:mm:ss, dddd, MMMM Do YYYY')}</Hidden>
        </Typography>;
    }
}