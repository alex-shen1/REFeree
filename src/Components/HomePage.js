// import NavPanel from "./NavPanel";
import Progress from "./Progress";
import Refer from "./Refer";
import NavPanel from './NavPanel';

import React, { Component } from "react";

import { Redirect } from "react-router-dom"

export default class HomePage extends Component {
<<<<<<< HEAD
    handleLogout = () => {
        this.setState({ isLoggedIn: false, activeUser: null })
        auth.signOut()
        this.props.setActiveUser(null)
    }
    
=======

>>>>>>> Co-authored-by: Esther Chung <e.chung059@gmail.com>
    render() {
        return this.props.isLoggedIn ? <div className="homepage">
            <NavPanel activeUser={this.props.activeUser} setActiveUser={this.props.setActiveUser} />
            <Refer activeUser={this.props.activeUser} />
            <Progress activeUser={this.props.activeUser} />


        </div> : <Redirect to='/login' />
    }
}