import React from 'react';
import './App.css';
import NavPanel from './Components/NavPanel.js';
import Progress from './Components/Progress.js';
import AboutPage from './Components/AboutPage.js';
import HomePage from "./Components/HomePage"
import Login from "./Components/Login"
import ReferralLanding from "./Components/ReferralLanding"
import Refer from './Components/Refer.js';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { sampleData } from "./data"

import firebase, { database } from "./firebase"

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUser: null, // UID of current user
      isLoggedIn: false,
      allUsers: null
    }
  }

  componentDidMount() {
    // run in case user is logged in, but page refreshed
    // kinda duplicate of in login, might change later
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // console.log(user)
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

  setActiveUser = userID => this.setState({ activeUser: userID, isLoggedIn: userID != null })

  resetFirebase = () => {
    Object.keys(sampleData).map(id => {
      database.ref(`userData/${id}`).set(sampleData[id])
    })
  }

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
            <Route exact path="/home" render={(props) =>
              <HomePage {...props}
                activeUser={this.state.activeUser} />} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/login" render={(props) =>
              <Login {...props}
                setActiveUser={this.setActiveUser}
                isLoggedIn={this.state.isLoggedIn}
                referrer={null} />} />
            {this.state.allUsers != null ? this.state.allUsers.map(id => {
              return <Route exact path={`/ref/${id}`} render={(props) =>
                <ReferralLanding {...props}
                  id={id}
                  setActiveUser={this.setActiveUser} />} />
            }) : ""}
          </Switch>
        </Router> */}


        {/* <button onClick={this.handleGoogleLogin}>Log in w/ google</button> */}
        <button onClick={this.loadUserData}>Print user</button>
        {/* <button onClick={()=>auth.signOut()}>Sign out</button> */}
        {/* <button onClick={this.test}>TEST</button> */}
        <button onClick={this.resetFirebase}>reset firebase</button>
      </div>

    )
  }
}

export default App;
