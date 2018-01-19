/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppBar, BottomNavigation, BottomNavigationItem, FontIcon, Paper} from "material-ui";
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const styles = {
  container: {
    // textAlign: 'center',
    // paddingTop: 200,
  },
  paper: {
      margin: '2vw',
      padding: '1em',
      textAlign: 'center',
      display: 'inline-block',
  }
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

const pageTabs = [
    {
      key: '0',
      label: 'Weather',
      icon: <FontIcon className="material-icons">wb_sunny</FontIcon>
    }, {
      key: '1',
      label: 'Statistics',
      icon: <FontIcon className="material-icons">assessment</FontIcon>
    }, {
      key: '2',
      label: 'Camera',
      icon: <FontIcon className="material-icons">videocam</FontIcon>
    }, {
      key: '3',
      label: 'Map',
      icon: <FontIcon className="material-icons">terrain</FontIcon>
    }
];


class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      drawerOpen: false,
      selectedIndex: 0
    };
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  };

  handleToggle = () => this.setState({drawerOpen: !this.state.open});

  handleClose = () => this.setState({drawerOpen: false});

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <div className="layoutHeader" >
            <AppBar
                showMenuIconButton={false}
                title={"х. Червената шапчица"}
                onLeftIconButtonClick={this.handleToggle}
            />
          </div>
          <div className="layoutContent">
            <Paper style={Object.assign({}, styles.paper, {fontSize: '50pt', backgroundColor: 'lightgreen'})}>
              26&deg;
            </Paper>
            <Paper style={Object.assign({}, styles.paper, {fontSize: '50pt', backgroundColor: 'lightblue'})}>
              44%
            </Paper>
          </div>
          <div className="layoutFooter" style={{position: 'fixed', bottom: 0, width: '100%'}}>
            <BottomNavigation selectedIndex={this.state.selectedIndex}>
              {pageTabs.map(function(tab) { return <BottomNavigationItem
                  {...tab}
                  onClick={() => this.openPage(tab.key)}
              />; })}
            </BottomNavigation>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
