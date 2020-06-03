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
    'Added to the EXCLUSIVE Facebook group',
    'Your own Sneak co. stickers',
    'Your own Sneak co. T-shirt',
    'A free pair of shoes from our not-yet-released collection',
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
                                <Carousel className="carousel">
                                    <Carousel.Item>
                                        <img src={FacebookGroup} alt="FaceBookGroup" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img src={Sticker} alt="Sticker" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img src={Tshirt} alt="T-Shirt" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img src={SneakPeak} alt="Sneaker" />
                                    </Carousel.Item>
                                </Carousel>
                                {/* <div className='Milestones'>
                                    <div>Rewards</div>
                                    <div className='Rewards'>{prizes[0]}</div>
                                    <div className='Rewards'>{prizes[1]}</div>
                                    <div className='Rewards'>{prizes[2]}</div>
                                    <div className='Rewards'>{prizes[3]}</div>
                                </div> */}


                                    <div className='Rewards'> {prizes[2]}</div>
                                    <div className='Rewards'>  {prizes[3]}</div>
                                </div>
                            </Card.Body>
                        </Card>

                    </Col>

                    <Col>
                        <Card className='Message'>
                            <Card.Body>You are {this.state.nextPrizeAt - this.state.referralCount % this.state.nextPrizeAt} referrals away from the next prize!!</Card.Body>

                            <Card.Body>Next Prize: {prizes[Math.floor(this.state.referralCount / 5)]}</Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Progress;