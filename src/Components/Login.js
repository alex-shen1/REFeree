import React from 'react';
import '../Styling/Login.css';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import NavBar from "react-bootstrap/NavBar";
import firebase from '../firebase.js';

import { Redirect } from "react-router-dom"

import { auth, googleProvider, database } from "../firebase"

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
        auth.signInWithPopup(googleProvider).then(result => {
            console.log(result)
            let user = result.user;
            this.props.setActiveUser(user.uid)

            // check logged in user
            database.ref("userData").once("value", snapshot => {
                if (snapshot && snapshot.exists()) {
                    let userAlreadyExists = false;

                    // check if user is new
                    Object.keys(snapshot.val()).map(id => {
                        if (user.uid === id) {
                            userAlreadyExists = true;
                            console.log(`${id} exists`)
                        }
                    })

                    // if user is new, then initialize data
                    if (!userAlreadyExists) {
                        let new_user_data = {
                            "name": user.displayName,
                            "referrals": 0,
                            "email": user.email,
                            "created": new Date().toLocaleString('en-US', { timezone: 'UTC-8' })
                        }
                        database.ref(`userData/${user.uid}`).set(new_user_data)

                        if (this.props.referrer != null) {
                            this.creditReferrer()
                        }
                    }
                }
            })
        }).catch(error => console.log(error));
    }

    // accesses referrer's referrals and increments by 1
    creditReferrer = () => {
        const id = this.props.referrer;

        const ref = database.ref(`userData/${id}`)
        ref.once("value", snapshot => {
            if (snapshot && snapshot.exists()) {
                console.log(snapshot.val())
                let referrer = snapshot.val()
                referrer["referrals"]++;
                console.log(referrer)
                ref.set(referrer)
            }
        }).catch(error => console.log(error));
    }

    // accesses referrer's referrals and increments by 1
    creditReferrer = () => {
        const id = this.props.referrer;

        const ref = database.ref(`userData/${id}`)
        ref.once("value", snapshot => {
            if (snapshot && snapshot.exists()) {
                console.log(snapshot.val())
                let referrer = snapshot.val()
                referrer["referrals"]++;
                console.log(referrer)
                ref.set(referrer)
            }
        })
    }

    handleLogout = () => {
        console.log("logging out")
        this.setState({ isLoggedIn: false, activeUser: null })
        this.props.setActiveUser(null)
        auth.signOut()
    }

    render() {
        return (

            <div className="login">
                {!this.props.isLoggedIn ? <div>

                    <NavBar>
                        <NavBar.Brand>
                            <img src="https://live.staticflickr.com/65535/49968029767_6d56a52575_o.png" width="70px" height="70px" alt="logo" />
                        </NavBar.Brand>
                        <NavBar.Brand>REFERee</NavBar.Brand>
                    </NavBar>
                    <div style={{ textAlign: "center" }}>
                        <img src="https://live.staticflickr.com/65535/49968206482_048c35a16a_o.png" width="1000px" height="518px" alt="shoes" />
                    </div>
                    {
                        this.props.isLoggedIn
                            ? <Card bg="secondary" text="light" style={{ margin: "0 auto", width: "10vw", height: "5vh", marginTop: "3vh", marginBottom: "3vh", float: "none" }}>Hello, "NAME"</Card>
                            : (<Card style={{ margin: "0 auto", width: "70vw", height: "15vh", marginTop: "3vh", marginBottom: "3vh", float: "none" }}>
                                <Card.Body class="h4 text-center" style={{ marginTop: "2vh" }}>
                                    stay in the loop:
                                </Card.Body>
                                <Button variant="outline-dark" style={{ margin: "0 auto", marginTop: "1vh", marginBottom: "1vh", float: "none" }} onClick={this.handleGoogleLogin}>Sign in with Google</Button>
                            </Card>)
                    }
                    {
                        this.props.isLoggedIn

                            ? <Button variant="outline-info" onClick={this.handleLogout} >Sign out</Button>
                            : ""
                    }
                </div> : <Redirect to='/home' />}
            </div>
        )
    }
}
