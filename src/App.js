import React from 'react';
import './App.css';
import NavPanel from './Components/NavPanel.js';
import Progress from './Components/Progress.js';
import AboutPage from './Components/AboutPage.js';
import HomePage from "./Components/HomePage"
import Login from "./Components/Login"
import ReferralLanding from "./Components/ReferralLanding"
import Refer from './Components/Refer.js';
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";


import { sampleData } from "./data"

import { auth, database } from "./firebase"


import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUser: null, // UID of current user
      isLoggedIn: false,
      allUsers: null,
    }
  }

  componentDidMount() {
    // run in case user is logged in, but page refreshed
    auth.onAuthStateChanged(user => {
      if (user) {
        console.log(user)
        // this.setState({ activeUser: user.uid, isLoggedIn: true })
        this.setActiveUser(user.uid)
      } else {
        console.log("no user")
      }
    });

    database.ref("userData").on("value", snapshot => {
      if (snapshot && snapshot.exists()) {
        this.setState({ allUsers: Object.keys(snapshot.val()) })
      }
    })
  }
  
  // debugging function; remove later
  resetFirebase = () => {
    Object.keys(sampleData).map(id => {
      database.ref(`userData/${id}`).set(sampleData[id])
    })
  }

  // debugging function; remove later
  printUser = () => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        // id = user.uid
        // this.setState({ activeUser: user.uid })
        console.log(user)
      } else {
        // No user is signed in.
        console.log("no user")
      }
    });
  }

  setActiveUser = userID => this.setState({ activeUser: userID, isLoggedIn: (userID != null) })

  render() {
    // console.log(process.env)
    return (
      <div className="app">
        <Router>
          <Switch>
            {/* default path, redirects to login */}
            <Route exact path="/" render={props => {
              return <Redirect to='/login' />
            }} />

            <Route exact path="/home" render={(props) =>
              <HomePage {...props}
                activeUser={this.state.activeUser}
                isLoggedIn={this.state.isLoggedIn}
                setActiveUser={this.setActiveUser}
              />} />

            <Route exact path="/about" render={(props) =>
              <AboutPage {...props}
                isLoggedIn={this.state.isLoggedIn} />} />

            <Route exact path="/login" render={(props) =>
              <Login {...props}
                loadUserData={this.loadUserData}
                handleGoogleLogin={this.handleGoogleLogin}
                isLoggedIn={this.state.isLoggedIn}
                handleLogout={this.handleLogout}
                referrer={null} />} />

            {/* generates landing pages for referral links */}
            {this.state.allUsers ? this.state.allUsers.map(id => {
              console.log(`creating page for ${id}`)
              return <Route exact path={`/ref/${id}`} render={(props) =>
                <ReferralLanding {...props}
                  isLoggedIn={this.state.isLoggedIn}
                  id={id}
                  setActiveUser={this.setActiveUser} />} />
            }) : ""}
          </Switch>
        </Router>

        {/* <button onClick={this.handleGoogleLogin}>Log in w/ google</button> */}
        <button onClick={this.loadUserData}>Print user</button>
        {/* <button onClick={()=>auth.signOut()}>Sign out</button> */}
      </div>
    )
  }
}

export default App;
