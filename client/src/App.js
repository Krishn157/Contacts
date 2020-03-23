import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/layout/Navbar';
import Home from './Components/pages/Home';
import About from './Components/pages/About.js';
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/authState';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
import AlertState from './context/alert/alertState';
import Alerts from './Components/layout/Alerts';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './Components/routing/PrivateRoute';
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment className='App'>
              <Navbar />
              <div className='container'>
                <Alerts />
                <Switch>
                  <PrivateRoute exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
