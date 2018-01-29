import React from 'react';
import Temperature from '../components/indicators/Temperature';
import Humidity from '../components/indicators/Humidity';
import Grid from 'material-ui/Grid';
import Chart from "../components/Chart";
import { withStyles } from "material-ui/styles";

const styles = theme => ({
    root: {
        height: '100%',
        flexGrow: 1,
        // marginTop: 30,
    },
    gridContainer: {
        height: '100%'
    },
    gridItem: {
        minHeight: '15vh',
        height: '24vh'
    },
    chartContainer: {
        height: '48vh'
    }
});

class Dashboard extends React.Component {
    render() {
        const { classes } = this.props;

        return <div className={classes.root}>
            <Grid container className={classes.gridContainer} justify="flex-start">
                <Grid item className={classes.gridItem} xs={12} sm={6} md={3}>
                    <Temperature value={26} key="temperature" />
                </Grid>
                <Grid item className={classes.gridItem} xs={12} sm={6} md={3}>
                    <Humidity value={46} key="humidity" />
                </Grid>
                <Grid item className={classes.gridItem} xs={12} sm={6} md={3}>
                    <Temperature value={26} key="temperature" />
                </Grid>
                <Grid item className={classes.gridItem} xs={12} sm={6} md={3}>
                    <Humidity value={46} key="humidity" />
                </Grid>
                <Grid item className={classes.chartContainer} xs={12}>
                    <Chart />
                </Grid>
            </Grid>
        </div>;
    }
}

export default withStyles(styles)(Dashboard);