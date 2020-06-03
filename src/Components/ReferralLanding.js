import React, { Component } from 'react';

import {   database   } from "../firebase"

export default class ReferralLanding extends Component {
    // componentDidMount() {
    //     firebase.database().ref(`data/${this.props.id}/refs`).once("value", snapshot => {
    //         if (snapshot && snapshot.exists()) {
    //           this.setState({ refs: snapshot.val() }, () => {
    //             let id = firebase.auth().currentUser.uid;
    //             // console.log(id);
    //             this.checkUserIsAdmin(id);
    //           })
    //         }
    //       })
    // }
    render() {
        return <div>
            {this.props.id}
        </div>
    }
}