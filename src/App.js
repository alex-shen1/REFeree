import React from 'react';
import './App.css';
import NavPanel from './Components/NavPanel.js';
import Progress from './Components/Progress.js';
import FAQ from './Components/FAQ.js';
import HomePage from "./Components/HomePage"
import Login from "./Components/Login"

import Refer from './Components/Refer.js';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";


import firebase, { auth, googleProvider } from "./firebase"

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // activeUser: null, // UID of current user
      // isLoggedIn: false
    }
  }

  // componentDidMount() {
  //   this.loadUserData(); // run in case user is logged in, but page refreshed
  // }
  // setActiveUser = (user) => {
  //   this.setState({ activeUser: user })
  // }

  // handleGoogleLogin = () => {
  //   auth.signInWithPopup(googleProvider);
  //   auth.getRedirectResult().then(result => {
  //     // idk what to do with this
  //   }).catch(error => {
  //     console.log(error);
  //   })

  //   this.loadUserData()
  //   console.log(this.state)
  // }

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

  // handleLogout = () => {
  //   console.log("logging out")
  //   this.setState({ isLoggedIn: false, activeUser: null })
  //   auth.signOut()
  // }
  // test = () => {
  //   console.log(this.state.activeUser)
  // }

  render() {

    return (
      <div className="app">
        {/* <Router>
          <Switch>
            <Route exact path="/" render={props => {
              console.log(this)
              console.log(this.state)
              console.log(this.state.isLoggedIn)
              console.log(props);
              return this.state.isLoggedIn ?
                <Redirect to='/home' /> :
                <Redirect to='/login' />
            }} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/FAQ" component={FAQ} />
            <Route exact path="/login" render={(props) =>
              <Login {...props}
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

      </div>

    )
  }
}

export default App;
