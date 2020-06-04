import React, { Component } from "react";

import { database } from "../firebase"
import Card from "react-bootstrap/Card"

import { Redirect } from "react-router-dom"

export default class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: null
        }
    }
    componentDidMount() {
        database.ref("userData").on("value", snapshot => {
            if (snapshot && snapshot.exists()) {
                this.setState({ userData: snapshot.val() })
            }
        })
    }

    render() {
        return this.props.isAdmin ? <div className="adminpage">
            {this.state.userData != null ? Object.values(this.state.userData).map(user => {
                return <Card>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>
                        {`Points: ${user.referrals}`} <br/>
                        {`Email: ${user.email}`} <br />
                        {`Account created: ${user.created}`}
                    </Card.Text>
                </Card>
            })

                : ""}

        </div> : <Redirect to="login" />
    }
}