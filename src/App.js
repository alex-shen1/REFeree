import React from 'react';
import './App.css';
import NavPanel from './Components/NavPanel.js';
import Progress from './Components/Progress.js';
import AboutPage from './Components/AboutPage.js';
import HomePage from "./Components/HomePage"
import Login from "./Components/Login"

import Refer from './Components/Refer.js';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";


import firebase from "./firebase"

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // activeUser: null, // UID of current user
      // isLoggedIn: false
    }
  }

  componentDidMount() {
    this.loadUserData(); // run in case user is logged in, but page refreshed
  }

  // loadUserData = () => {
  //   firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       console.log(user)
  //       this.setState({ activeUser: user.uid, isLoggedIn: true })
  //     } else {
  //       console.log("no user")
  //     }
  //   });
  // }

  test = () => {
    console.log(this.state.activeUser)
  }

  render() {

    return (
      <div className="app">
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/" render={props => {
              return <Redirect to='/home' />
              // console.log(this)
              // console.log(this.state)
              // console.log(this.state.isLoggedIn)
              // console.log(props);
              // return this.state.isLoggedIn ?
              //   <Redirect to='/home' /> :
              //   <Redirect to='/login' />
            }} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/login" render={(props) =>
              <Login {...props}
                loadUserData={this.loadUserData}
                handleGoogleLogin={this.handleGoogleLogin}
                isLoggedIn={this.state.isLoggedIn}
                handleLogout={this.handleLogout} />} />
          </Switch>
        </Router> */}

        {/* <Login />
        <HomePage /> */}

        <Router>
          <Switch>
            <Route path='/' component={Login} />
            <Route path='/home' component={HomePage} />
          </Switch>
        </Router>

        {/* <button onClick={this.handleGoogleLogin}>Log in w/ google</button> */}
        <button onClick={this.loadUserData}>Print user</button>
        {/* <button onClick={()=>auth.signOut()}>Sign out</button> */}
        {/* <button onClick={this.test}>TEST</button> */}
      </div>

    )
  }
}

export default App;
