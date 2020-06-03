import React from 'react';
import '../Styling/Login.css';
import firebase, { database } from '../firebase.js';
import 'firebase/auth';


import { auth, googleProvider } from "../firebase"

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    setActiveUser = (user) => {
        this.setState({ activeUser: user })
    }

    handleGoogleLogin = () => {
        auth.signInWithPopup(googleProvider);
        auth.getRedirectResult().then(result => {
            // idk what to do with this
        }).catch(error => {
            console.log(error);
        })

        this.props.loadUserData()
        if (this.props.referrer != null) {
            this.creditReferrer()
        }
    }

    creditReferrer = () => {
        const id = this.props.referrer;

        database.ref(`userData/${id}`).once("value", snapshot => {
            if (snapshot && snapshot.exists()) {
                console.log(snapshot)
            }
        })
    }


    handleLogout = () => {
        console.log("logging out")
        this.setState({ isLoggedIn: false, activeUser: null })
        auth.signOut()
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {
                        this.state.isLoggedIn
                            ? <p>Hello, "NAME""</p>
                            : <p>Please sign in.</p>
                    }
                    {
                        this.state.isLoggedIn
                            ? <button onClick={this.handleLogout} >Sign out</button>
                            : <button onClick={this.handleGoogleLogin}>Sign in with Google</button>
                    }
                    <button onClick={this.creditReferrer}>test</button>
                </header>
            </div>
        )
    }
}
