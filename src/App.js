import React from 'react';
import './App.css';
import NavPanel from './Components/NavPanel.js';
import Progress from './Components/Progress.js';
import FAQ from './Components/FAQ.js';
import HomePage from "./Components/HomePage"
import Login from "./Components/Login"

import Refer from './Components/Refer.js';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     activeUser: null // UID of current user
  //   }
  // }

  // setActiveUser = (user) => {
  //   this.setState({ activeUser: user })
  // }



  return (
    <div className="app">
      {/* <Router>
        <Switch>
          <Route path="/" component={} />
          <Route path="/home" component={HomePage} />
          <Route path="/FAQ" component={FAQ} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router> */}
      <NavPanel />
      <Login />
      <HomePage />
      <Progress />
      <Refer />
    </div>
  )

}

export default App;
