import React from 'react';
import '../Styling/Login.css';

import firebase, { auth, googleProvider } from "../firebase"


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeUser: null, // UID of current user
            isLoggedIn: false
        }
    }

    componentDidMount() {
        this.loadUserData(); // run in case user is logged in, but page refreshed
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

        this.loadUserData()
    }

    loadUserData = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                console.log(user)
                this.setState({ activeUser: user.uid, isLoggedIn: true })
            } else {
                // console.log("no user")
            }
        });
    }

    handleLogout = () => {
        console.log("logging out")
        this.setState({ isLoggedIn: false, activeUser: null })
        auth.signOut()
    }
    test = () => {
        console.log(this.state.activeUser)
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {
                        this.props.isLoggedIn
                            ? <p>Hello, "NAME""</p>
                            : <p>Please sign in.</p>
                    }
                    {
                        this.props.isLoggedIn
                            ? <button onClick={this.handleLogout} >Sign out</button>
                            : <button onClick={this.handleGoogleLogin}>Sign in with Google</button>
                    }
                </header>
            </div>
        )
    }
}
