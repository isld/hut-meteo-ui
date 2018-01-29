import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import moment from 'moment';
import Navigation from './Navigation';
import Header from './Header';

const styles = theme => ({
    container: {
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch'
    },
    header: {},
    content: {
        width: 'calc(100% - 48px)',
        height: 'calc(100% - 168px)',
        padding: '24px'
    },
    footer: {
        position: 'fixed',
        bottom: 0,
        width: '100%'
    }
});

const theme = createMuiTheme({
    palette: {
        primary: {
            light: purple[300],
            main: purple[500],
            dark: purple[700],
        },
        secondary: {
            light: green[300],
            main: green[500],
            dark: green[700],
        },
    },
});

// Expose the theme as a global variable so people can play with it.
if (process.browser) {
    window.theme = theme;
}

function Main(props) {
  const { classes, children } = props;

  return (
      <MuiThemeProvider theme={theme}>
          <div className={classes.container}>
              <div className={classes.header}>
                  <Header title="х. Червената шапчица" time={moment().format('')}/>
              </div>
              <div className={classes.content}>
                  {children}
              </div>
              <div className={classes.footer}>
                  <Navigation/>
              </div>
          </div>
      </MuiThemeProvider>
  );
}

Main.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);
