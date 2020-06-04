import React from 'react';
import '../Styling/Navbar.css';

import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import { Link } from "react-router-dom"

import { auth } from "../firebase"


class NavPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    handleLogout = () => {
        this.setState({ isLoggedIn: false, activeUser: null })
        auth.signOut()
        this.props.setActiveUser(null)
    }

    render() {

        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand>
                        <img src="https://live.staticflickr.com/65535/49968029767_6d56a52575_o.png" width="70px" height="70px" alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Brand href="#home">REFERee</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div>
                            <Link to='/home' style={{ paddingRight: 10 }}> Home</Link>
                            <Link to='/about' style={{ paddingRight: 10 }}>About Us</Link>
                            {this.props.isAdmin ? <Link to='/admin' style={{ paddingRight: 10 }}>Admin Dashboard</Link> : ""}
                        </div>

                    </Navbar.Collapse>
                    <div style={{ float: 'right' }}>
                        <Button
                            onClick={this.handleLogout}
                            variant="outline-danger"
                        >Sign out</Button>
                    </div>
                </Navbar>
            </div >
        )
    }
}

export default NavPanel;