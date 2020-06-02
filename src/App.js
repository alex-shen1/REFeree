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
      loggedIn: false
    }
  }

  render() {

    return (
      <Router>
        <div className="app">
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/FAQ" component={FAQ} />
            <Route path="/login" component={Login} />
            {/* <Route path="/login" render={(props) => <Login {...props} test="test" />} /> */}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
