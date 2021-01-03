import React from 'react';
import { Link, Route } from "react-router-dom";
import Breadcrumbs from 'react-router-dynamic-breadcrumbs';

const AppBreadCrumbs = () => {
    const routesList = {
        '/': '',
        '/user': 'User',
        '/Media': 'Media',
        '/user/index': 'User',
     }
    return (
        <div>
            <Route>
                <Breadcrumbs mappedRoutes={routesList}
                WrapperComponent={(props) =>
                    <ol className="breadcrumb">{props.children}</ol>}
                ActiveLinkComponent={(props) =>
                    <li className="breadcrumb-item active" >{props.children}</li>}
                LinkComponent={(props) =>
                    <li className="breadcrumb-item">{props.children}</li>
                } />
            </Route>
        </div>
    )
}

export default AppBreadCrumbs
