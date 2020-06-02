import React from 'react';
import '../Styling/Navbar.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import { Link } from "react-router-dom"


class NavPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    /*
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#aboutUs">About Us </Nav.Link>
                            <Nav.Link href="#faq">FAQ</Nav.Link>
                        </Nav>
    */

    render() {

        return (
            <div className="navpanel">
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">REFeree</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div>
                            <Link to='/home'> Home </Link>
                            <Link to='/aboutUs'>About Us </Link>
                            <Link to='/faq'>FAQ</Link>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavPanel;