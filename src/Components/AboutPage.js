import React from "react";
import "../Styling/FAQ.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import NavPanel from './NavPanel';

const questions = {

}

export default class AboutPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <div className="faq">
                <NavPanel />
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>FAQs</Card.Title>
                        <Card.Text variant="primary">How can I refer my friends?</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}