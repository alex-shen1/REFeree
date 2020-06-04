import React from "react";
import "../Styling/FAQ.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import NavPanel from './NavPanel';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
        <div >
            <NavPanel />

            <div className="about" style={{ backgroundColor: '#FAD29E' }}>
                <Row style={{ marginBottom: "3vh" }}>
                    <Col xs="5">
                        <img src="https://live.staticflickr.com/65535/49970101703_5e7002749a_o.png" />
                    </Col>
                    <Col style={{ marginTop: "30vh" }}>
                        <h1>Hi, we're Sneak Co. </h1>
                        <h3> We're proud to craft sleek, smart, and sustainable shoes that help you move effortlessly wherever you go. </h3>
                    </Col>
                </Row>
            </div>
            <div className="moreAbout" style={{ backgroundColor: '#E0DFE2' }}>
                <Row style={{ marginBottom: "5vh" }}>
                    <Col xs="6" style={{ marginTop: "13vh" }}>
                        <h3>What We Do</h3>
                        <h5>At Sneak Co. we transform sustainable materials into comfortable and versatile shoes that are both stylish and eco-friendly.
                            Our products are made to last and built with materials that can easily be recycled.</h5>
                    </Col>
                    <Col>
                        <img src="https://live.staticflickr.com/65535/49971026832_6be1e52ae5_z.jpg" />
                    </Col>
                </Row>
                <Row style={{ marginBottom: "5vh" }}>
                    <Col xs="6">
                        <img src="https://live.staticflickr.com/65535/49970751621_d2e8e5acfe_z.jpg" />
                    </Col>
                    <Col style={{ marginTop: "15vh" }}>
                        <h3>Why We Do It</h3>
                        <h5>We are driven to create a better tomorrow. It is no longer acceptable for products to sit in a landfill for a hundred years—
                            that is why we are committed to creating sustainably-sourced shoes with end-of-life in mind. </h5>
                    </Col>
                </Row>
                <Row style={{ marginBottom: "5vh" }}>
                    <Col xs="6" style={{ marginTop: "13vh" }}>
                        <h3>Full Circle Footwear</h3>
                        <h5>Every pair of Sneak Co. shoes is backed by our commitment to building a better future. We’ve designed our shoes with materials
                        that can be easily reclaimed for recycling, so when you’re done with yours, we’ll be here to take them back and keep them out of
                        landfills. Send them back to our address with our pre-paid shipping label, and we’ll give you a discount on your next
                            Sneak Co. purchase. </h5>
                    </Col>
                    <Col>
                        <img src="https://live.staticflickr.com/65535/49970781866_a62e0b682a_z.jpg" />
                    </Col>
                </Row>
            </div>

            <div className="FAQ" style={{ backgroundColor: '#37496D' }}>
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
