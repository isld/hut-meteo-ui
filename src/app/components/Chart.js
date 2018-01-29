import React from 'react';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import { GridListTileBar } from 'material-ui/GridList'
import { withStyles } from "material-ui/styles";

const styles = theme => ({
    paper: {
        position: 'relative',
        fontSize: '50pt',
        backgroundColor: 'rgba(48, 127, 255, 0.5)',
        height: '100%',
        lineHeight: '15vh',
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginBottom: '24px'
    }
});

const Chart = props => {
    const { classes } = props;

    return <Paper className={classes.paper}>
        test
    </Paper>;
};

Chart.propTypes = {
    value: PropTypes.number.isRequired
};

export default withStyles(styles)(Chart);