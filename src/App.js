import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'

import './App.css';
import NotFound from './components/utils/NotFound'

import AuthPage from './pages/AuthPage';
import LandingPage from './pages/LandingPage';

class App extends Component {
  render() {
    window.appHistory = this.props.history
    return (
      <div>
        This is App Page
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/signin" component={AuthPage} />

          <Route exact path="/not_found" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)