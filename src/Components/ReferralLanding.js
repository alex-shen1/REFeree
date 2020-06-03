import React, { Component } from 'react';

import { database } from "../firebase"
import Login from "./Login"

export default class ReferralLanding extends Component {

    render() {
        return <div>
            {this.props.id}
            <Login referrer={this.props.id} setActiveUser={this.props.setActiveUser}/>
        </div>
    }
}