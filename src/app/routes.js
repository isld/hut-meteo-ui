import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './containers/Dashboard';

const RouteWithSubRoutes = (route) => (
    <Route path={route.path} render={props => (
        // pass the sub-routes down to keep nesting
        // only if route is not '/', otherwise all other routes are considered sub-routes
       <route.component {...props} routes={ route.path === '/' ? null : route.routes}/>
    )}/>
);

const routes = [
    {
        path: '/',
        component: Dashboard,
        exact: true
    }, {
        path: '/stats',
        component: Dashboard
    }, {
        path: '/camera',
        component: Dashboard
    }, {
        path: '/map',
        component: Dashboard
    }
];

export default routes;
export { RouteWithSubRoutes };