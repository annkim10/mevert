import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import Modal from "../components/modal/modal"
import "./app.css"

import SplashPage from "./splash/spash_page"
// import LoginContainer from "./session/login_container"
// import SignupContainer from "./session/signup_container"
import NavbarContainer from "./navbar/navbar_container"
import QuizFormContainer from './quiz/quiz_container';
import QuizResultsContainer from './quiz/quiz_results_container';
import ActivityContainer from './activity/activity_container';
import ActivityShowContainer from "./activity/activity_show_container"

import ProfileContainer from './user_profile/profile';
import ReviewContainer from "./review/review_container"
import EditReviewContainer from "./review/edit_review_container"
import UserActivityContainer from "./user_activity/user_activity_container"


const App = () => (
    <div className='app-div'>
        <Modal />
        <NavbarContainer />
        <Switch>
            <Route exact path="/" component={SplashPage} />
            {/* <AuthRoute exact path="/login" component={LoginContainer} />
            <AuthRoute exact path="/signup" component={SignupContainer} /> */}
            <ProtectedRoute exact path="/quiz" component={QuizFormContainer} />
            <ProtectedRoute exact path="/quiz/results" component={QuizResultsContainer} />
            <ProtectedRoute exact path="/activities" component={ActivityContainer} />
            <ProtectedRoute exact path="/activities/:activityId" component={ActivityShowContainer} />
            <ProtectedRoute exact path="/activities/:activityId/review/:reviewId" component={EditReviewContainer} />
            <ProtectedRoute exact path="/activities/:activityId/review" component={ReviewContainer} />
            <ProtectedRoute exact path='/users/:userId/activities' component={UserActivityContainer} />
            <ProtectedRoute exact path='/users/:userId' component={ProfileContainer} />
        </Switch>
        
    </div>
);

export default App;