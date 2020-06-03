import React from 'react';
import '../Styling/Progress.css';
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { database } from "../firebase"

const prizes = [
    '10% Discount',
    '20% Discount',
    '30% Discount',
    '50% Discount',
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
                                    <div style={{ marginLeft: '9vw' }}>5</div>
                                    <div style={{ marginLeft: '9vw' }}>10</div>
                                    <div style={{ marginLeft: '9vw' }}>15</div>
                                    <div style={{ marginLeft: '9vw' }}>20</div>
                                </div>
                                <ProgressBar
                                    striped now={100 * (this.state.referralCount / 20)}
                                    className='ProgressBar'
                                    label={this.state.referralCount}
                                />
                                <div className='Milestones'>
                                    <div>Rewards</div>
                                    <div className='Rewards'>{prizes[0]}</div>
                                    <div className='Rewards'>{prizes[1]}</div>
                                    <div className='Rewards'> {prizes[2]}</div>
                                    <div className='Rewards'>  {prizes[3]}</div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='Message'>
                            <Card.Body>You are {5 - this.state.referralCount % 5} referral(s) away from the next prize!!</Card.Body>
                            <Card.Body>Next Prize: {prizes[Math.floor(this.state.referralCount / 5)]}</Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Progress;