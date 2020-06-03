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

                    if(!userAlreadyExists){
                        let new_user_data = {
                            "name": user.displayName,
                            "referrals": 0
                        }
                        database.ref(`userData/${user.uid}`).set(new_user_data)
                    }
                    // should be moved into the above if later; outside so i don't need to
                    // recreate account every time for testing
                    if (this.props.referrer != null) {
                        this.creditReferrer()
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
                    {/* {
                        this.state.isLoggedIn
                            ? <button onClick={this.handleLogout} >Sign out</button>
                            : <button onClick={this.handleGoogleLogin}>Sign in with Google</button>
                    } */}
                    <button onClick={this.handleLogout} >Sign out</button>
                    <button onClick={this.handleGoogleLogin}>Sign in with Google</button>
                    <button onClick={this.creditReferrer}>test</button>
                </header>
            </div>
        )
    }
}
