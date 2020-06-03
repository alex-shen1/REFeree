import React from 'react';
import '../Styling/Login.css';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import firebase from '../firebase.js';
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
                            ? <Card bg="secondary" text="light" style={{ margin: "0 auto", width: "10vw", height: "5vh", marginTop: "3vh", marginBottom: "3vh", float: "none" }}>Hello, "NAME"</Card>
                            : <Card bg="secondary" text="light" style={{ margin: "0 auto", width: "10vw", height: "5vh", marginTop: "3vh", marginBottom: "3vh", float: "none" }}>Please sign in.</Card>
                    }
                    {
                        this.state.isLoggedIn
                            ? <Button variant="outline-info" onClick={this.handleLogout} >Sign out</Button>
                            : <Button variant="outline-info" onClick={this.handleGoogleLogin}>Sign in with Google</Button>
                    }
                </header>
            </div>
        )
    }
}
