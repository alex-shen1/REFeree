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


            // check if logged user is already in list of all users; if not, initialize their data
            database.ref("userData").once("value", snapshot => {
                if (snapshot && snapshot.exists()) {
                    let userAlreadyExists = false;
                    Object.keys(snapshot.val()).map(id => {
                        if (user.uid === id) {
                            userAlreadyExists = true;
                        }
                    })

                    if (!userAlreadyExists) {
                        let new_user_data = {
                            "name": user.displayName,
                            "referrals": 0
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
                <img src="https://live.staticflickr.com/65535/49968078762_77ef7807c5_o.png" width="1100px" height="618px" alt="shoes" />

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

                            // ? <button onClick={this.handleLogout} >Sign out</button>
                            : <button onClick={this.handleGoogleLogin}>Sign in with Google</button>
                    }
                    {/* <button onClick={this.handleLogout} >Sign out</button>
                    <button onClick={this.handleGoogleLogin}>Sign in with Google</button>
                    <button onClick={this.creditReferrer}>test giving points</button>
                    {/* ? <Button variant="outline-info" onClick={this.handleLogout} >Sign out</Button>
                            : <Button variant="outline-info" onClick={this.handleGoogleLogin}>Sign in with Google</Button>
                    } */} 
                </div> : <Redirect to='/home' />}
            </div>
        )
    }
}
