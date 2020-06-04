import React from "react";
import "../Styling/FAQ.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import NavPanel from './NavPanel';

import { Redirect } from "react-router-dom"

const questions = [
    {
        q: 'How can I refer my friends?',
        a: 'All you have to do is send them your referral link! For extra convenience, you can also use our buttons to invite your friends using email.'
    },
    {
        q: 'What can I redeem with my points?',
        a: 'We offer numerous rewards: entry to an exclusive Facebook group, various merch, and for the extremely dedicated, even some shoes from our unreleased lineup!'
    },
    {
        q: 'I love this! How can I make a new account?',
        a: 'Wait... it shouldn\'t be possible for you to be here without an account! Please go back to our sign in screen and log in with our quick-and-easy Google authentication.'
    },
    {
        q: 'This app is amazing, can I ask who made this?',
        a: 'That would be Team REFERee; we are group 3-1 in the Software Engineering track and our goal is to give our clients the best possible product we can make!'
    },
]

export default function () {
    return (
        <div style={{ backgroundColor: '#37496D' }}>
            <NavPanel />

            <div className="about">
                <h1>About our team</h1>
                <h4> </h4
                ></div>

            <div className="FAQ">
                <h1 style={{ marginBottom: 20 }}>FAQs</h1>
                <h4 style={{ marginBottom: 40 }}>If you still have more questions, please contact our team through email!</h4>

                {questions.map(quest => {
                    return (
                        <div style={{ paddingBottom: 20 }}>
                            <h4>{quest.q}</h4>
                            <p>{quest.a}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
