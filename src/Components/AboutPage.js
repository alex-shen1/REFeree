import React from "react";
import "../Styling/FAQ.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import NavPanel from './NavPanel';

import { Redirect } from "react-router-dom"

const questions = [
    {
        q: 'How can I refer my friends?',
        a: 'Click on the refer button to invite your friends using email!'
    },
    {
        q: 'What can I redeem with my points?',
        a: 'We offer discounts and for the extremely dedicated, even a brand new Mercedes!'
    }
]

export default class AboutPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        const faqs = questions.map(quest => {
            return (
                <div style={{ paddingBottom: 20 }}>
                    <Card.Title variant="primary">{quest.q}</Card.Title>
                    <Card.Text variant='secondary'>{quest.a}</Card.Text>
                </div>
            )
        })

        return (
            <div className="faq">
                <NavPanel />
                <h1>FAQs</h1>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        {faqs}
                    </Card.Body>
                </Card>
            </div>
        )
    }
}