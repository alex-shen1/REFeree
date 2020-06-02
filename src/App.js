import React from 'react';
import './App.css';
import NavPanel from './Components/NavPanel.js';
import Progress from './Components/Progress.js';
import FAQ from './Components/FAQ.js';
import HomePage from "./Components/HomePage"
import Login from "./Components/Login"

import Refer from './Components/Refer.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUser: null // UID of current user
    }
  }

  setActiveUser = (user) => {
    this.setState({ activeUser: user })
  }

  render() {

    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/" render={() => {
              return (
                this.state.activeUser ?
                  <Redirect to='/home' /> :
                  <Redirect to='/login' />
              )
            }} />
            <Rooute exact path="/home" component={HomePage} />
            <Route exact path="/FAQ" component={FAQ} />
            <Route exact path="/login" render={Login} />} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
