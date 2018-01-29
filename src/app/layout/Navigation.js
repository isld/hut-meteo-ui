import React from 'react';
import Icon from 'material-ui/Icon';
import BottomNavigation, {BottomNavigationAction} from 'material-ui/BottomNavigation';
import {withRouter} from 'react-router-dom';

class Navigation extends React.Component {
    constructor() {
        super();

        this.state = {
            currentItem: '/'
        };

        this.pageTabs = [
            {
                key: '0',
                label: 'Weather',
                showLabel: true,
                icon: <Icon className="material-icons">wb_sunny</Icon>,
                value: '/'
            }, {
                key: '1',
                label: 'Statistics',
                showLabel: true,
                icon: <Icon className="material-icons">assessment</Icon>,
                value: '/stats'
            }, {
                key: '2',
                label: 'Camera',
                showLabel: true,
                icon: <Icon className="material-icons">videocam</Icon>,
                value: '/camera'
            }, {
                key: '3',
                label: 'Map',
                showLabel: true,
                icon: <Icon className="material-icons">terrain</Icon>,
                value: 'map'
            }
        ];

        this.handleChange = this.handleChange.bind( this );
    }

    handleChange = (event, value) => {
        this.setState({ currentItem: value }, () => this.props.history.push( value ));
    };

    render() {
        return <BottomNavigation value={this.state.currentItem} onChange={this.handleChange} showLabels>
            {this.pageTabs.map(function(tab) { return <BottomNavigationAction {...tab} />; })}
        </BottomNavigation>;
    }
}

export default withRouter(Navigation);