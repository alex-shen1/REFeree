// import NavPanel from "./NavPanel";
import Progress from "./Progress";
import Refer from "./Refer";
import NavPanel from './NavPanel';

import React, { Component } from "react";

import {auth} from "../firebase"
export default class HomePage extends Component {
    handleLogout = () => {
        console.log("logging out")
        this.setState({ isLoggedIn: false, activeUser: null })
        auth.signOut()
    }
    render() {
        return <div className="homepage">
            <NavPanel/>
            <Refer activeUser={this.props.activeUser}/>
            <Progress  activeUser={this.props.activeUser} />

            <button onClick={this.handleLogout} >Sign out</button>
        </div>
    }
}