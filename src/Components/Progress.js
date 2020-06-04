import React, { useState, useEffect } from 'react';
import '../Styling/Progress.css';
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

// import FacebookGroup from "./Images/FacebookGroup.png";
// import Sticker from "./Images/Sticker.png";
// import Tshirt from "./Images/Tshirt.png";
// import SneakPeak from "./Images/SneakPeak.png";

import { database } from "../firebase"

const prizes = [
    'Facebook group',
    'Sneak co. stickers',
    'Sneak co. T-shirt',
    'Unreleased shoes',
]

const longerPrizes = [
    'being added to the exclusive Facebook Group',
    'getting custom Sneak co. stickers in the mail',
    'receiving a custom  Sneak co. T-shirt',
    'receiving your own pair of not-yet-released Sneak co. sneakers'
]

export default function Progress(props) {
    const [referralCount, setReferralCount] = useState(0);
    const [nextPrizeAt, setNextPrizeAt] = useState(5);
    const [activeUser, setActiveUser] = useState(props.activeUser);

    useEffect((prevProps) => {
        //prevProps.activeUser
        if (activeUser !== null) {
            database.ref(`userData/${activeUser}`).on("value", snapshot => {
                if (snapshot && snapshot.exists()) {
                    setReferralCount(snapshot.val().referrals);
                }
            })
        }
    })

    return (
        <div className="progressbar">
            <Row>
                <Col>
                    <Card className='PCard'>
                        <Card.Title className='Title'>Your Progress</Card.Title>
                        <Card.Body>
                            <div className='Milestones'>
                                <div>0</div>
                                <div style={{ marginLeft: '8vw' }}>10</div>
                                <div style={{ marginLeft: '8vw' }}>25</div>
                                <div style={{ marginLeft: '8vw' }}>50</div>
                                <div style={{ marginLeft: '8vw' }}>100</div>
                            </div>
                            <ProgressBar
                                striped now={referralCount}
                                className='ProgressBar'
                                label={referralCount}
                            />
                            <div className='Milestones'>
                                <div>Rewards</div>
                                {prizes.map(prize => {
                                    return <div style={{ marginLeft: '3vw' }} className='Rewards'>{prize}</div>
                                })}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className='Message'>
                        <Card.Body style={{ marginTop: "6vh" }}>You are {nextPrizeAt - referralCount % nextPrizeAt} referrals away from the next prize,
                                which is {longerPrizes[Math.floor(referralCount / 5)]}!!</Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="carousel">
                        <Carousel indicators={false}>
                            <Carousel.Item>
                                <img class="d-block mx-auto" src="https://live.staticflickr.com/65535/49968391176_5810f896e5_o.png" width="280px" height="280px" alt="FaceBookGroup" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img class="d-block mx-auto" src="https://live.staticflickr.com/65535/49968391076_1e2941b92d_o.png" width="280px" height="280px" alt="Sticker" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img class="d-block mx-auto" src="https://live.staticflickr.com/65535/49968658347_90e8b3770c_o.png" width="280px" height="280px" alt="T-Shirt" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img class="d-block mx-auto" src="https://live.staticflickr.com/65535/49968658267_051134fdbf_o.png" width="280px" height="280px" alt="Sneaker" />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </div>
    )

}
