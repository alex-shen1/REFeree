import React from 'react';
import '../Styling/Progress.css';
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Progress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            referralCount: 4,
            nextPrizeAt: 5
        }
    }

    render() {
        return (
            <div className="progressbar">
                <Row>
                    <Col>
                        <Card className="Card" style={{ margin: "0 auto", width: "30vw", height: "25vh", marginTop: "3vh", marginBottom: "3vh", float: "none" }}>
                            <Card.Body>You are __ referrals away!</Card.Body>
                        </Card>
                    </Col>
                    <Col>
<<<<<<< Updated upstream
                        <ProgressBar
                            variant="info"
                            striped now={100 * (this.state.referralCount / this.state.nextPrizeAt)}
                            className='Bar'
                            label={this.state.referralCount}
                        />
=======
                        <Card className='Message'>
                            <Card.Body>You are {5 - this.state.referralCount % 5} referral(s) away from the next prize!!</Card.Body>
                            <Card.Body>Next Prize: {prizes[Math.floor(this.state.referralCount / 5)]}</Card.Body>
                        </Card>
>>>>>>> Stashed changes
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Progress;