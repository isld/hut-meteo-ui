import React from 'react';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import { GridListTileBar } from 'material-ui/GridList'
import { withStyles } from "material-ui/styles";

const styles = theme => ({
    paper: {
        position: 'relative',
        fontSize: '50pt',
        backgroundColor: 'rgba(127, 255, 48, 0.5)',
        height: '100%',
        lineHeight: '15vh',
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginBottom: '24px'
    }
});

const Humidity = props => {
    const { classes } = props;

    return <Paper className={classes.paper}>
        {props.value}%
        <GridListTileBar title={'Външна влажност'}/>
    </Paper>;
};

Humidity.propTypes = {
    value: PropTypes.number.isRequired
};

export default withStyles(styles)(Humidity);