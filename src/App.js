import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'

import './App.css';
import NotFound from './components/utils/NotFound'

import LandingPage from './pages/LandingPage';

const App = ({ history }) => {
  window.appHistory = history
  return (
    <div>
      <Switch>
        <Route exact path="/not_found" component={NotFound} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </div>
  )
}

export default withRouter(App)