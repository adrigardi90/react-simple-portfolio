import * as React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import { HomeRoute, ProjectsRoute, PostsRoute} from './routes'
import history from './history'
import { HomeContainer, ProjectsContainer, PostsContainer } from './App/scenes'
import { MyApp } from './App/App';

export const RouterComponent = () => (
    <Router history={history}>
        <MyApp>
            <Switch>
                <Route exact path={HomeRoute.path} component={HomeContainer} />
                <Route path={ProjectsRoute.path} component={ProjectsContainer} />
                <Route path={PostsRoute.path} component={PostsContainer} />
                <Redirect to={HomeRoute.path} />
            </Switch>
        </MyApp>
    </Router>
)