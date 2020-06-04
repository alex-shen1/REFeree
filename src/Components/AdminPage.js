import React, { Component } from "react";

import { database } from "../firebase"
import Card from "react-bootstrap/Card"
import NavPanel from './NavPanel';
import Dropdown from "react-bootstrap/Dropdown"
import { Redirect } from "react-router-dom"

export default class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: null,
            sortField: "Name (A-Z)"
        }
    }
    componentDidMount() {
        database.ref("userData").on("value", snapshot => {
            if (snapshot && snapshot.exists()) {
                this.setState({ userData: Object.values(snapshot.val()) })
            }
        })
    }

    sortUsers = (field) => {
        let toSort = this.state.userData;
        let sortFunc;
        switch (field) {
            case "Name (A-Z)":
                sortFunc = (a, b) => {
                    return a.name.localeCompare(b.name)
                }
                break;
            case "Date created":
                sortFunc = (a, b) => {
                    return a.created.localeCompare(b.created)
                }
                break;
            case "Points (Ascending)":
                sortFunc = (a, b) => {
                    return (a.referrals - b.referrals)
                }
                break;
            case "Points (Descending)":
                sortFunc = (a, b) => {
                    return -(a.referrals - b.referrals)
                }
                break;
            default:
                console.log("no sort") // should never happen
        }
        // console.log(toSort)
        console.log(`sorting by ${field}`)
        toSort.sort(sortFunc);
        // console.log(toSort)
        // this.setState({ userData: toSort })
        return toSort;
    }

    render() {
        const sortFields = ["Name (A-Z)", "Date created", "Points (Descending)", "Points (Ascending)"]
        return this.props.isAdmin ? <div className="adminpage">
            <NavPanel isAdmin={this.props.isAdmin} activeUser={this.props.activeUser} setActiveUser={this.props.setActiveUser} />
            
            <Dropdown>
                <Dropdown.Toggle>Sort by...</Dropdown.Toggle>
                <Dropdown.Menu>
                    {sortFields.map(field => {
                        return <Dropdown.Item onClick={()=>this.setState({sortField: field})}>{field}</Dropdown.Item>
                    })}
                </Dropdown.Menu>
            </Dropdown>

            {this.state.userData != null ?
                this.sortUsers(this.state.sortField).map(user => {
                    return <Card>
                        <Card.Title>{user.name}</Card.Title>
                        <Card.Text>
                            {`Points: ${user.referrals}`} <br />
                            {`Email: ${user.email}`} <br />
                            {`Account created: ${user.created}`}
                        </Card.Text>
                    </Card>
                }) : ""}

        </div> : <Redirect to="login" />
    }
}