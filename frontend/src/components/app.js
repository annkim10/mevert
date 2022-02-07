import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import "./app.css"

import SplashPage from "./splash/spash_page"
import LoginContainer from "./session/login_container"
import SignupContainer from "./session/signup_container"
import NavbarContainer from "./navbar/navbar_container"
import QuizContainer from './quiz/quiz_container';

const App = () => (
    <div className='app-div'>
        <NavbarContainer />
        <Switch>
            <Route exact path="/" component={SplashPage} />
            <AuthRoute exact path="/login" component={LoginContainer} />
            <AuthRoute exact path="/signup" component={SignupContainer} />
            <AuthRoute exact path="/quiz" component={QuizContainer} />
        </Switch>
    </div>
);

export default App;