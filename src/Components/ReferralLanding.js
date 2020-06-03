import React, { Component } from 'react';

import { database } from "../firebase"
import Login from "./Login"

export default class ReferralLanding extends Component {
constructor(props){
    super(props);
    this.state = {
        referrersName: ""
    }
}
    componentDidMount = () => {
        database.ref(`userData/${this.props.id}`).once("value", snapshot=>{
            if(snapshot && snapshot.exists()){
                this.setState({referrersName: snapshot.val().name});
            }
        })
    }
    // getReferrersName = () => {
    //     database.ref(`userData/${this.props.id}`).once("value", snapshot=>{
    //         if(snapshot && snapshot.exists()){
    //             this.setState({referrersName: snapshot.val().name});
    //         }
    //     })
    // }
    render() {
        return <div>
            Referred by:
            {this.state.referrersName}
            <Login
                isLoggedIn={this.props.isLoggedIn}
                referrer={this.props.id}
                setActiveUser={this.props.setActiveUser} />
        </div>
    }
}