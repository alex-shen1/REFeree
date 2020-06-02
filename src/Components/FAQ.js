import React from "react";
import "../Styling/FAQ.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


const questions = {

}

class FAQ extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <div className="faq">
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

export default FAQ;