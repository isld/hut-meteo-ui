import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import ClockContainer from "../containers/ClockContainer";

const Header = (props) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography type="title" color="inherit" style={{ flex: 1 }}>
                    {props.title}
                </Typography>
                <ClockContainer/>
            </Toolbar>
        </AppBar>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    time: PropTypes.string
};

export default Header;
