import React from 'react';
import '../Styling/Progress.css';
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

import FacebookGroup from "./Images/FacebookGroup.png";
import Sticker from "./Images/Sticker.png";
import Tshirt from "./Images/Tshirt.png";
import SneakPeak from "./Images/SneakPeak.png";



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

class Progress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            referralCount: 0,
            nextPrizeAt: 5,
            activeUser: this.props.activeUser
        }
    }

    componentDidMount() {
        this.getRefCount();
    }
    componentDidUpdate(prevProps) {
        if (this.props.activeUser !== prevProps.activeUser) {
            this.getRefCount();
        }
    }

    getRefCount = () => {
        database.ref(`userData/${this.state.activeUser}`).on("value", snapshot => {
            if (snapshot && snapshot.exists()) {
                this.setState({ referralCount: snapshot.val().referrals });
            }
        })
    }

    render() {
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
                                    striped now={this.state.referralCount}
                                    className='ProgressBar'
                                    label={this.state.referralCount}
                                />


                                <div className='Milestones'>
                                    <div>Rewards</div>
                                    <div style={{ marginLeft: '3vw' }} className='Rewards'>{prizes[0]}</div>
                                    <div style={{ marginLeft: '3vw' }} className='Rewards'>{prizes[1]}</div>
                                    <div style={{ marginLeft: '3vw' }} className='Rewards'>{prizes[2]}</div>
                                    <div style={{ marginLeft: '3vw' }} className='Rewards'>{prizes[3]}</div>
                                </div>
                            </Card.Body>

                        </Card>
                    </Col>

                    <Col>
                        <Card className='Message'>
                            <Card.Body>You are {this.state.nextPrizeAt - this.state.referralCount % this.state.nextPrizeAt} referrals away from the next prize,
                                which is {longerPrizes[Math.floor(this.state.referralCount / 5)]}!!</Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <div className="carousel">
                        <Carousel>
                            <Carousel.Item>
                                <img class="d-block mx-auto" src="https://live.staticflickr.com/65535/49968391176_5810f896e5_o.png" width="320px" height="320px" alt="FaceBookGroup" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img class="d-block mx-auto" src="https://live.staticflickr.com/65535/49968391076_1e2941b92d_o.png" width="320px" height="320px" alt="Sticker" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img class="d-block mx-auto" src="https://live.staticflickr.com/65535/49968658347_90e8b3770c_o.png" width="320px" height="320px" alt="T-Shirt" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img class="d-block mx-auto" src="https://live.staticflickr.com/65535/49968658267_051134fdbf_o.png" width="320px" height="320px" alt="Sneaker" />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </Row>
            </div>
        )
    }
}

export default Progress;