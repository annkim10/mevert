import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';

import SplashPage from "./splash/spash_page"
import LoginContainer from "./session/login_container"
import SignupContainer from "./session/signup_container"
import NavbarContainer from "./navbar/navbar_container"

const App = () => (
    <div>
        <NavbarContainer />
        <Switch>
            <Route exact path="/" component={SplashPage} />
            <AuthRoute exact path="/login" component={LoginContainer} />
            <AuthRoute exact path="/signup" component={SignupContainer} />
        </Switch>
    </div>
);

export default App;