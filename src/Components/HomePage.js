// import NavPanel from "./NavPanel";
import Progress from "./Progress";
import Refer from "./Refer";
import NavPanel from './NavPanel';

import React from "react";

import { Redirect } from "react-router-dom"

export default function HomePage(props) {
    return (
        props.isLoggedIn ?
            <div className="homepage">
                <NavPanel isAdmin={props.isAdmin} activeUser={props.activeUser} setActiveUser={props.setActiveUser} />
                <Refer activeUser={props.activeUser} />
                <Progress activeUser={props.activeUser} />
            </div> : <Redirect to='/login' />
    )
}
