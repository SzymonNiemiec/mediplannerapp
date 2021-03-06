import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';
import DoctorCalendar from './DoctorCalendar';
import * as routes from '../constants/routes';
//import { firebase } from '../firebase';
import withAuthentication from './withAuthentication';
const App = () =>
  <Router>
    <div className="app__container">
      <Navigation />
      <Route exact path={routes.LANDING} component={() => <LandingPage />} />
      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
      <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
      <Route exact path={routes.HOME} component={() => <HomePage />} />
      <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
      <Route exact path={`${routes.HOME}/:doctorId`} component={(props) => <DoctorCalendar {...props} />} />
    </div>
  </Router>

  
export default withAuthentication(App);
