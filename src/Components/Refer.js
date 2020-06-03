import React from 'react';
import '../Styling/Refer.css';
import Card from "react-bootstrap/Card";
import { database } from "../firebase";


class Refer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="ref">
                Refer a friend: <br />
                Email
            </div>
        )
    }
}

export default Refer;