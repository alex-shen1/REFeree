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
        q: 'I love this! How can I make a new account?',
        a: 'If you somehow made it here without signing in please go back to our sign in screen and log in with our convenient gmail authentification'
    },
    {
        q: 'What can I redeem with my points?',
        a: 'We offer discounts and for the extremely dedicated, even a brand new Mercedes!'
    },
    {
        q: 'This app is amazing, can I ask who made this?',
        a: 'That would be team REFeree, we are group 3-1 in the software engineering track and our goal is to give our clients the best possible product we can make!'
    },
]

export default function () {
    const faqs = questions.map(quest => {
        return (
            <div style={{ paddingBottom: 20 }}>
                <h4>{quest.q}</h4>
                <p>{quest.a}</p>
            </div>
        )
    })

    return (
        <div style={{ backgroundColor: '#37496D' }}>
            <NavPanel />
            <div className="FAQ">
                <h1 style={{ marginBottom: 20 }}>FAQs</h1>
                <h4 style={{ marginBottom: 40 }}>If you still have more questions please contact our team through our email</h4>
                {faqs}
            </div>
        </div>
    )
}
